import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
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
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=700&fit=crop',
    dimensions: 'Table: Ø 140cm × H 75cm',
    material: 'Premium Rattan Peel',
    customizable: 'Yes',
    leadTime: '10-12 weeks',
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
  // show the selected color's photo, or the default photo if there are no colors
  const activeImage = hasColors ? product.colors![selected].image : product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      // "group" lets the image react when the whole card is hovered.
      className="group bg-sand overflow-hidden transition-transform duration-300 ease-smooth hover:-translate-y-1"
    >
      {/* pt-[125%] reserves a 4:5 tall box so the image never jumps as it loads */}
      <div className="relative pt-[125%] overflow-hidden">
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

      {/* ── See More Callout ── */}
      <section className="bg-dune text-center px-6 py-12 md:px-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto"
        >
          <h3 className="font-serif text-[24px] md:text-[clamp(28px,3vw,40px)] font-semibold text-darker mb-4">
            Looking for Custom Solutions?
          </h3>
          <p className="font-sans text-[14px] md:text-[16px] text-muted mb-8 leading-[1.6]">
            Our full catalog includes 200+ designs. Request our product catalog or discuss bespoke requirements with our team.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-7 py-3.5 md:px-8 md:py-4 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-0.5"
            >
              Request Full Catalog
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/bespoke"
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-7 py-3.5 md:px-8 md:py-4 border-2 border-darker text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-darker hover:text-cream"
            >
              Explore Bespoke Services
            </Link>
          </div>
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
