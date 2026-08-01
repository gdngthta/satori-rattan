import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import emailjs from '@emailjs/browser';
import { fadeUp } from '../lib/animations';

// ═══════════════════════════════════════════════════════════════════════════
//  PRODUCT DATA — this is the part you edit to add/change/remove products.
//  Each { ... } block is ONE product card. Copy a whole block to add another.
//  Keep the field names (name, image, dimensions, ...) exactly as they are.
//
//  COLOR OPTIONS (optional): add a `colors` list to a product to show clickable
//  color dots that swap the photo. Products WITHOUT `colors` just show one image.
//    swatch = the dot's color (hex).    image = the photo shown for that color.
// ═══════════════════════════════════════════════════════════════════════════

type ColorVariant = { name: string; swatch: string; image: string };

type Product = {
  name: string;
  image: string;           // default photo (used when there are no color options)
  dimensions: string;
  material: string;
  customizable: string;
  leadTime: string;
  colors?: ColorVariant[]; // optional — leave it off for single-photo products
  wide?: boolean;          // optional — set true for wide items (dining sets, sofas).
                           // The card spans 2 columns and uses a landscape photo.
};

const naturalProducts: Product[] = [
  {
    name: 'Lombok Lounge Chair',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop',
    dimensions: 'W 75cm × D 80cm × H 85cm',
    material: 'Natural Rattan Core',
    customizable: 'Yes',
    leadTime: '8-10 weeks',
    // ⬇️ DEMO color options (stand-in photos so you can see it work).
    //    Replace each `image` with your REAL color-variant photo, and set the
    //    `swatch` hex + `name` to match. Delete this whole `colors` block for
    //    products that only come in one color.
    colors: [
      { name: 'Natural',  swatch: '#d4c5b9', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop' },
      { name: 'Charcoal', swatch: '#2c2926', image: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=600&h=700&fit=crop' },
      { name: 'Sand',     swatch: '#e6ddd1', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=700&fit=crop' },
    ],
  },
  {
    name: 'Java Dining Set',
    // landscape crop for the wide card (replace with your real wide set photo)
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1000&h=560&fit=crop',
    dimensions: 'Table: Ø 140cm × H 75cm',
    material: 'Premium Rattan Peel',
    customizable: 'Yes',
    leadTime: '10-12 weeks',
    wide: true, // ← wide card: spans 2 columns with a landscape photo (good for sets)
  },
  {
    name: 'Bali Daybed',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=700&fit=crop',
    dimensions: 'W 180cm × D 150cm × H 45cm',
    material: 'Natural Rattan & Teak',
    customizable: 'Limited',
    leadTime: '12-14 weeks',
  },
  {
    name: 'Sumatra Accent Chair',
    image: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=600&h=700&fit=crop',
    dimensions: 'W 65cm × D 70cm × H 95cm',
    material: 'Woven Rattan Core',
    customizable: 'Yes',
    leadTime: '8-10 weeks',
  },
];

const syntheticProducts: Product[] = [
  {
    name: 'Marina Outdoor Sofa',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=700&fit=crop',
    dimensions: 'W 220cm × D 90cm × H 75cm',
    material: 'UV-Resistant PE Rattan',
    customizable: 'Yes',
    leadTime: '6-8 weeks',
  },
  {
    name: 'Coastal Bar Stool',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=700&fit=crop',
    dimensions: 'W 45cm × D 45cm × H 110cm',
    material: 'All-Weather Synthetic',
    customizable: 'Yes',
    leadTime: '5-7 weeks',
  },
  {
    name: 'Horizon Lounger',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=700&fit=crop',
    dimensions: 'W 200cm × D 75cm × H 90cm',
    material: 'Marine-Grade PE',
    customizable: 'Limited',
    leadTime: '7-9 weeks',
  },
  {
    name: 'Reef Dining Collection',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=700&fit=crop',
    dimensions: 'Table: W 180cm × D 90cm',
    material: 'Textured Synthetic Weave',
    customizable: 'Yes',
    leadTime: '8-10 weeks',
  },
];

// The rows shown inside every product card. Edit a label here -> it changes on
// every card at once (that's why it's written once, not per card).
const specFields: { key: 'dimensions' | 'material' | 'customizable' | 'leadTime'; label: string }[] = [
  { key: 'dimensions', label: 'Dimensions' },
  { key: 'material', label: 'Material' },
  { key: 'customizable', label: 'Customizable' },
  { key: 'leadTime', label: 'Lead Time' },
];

// Reused Tailwind label strings (no-prefix = phone, md: = desktop >= 768px).
const eyebrow = 'font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm';

// One product card. Keeps its own "which color is selected" state so clicking a
// dot swaps only THIS card's photo. Cards without `colors` show no dots.
function ProductCard({ product, index }: { product: Product; index: number }) {
  const [selected, setSelected] = useState(0);
  const hasColors = !!product.colors && product.colors.length > 0;
  const wide = !!product.wide;
  // show the selected color's photo, or the default photo if there are no colors
  const activeImage = hasColors ? product.colors![selected].image : product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      // "group" lets the image react when the whole card is hovered.
      // wide products span 2 grid columns (col-span-2) so a set fits in landscape.
      className={`group bg-sand overflow-hidden transition-transform duration-300 ease-smooth hover:-translate-y-1 ${wide ? 'col-span-2' : ''}`}
    >
      {/* Aspect box: tall 4:5 for normal cards, short landscape for wide ones */}
      <div className={`relative overflow-hidden ${wide ? 'pt-[50%]' : 'pt-[125%]'}`}>
        <img
          src={activeImage}
          alt={`${product.name} - ${product.material}`}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-smooth group-hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-serif text-[16px] md:text-[24px] font-semibold text-darker mb-2.5 md:mb-4">
          {product.name}
        </h3>

        {/* Color dots — only rendered when the product has a `colors` list */}
        {hasColors && (
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            {product.colors!.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(i)}
                aria-label={c.name}
                title={c.name}
                // selected dot gets a warm ring; swatch color is dynamic -> inline style
                className={`h-5 w-5 rounded-full border border-dune transition-all ${
                  i === selected ? 'ring-2 ring-warm ring-offset-1 ring-offset-sand' : ''
                }`}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-1.5 md:gap-2">
          {specFields.map(({ key, label }) => (
            <div key={key} className="flex justify-between items-start gap-2">
              <span className="font-sans text-[10px] md:text-[12px] font-semibold text-warm uppercase tracking-[0.05em] shrink-0">
                {label}
              </span>
              <span className="font-sans text-[11px] md:text-[13px] text-muted text-right">
                {product[key]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Product card grid. Reused for both the Natural and Synthetic lists.
function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} index={i} />
      ))}
    </div>
  );
}

// Small helper for the "01" / "02" section headers so we don't repeat the markup.
function CollectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      className="mb-8 md:mb-16"
    >
      <div className="flex items-start md:items-center gap-4 md:gap-6 mb-4">
        <div className="font-serif text-[48px] md:text-[72px] font-light text-warm opacity-40 leading-none shrink-0">
          {number}
        </div>
        <div>
          <h2 className="font-serif text-[24px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2]">
            {title}
          </h2>
          <p className="font-sans text-[13px] md:text-[16px] text-muted mt-2">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Soft gate: a short form that emails us the request (reuses the same EmailJS
// setup as the Contact page). Catalog stays visible; this just captures leads.
function CatalogRequest() {
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const submissionTime = new Date().toLocaleString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
    });
    try {
      // Same EmailJS service/template as the Contact form — lands in the same inbox.
      emailjs.init('pW1vDoZIFag3A6sY3');
      await emailjs.send('service_athfx8e', 'template_rz0s4di', {
        company_name: form.company,
        from_name: form.name,
        reply_to: form.email,
        phone: 'Not provided',
        project_type: 'Full Catalog Request',
        quantity: 'Not specified',
        budget: 'Not specified',
        message: form.interest || 'Requested the full product catalog.',
        submission_time: submissionTime,
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again, or email us at info@satorirattan.com.');
    } finally {
      setLoading(false);
    }
  };

  // ── Thank-you state (shown after a successful send) ──
  if (submitted) {
    return (
      <div className="max-w-[560px] mx-auto text-center">
        <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 text-warm mx-auto mb-5" />
        <h3 className="font-serif text-[24px] md:text-[32px] font-semibold text-darker mb-3">Thank You!</h3>
        <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.7]">
          We've received your request. Our team will email you the full catalog and a tailored quotation — expect to hear from us within <strong>3 working days</strong>.
        </p>
      </div>
    );
  }

  const inputCls =
    'w-full px-3.5 py-2.5 md:px-4 md:py-3 font-sans text-[14px] border border-dune bg-cream text-darker focus:border-warm';

  return (
    <div className="max-w-[560px] mx-auto text-center">
      <h3 className="font-serif text-[24px] md:text-[clamp(28px,3vw,40px)] font-semibold text-darker mb-4">
        Request the Full Catalog
      </h3>
      <p className="font-sans text-[14px] md:text-[16px] text-muted mb-8 leading-[1.6]">
        See our complete range of 200+ designs. Share your details and we'll email you the full catalog and a tailored quotation.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-[#fee] border border-[#fcc] rounded font-sans text-[13px] text-[#c00]">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label htmlFor="cat_name" className="sr-only">Your Name</label>
            <input id="cat_name" type="text" required autoComplete="name" placeholder="Your Name *"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
          </div>
          <div>
            <label htmlFor="cat_company" className="sr-only">Company</label>
            <input id="cat_company" type="text" required autoComplete="organization" placeholder="Company *"
              value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} />
          </div>
        </div>
        <div>
          <label htmlFor="cat_email" className="sr-only">Work Email</label>
          <input id="cat_email" type="email" required autoComplete="email" placeholder="Work Email *"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </div>
        <div>
          <label htmlFor="cat_interest" className="sr-only">What are you looking for?</label>
          <textarea id="cat_interest" rows={3} placeholder="What are you looking for? (optional)"
            value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={`${inputCls} resize-y`} />
        </div>
        <button type="submit" disabled={loading}
          className="mt-1 w-full md:w-auto md:self-center px-8 py-3.5 md:px-12 md:py-4 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark disabled:bg-muted disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? 'Sending...' : 'Request Catalog'}
        </button>
      </form>
    </div>
  );
}

export default function Collections() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ── Hero ── */}
      <section className="bg-sand px-6 pt-20 pb-16 md:px-12 md:pt-30 md:pb-24">
        <motion.div {...fadeUp} className="max-w-[1200px] mx-auto text-center">
          <div className={`${eyebrow} mb-4`}>Product Catalog</div>
          <h1 className="font-serif text-[38px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] text-darker mb-6">
            Our Collections
          </h1>
          <p className="font-sans text-[15px] md:text-[20px] text-muted max-w-[800px] mx-auto leading-[1.6]">
            Explore our curated range of premium rattan furniture, designed for clients seeking quality, durability, and timeless style
          </p>
        </motion.div>
      </section>

      {/* ── Natural Rattan ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <CollectionHeader
            number="01"
            title="Natural Rattan Collection"
            subtitle="Sustainably sourced and traditionally crafted for indoor and covered applications"
          />
          <ProductGrid products={naturalProducts} />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px bg-dune mx-6 md:mx-12" />

      {/* ── Synthetic Rattan ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <CollectionHeader
            number="02"
            title="Synthetic Rattan Collection"
            subtitle="High-performance, all-weather solutions for outdoor commercial applications"
          />
          <ProductGrid products={syntheticProducts} />
        </div>
      </section>

      {/* ── Request Full Catalog (soft gate → emails us via EmailJS) ── */}
      <section className="bg-dune px-6 py-14 md:px-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <CatalogRequest />
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-darker text-cream text-center px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto"
        >
          <h2 className="font-serif text-[28px] md:text-[clamp(32px,4vw,48px)] font-semibold leading-[1.2] mb-4">
            Need Volume Pricing or MOQ Information?
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-bark leading-[1.8] mb-8">
            Contact our sales team for detailed specifications, bulk pricing, and lead times
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-8 py-3.5 md:px-10 md:py-4 bg-cream text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-sand hover:-translate-y-0.5"
          >
            Contact Sales Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
