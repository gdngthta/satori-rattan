import { motion } from 'motion/react';
import { ArrowRight, Leaf, Droplets, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { fadeUp } from '../lib/animations';

// ═══════════════════════════════════════════════════════════════════════════
//  COPYWRITING lives in these arrays. Edit text inside the quotes; keep names.
// ═══════════════════════════════════════════════════════════════════════════

const materials = [
  {
    name: 'Natural Rattan Core',
    description: 'Sustainably harvested from managed Indonesian forests, our premium rattan core offers exceptional strength and flexibility. Each pole is hand-selected for uniform thickness and natural color consistency.',
  },
  {
    name: 'Synthetic PE Rattan',
    description: 'High-density polyethylene rattan engineered for extreme durability and all-weather performance. UV-stabilized formulation ensures color retention and structural integrity.',
  },
];

const constructionDetails = [
  {
    title: 'Frame Engineering',
    description: 'Powder-coated aluminum or sustainably sourced hardwood frames engineered for maximum strength-to-weight ratio and long-term stability.',
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=600&h=500&fit=crop',
  },
  {
    title: 'Weaving Techniques',
    description: 'Traditional hand-weaving methods passed down through generations, ensuring tight, consistent patterns that maximize durability and aesthetic appeal.',
    image: 'https://images.unsplash.com/photo-1565183928294-7d22f90a72d6?w=600&h=500&fit=crop',
  },
  {
    title: 'Joinery & Finishing',
    description: 'Precision joinery techniques combined with multi-stage finishing processes create seamless connections and protective coatings that enhance longevity.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=500&fit=crop',
  },
];

const qcStages = [
  {
    title: 'Material Inspection',
    description: 'Every raw material batch undergoes testing for quality, consistency, and compliance with specifications.',
  },
  {
    title: 'In-Process Checks',
    description: 'Multiple quality checkpoints throughout production ensure adherence to dimensional tolerances and workmanship standards.',
  },
  {
    title: 'Final Verification',
    description: 'Comprehensive final inspection covering structural integrity, finish quality, and functional performance before packaging.',
  },
];

const sustainabilityPoints = [
  'Local artisan employment supporting community development',
  'Wastewater treatment for safe discharge and environmental protection',
];

// Reused section-heading (centered title + subtitle). dark=true flips colors for
// the dark QC section. Used by the Materials / Construction / QC sections.
function SectionHeading({ title, subtitle, dark = false }: { title: string; subtitle: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-center mb-10 md:mb-16"
    >
      <h2 className={`font-serif text-[32px] md:text-[clamp(36px,5vw,64px)] font-semibold leading-[1.2] mb-4 ${dark ? 'text-cream' : 'text-darker'}`}>
        {title}
      </h2>
      <p className={`font-sans text-[15px] md:text-[18px] max-w-[700px] mx-auto leading-[1.6] ${dark ? 'text-bark' : 'text-muted'}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}

const eyebrowWarm = 'font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm mb-4';

export default function Craftsmanship() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ── Hero (full-image) ── */}
      <section className="relative h-[60vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/pages/Hero-Craftsmanship.jpg"
            alt="Master artisan weaving natural rattan furniture"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark gradient so the white text stays readable over the photo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,31,28,0.85)_0%,rgba(34,31,28,0.3)_100%)]" />
        <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center text-white">
          <motion.div {...fadeUp} className="max-w-full md:max-w-[700px]">
            <div className="font-sans text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase mb-4 md:mb-6 opacity-90">
              Manufacturing Excellence
            </div>
            <h1 className="font-serif text-[34px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] mb-4 md:mb-6 tracking-[-0.02em]">
              Where Tradition Meets Precision
            </h1>
            <p className="font-sans text-[15px] md:text-[clamp(18px,2vw,22px)] leading-[1.6] opacity-95">
              12+ years of mastering the art and science of rattan furniture manufacturing, combining ancestral techniques with modern quality control
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Premium Materials ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            title="Premium Materials"
            subtitle="We source only the finest materials, ensuring exceptional quality and performance in every piece"
          />
          <div className="grid grid-cols-1 gap-4 md:gap-16 md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))]">
            {materials.map((material, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 md:p-10 bg-sand border border-dune"
              >
                <h3 className="font-serif text-[22px] md:text-[32px] font-semibold text-darker mb-4">
                  {material.name}
                </h3>
                <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8]">
                  {material.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Construction Details ── */}
      <section className="bg-sand px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            title="Construction Excellence"
            subtitle="Every detail is meticulously crafted to ensure structural integrity and lasting beauty"
          />
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
            {constructionDetails.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="group bg-cream overflow-hidden"
              >
                <div className="relative pt-[60%] md:pt-[75%] overflow-hidden">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="font-serif text-[20px] md:text-[24px] font-semibold text-darker mb-3">
                    {detail.title}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[15px] text-muted leading-[1.7]">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weaving Split (image + text) ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative pt-[75%] md:pt-[125%] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1000&fit=crop"
                alt="Close-up of skilled artisan hands weaving intricate rattan pattern"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className={eyebrowWarm}>Traditional Techniques</div>
              <h2 className="font-serif text-[28px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2] mb-6">
                The Art of Weaving
              </h2>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-6">
                Our master weavers have honed their craft over decades, creating tight, consistent patterns that are both beautiful and structurally superior. Each piece requires an average of 20-40 hours of meticulous handwork.
              </p>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8]">
                We preserve traditional Indonesian weaving patterns while innovating new techniques to meet modern performance requirements. This balance of heritage and innovation defines our approach to craftsmanship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quality Control (dark) ── */}
      <section className="bg-darker text-cream px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            dark
            title="Excellent Quality Control"
            subtitle="Multi-stage inspection protocols ensure every piece meets our exacting standards"
          />
          <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {qcStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center border-2 border-warm rounded-full">
                  <Shield className="w-7 h-7 md:w-9 md:h-9 text-warm" />
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] font-semibold mb-3">
                  {stage.title}
                </h3>
                <p className="font-sans text-[14px] md:text-[15px] text-bark leading-[1.7]">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability Split (text + image) ── */}
      <section className="bg-sand px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Leaf className="w-9 h-9 md:w-12 md:h-12 text-warm mb-6" />
              <h2 className="font-serif text-[28px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2] mb-6">
                Committed to Sustainability
              </h2>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-8">
                Environmental responsibility is woven into every aspect of our operation. We're committed to minimizing our environmental impact while supporting local communities.
              </p>
              <div className="flex flex-col gap-4">
                {sustainabilityPoints.map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Droplets className="w-4 h-4 md:w-5 md:h-5 text-warm shrink-0 mt-0.5" />
                    <span className="font-sans text-[14px] md:text-[15px] text-darker leading-[1.7]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative pt-[75%] md:pt-[125%] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=1000&fit=crop"
                alt="Sustainable rattan forest"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto"
        >
          <h2 className="font-serif text-[28px] md:text-[clamp(32px,4vw,48px)] font-semibold text-darker leading-[1.2] mb-6">
            Experience Our Craftsmanship
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-10">
            Request samples or visit our facility to see our manufacturing excellence firsthand
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-8 py-3.5 md:px-12 md:py-[18px] bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
