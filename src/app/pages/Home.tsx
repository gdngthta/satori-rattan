import { motion } from 'motion/react';
import { ArrowRight, Check, Quote, ExternalLink, Hotel, Home as HomeIcon, Building2, Store } from 'lucide-react';
import { Link } from 'react-router';
import { fadeUp } from '../lib/animations';

// ═══════════════════════════════════════════════════════════════════════════
//  COPYWRITING lives in these arrays. Edit text inside the quotes; keep names.
// ═══════════════════════════════════════════════════════════════════════════

const credentials = [
  '12+ Years Manufacturing Excellence',
  'Exported to 40+ Countries',
  'B2B Trusted Partner',
];

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Retention' },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Brief',
    description: 'Understanding your project requirements, aesthetic vision, and technical specifications.',
  },
  {
    number: '02',
    title: 'Design Development',
    description: 'Creating detailed CAD drawings, material selection, and prototype development.',
  },
  {
    number: '03',
    title: 'Sampling & Approval',
    description: 'Physical samples produced for quality verification and design refinement.',
  },
  {
    number: '04',
    title: 'Production Planning',
    description: 'Material sourcing, timeline scheduling, and quality control protocols established.',
  },
  {
    number: '05',
    title: 'Manufacturing',
    description: 'Expert craftsmen execute production with rigorous quality checks at each stage.',
  },
  {
    number: '06',
    title: 'Delivery & Support',
    description: 'Comprehensive packaging, global logistics coordination, and ongoing support.',
  },
];

const featuredProjects = [
  {
    name: 'Kolot Chair',
    location: 'Manao rattan skin off with leather binded.',
    image: '/images/Crown-Chair-WarmBeige.png',
    category: 'Lounge',
    link: 'https://urbanquarter.com/indonesian/memilih-furniture-untuk-menciptakan-rumah-yang-nyaman-dari-toko-furnitur-jakarta-selatan/',
  },
  {
    name: 'Canari',
    location: 'Carbon steel powder coated / Polyethylene weave',
    image: '/images/Canari-Chair.png',
    category: 'Dining',
    link: 'https://www.berkeleygroup.co.uk/',
  },
  {
    name: 'Man O',
    location: 'Carbon steel powder coated / Rattan core weave.',
    image: '/images/Glass-Chair.jpg',
    category: 'Lounge',
    link: 'https://www.scorpiosmusic.com/',
  },
  {
    name: 'Koreza',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=900&fit=crop',
    category: 'Commercial',
    link: 'https://www.unlisted-collection.com/',
  },
];

// Our Markets — industry categories (true & generic, needs no client permission).
// Edit titles/descriptions inside the quotes; keep the icon + field names.
const industries = [
  { icon: Hotel, title: 'Hospitality', description: 'Hotels, resorts, restaurants, and beach clubs seeking durable, design-forward furniture.' },
  { icon: HomeIcon, title: 'Residential', description: 'Developers and interior designers furnishing homes, apartments, and villas.' },
  { icon: Building2, title: 'Commercial', description: 'Offices, lobbies, and mixed-use spaces that need quality at scale.' },
  { icon: Store, title: 'Retail', description: 'Showrooms and retail brands looking for distinctive, on-brand pieces.' },
];

// ⬇️ EDIT THIS with your REAL client brand names (only ones you're allowed to show).
// These "Brand One/Two/…" are placeholders — replace the text inside the quotes.
// Add or remove lines to change how many show. (Text names for now; logo images later.)
const clients = [
  'Brand One',
  'Brand Two',
  'Brand Three',
  'Brand Four',
  'Brand Five',
];

// Reused warm "eyebrow" label above section titles.
const eyebrow = 'font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm mb-4';

export default function Home() {
  return (
    <div className="pt-20">

      {/* ── Hero (full-image) ── */}
      <section className="relative h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Hero-Picture.jpg"
            alt="Luxurious rattan lounge chairs in tropical resort setting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,31,28,0.7)_0%,rgba(139,121,105,0.4)_100%)]" />
        <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center text-white">
          <motion.div {...fadeUp} className="max-w-full md:max-w-[800px]">
            <div className="font-sans text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase mb-4 md:mb-6 opacity-90">
              Premium Rattan Manufacturer
            </div>
            <h1 className="font-serif text-[36px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] mb-4 md:mb-6 tracking-[-0.02em]">
              Crafting Excellence in Natural & Synthetic Rattan
            </h1>
            <p className="font-sans text-[16px] md:text-[clamp(18px,2vw,22px)] leading-[1.6] mb-8 md:mb-12 opacity-95 max-w-[640px]">
              Trusted by global brands, interior designers, and commercial developers for 12+ years of uncompromising quality and craftsmanship.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                to="/collections"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 md:px-10 md:py-[18px] bg-white text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-sand hover:-translate-y-0.5"
              >
                View Collections
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 md:px-10 md:py-[18px] border-2 border-white/30 text-white font-sans text-[14px] font-semibold tracking-[0.05em] uppercase backdrop-blur-[8px] transition-all duration-300 ease-smooth hover:bg-white/10 hover:border-white/50"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Credentials Ticker ── */}
      <div className="bg-darker text-cream py-5 overflow-hidden border-t border-b border-warm">
        {/* animate-[ticker_...] runs the @keyframes ticker defined in index.css */}
        <div className="flex whitespace-nowrap animate-[ticker_40s_linear_infinite]">
          {[...credentials, ...credentials, ...credentials].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-3 px-8 font-sans text-[12px] md:text-[14px] font-medium tracking-[0.05em]">
              <Check className="w-4 h-4 text-warm shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Mission Quote ── */}
      <section className="bg-sand px-6 py-20 md:px-12 md:py-[140px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-[1000px] mx-auto text-center"
        >
          <Quote className="w-9 h-9 md:w-12 md:h-12 text-warm mx-auto mb-8" />
          <h2 className="font-serif text-[24px] md:text-[clamp(32px,4vw,56px)] font-medium leading-[1.4] text-darker mb-8 italic">
            "We don't just manufacture furniture. We craft timeless pieces that embody the perfect harmony between nature's beauty and human ingenuity."
          </h2>
          <div className="font-sans text-[14px] md:text-[16px] font-semibold text-warm">
            — Satori Rattan Philosophy
          </div>
        </motion.div>
      </section>

      {/* ── Who We Serve (Industries) ── */}
      <section className="px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10 md:mb-16"
          >
            <div className={eyebrow}>Our Markets</div>
            <h2 className="font-serif text-[36px] md:text-[clamp(36px,5vw,64px)] font-semibold text-darker leading-[1.2] mb-4">
              Industries We Serve
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-muted max-w-[640px] mx-auto leading-[1.6]">
              From five-star hospitality to large-scale residential developments, we partner with brands across every corner of the furniture market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 md:p-10 bg-sand border border-dune text-center transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-warm"
              >
                <ind.icon className="w-8 h-8 md:w-10 md:h-10 text-warm mx-auto mb-4 md:mb-6" />
                <h3 className="font-serif text-[18px] md:text-[22px] font-semibold text-darker mb-2">
                  {ind.title}
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-muted leading-[1.6]">
                  {ind.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted By (specific brands) — edit the `clients` list above ── */}
      <section className="bg-sand px-6 py-12 md:px-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-[1440px] mx-auto text-center"
        >
          <div className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm mb-8">
            Who We Serve
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 md:gap-x-16">
            {clients.map((name, i) => (
              <span key={i} className="font-serif text-[20px] md:text-[28px] font-medium text-muted">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Featured Products ── */}
      <section className="px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <div className={eyebrow}>Our Work</div>
            <h2 className="font-serif text-[36px] md:text-[clamp(36px,5vw,64px)] font-semibold text-darker leading-[1.2]">
              Featured Products
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative overflow-hidden block cursor-pointer"
              >
                <div className="relative pt-[125%] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.category}`}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-smooth group-hover:scale-105"
                  />
                  {/* Small icon that fades in when the card is hovered */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-[rgba(254,253,251,0.95)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-smooth">
                    <ExternalLink size={14} className="text-darker" />
                  </div>
                </div>
                <div className="py-3 md:py-6">
                  <div className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-warm mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-[16px] md:text-[24px] font-semibold text-darker mb-1">
                    {project.name}
                  </h3>
                  {/* hidden on phone, shown on desktop (was the old isMobile check) */}
                  <p className="hidden md:block font-sans text-[14px] text-muted">
                    {project.location}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>

      {/* ── Collections Preview ── */}
      <section className="bg-sand px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-serif text-[36px] md:text-[clamp(36px,5vw,64px)] font-semibold text-darker leading-[1.2] mb-4">
              Our Collections
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-muted max-w-[640px] mx-auto leading-[1.6]">
              Explore our curated range of natural and synthetic rattan furniture designed for diverse applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:gap-12 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
            {/* Natural Rattan */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative pt-[75%] overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                  alt="Natural rattan furniture collection"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-smooth hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-[24px] md:text-[32px] font-semibold text-darker mb-3">
                Natural Rattan
              </h3>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-6">
                Sustainably sourced natural rattan crafted using traditional techniques, offering authentic warmth and character for exclusive indoor spaces.
              </p>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 hover:gap-3 font-sans text-[14px] font-semibold text-warm tracking-[0.05em] uppercase transition-all duration-300 ease-smooth"
              >
                Explore Natural Collection
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Synthetic Rattan */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative pt-[75%] overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                  alt="Synthetic rattan furniture collection"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[600ms] ease-smooth hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-[24px] md:text-[32px] font-semibold text-darker mb-3">
                Synthetic Rattan
              </h3>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-6">
                High-performance synthetic rattan engineered for extreme durability, UV resistance, and all-weather performance. Ideal for outdoor hospitality and commercial uses.
              </p>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 hover:gap-3 font-sans text-[14px] font-semibold text-warm tracking-[0.05em] uppercase transition-all duration-300 ease-smooth"
              >
                Explore Synthetic Collection
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship Split ── */}
      <section className="px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className={eyebrow}>Our Expertise</div>
              <h2 className="font-serif text-[30px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2] mb-6">
                Master Craftsmanship Meets Modern Innovation
              </h2>
              <p className="font-sans text-[15px] md:text-[18px] text-muted leading-[1.8] mb-8">
                Every piece we create is a testament to decades of experience, combining time-honored weaving techniques with cutting-edge manufacturing processes to deliver exceptional quality at scale.
              </p>
              <Link
                to="/craftsmanship"
                className="inline-flex items-center gap-3 px-7 py-3.5 md:px-10 md:py-4 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-0.5"
              >
                Discover Our Process
                <ArrowRight size={18} />
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="mt-12 p-6 md:p-8 bg-sand border border-dune"
              >
                <div className="font-serif text-[36px] md:text-[48px] font-semibold text-warm mb-2">150+</div>
                <div className="font-sans text-[14px] font-semibold text-darker mb-2">Skilled Artisans</div>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">
                  Our team of master craftsmen brings generations of expertise to every project
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="relative pt-[80%] md:pt-[125%] overflow-hidden">
                <img
                  src="/images/Master-Craftmanship.png"
                  alt="Skilled artisan weaving rattan furniture by hand"
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-[86.8%] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Grid ── */}
      <section className="bg-darker text-cream px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3 gap-6 md:gap-12 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center"
              >
                <div className="font-serif text-[32px] md:text-[clamp(48px,6vw,72px)] font-semibold text-warm mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-[12px] md:text-[16px] font-medium text-bark tracking-[0.05em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10 md:mb-16"
          >
            <div className={eyebrow}>How We Work</div>
            <h2 className="font-serif text-[36px] md:text-[clamp(36px,5vw,64px)] font-semibold text-darker leading-[1.2] mb-4">
              Our Process
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-muted max-w-[640px] mx-auto leading-[1.6]">
              From concept to delivery, we ensure seamless collaboration at every stage and we made everything in house
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 md:p-8 bg-sand border border-dune transition-all duration-300 ease-smooth hover:bg-dune hover:-translate-y-1"
              >
                <div className="font-serif text-[36px] md:text-[48px] font-semibold text-warm opacity-40 mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-[20px] md:text-[24px] font-semibold text-darker mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-[14px] md:text-[15px] text-muted leading-[1.7]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-dune px-6 py-20 md:px-12 md:py-[140px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-[900px] mx-auto text-center"
        >
          <Quote className="w-10 h-10 md:w-14 md:h-14 text-warm mx-auto mb-8 opacity-60" />
          <p className="font-serif text-[20px] md:text-[clamp(24px,3vw,36px)] font-medium leading-[1.6] text-darker mb-8 italic">
            "Satori Rattan has been our exclusive furniture partner for over 15 years. Their attention to detail, consistency in quality, and ability to scale production while maintaining craftsmanship is unmatched in the industry."
          </p>
          <div>
            <div className="font-sans text-[14px] md:text-[16px] font-semibold text-darker mb-1">Marcus Chen</div>
            <div className="font-sans text-[13px] md:text-[14px] text-muted">
              Director of Procurement, Horizons Hospitality Group
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-darker text-cream text-center px-6 py-20 md:px-12 md:py-[140px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-[800px] mx-auto"
        >
          <h2 className="font-serif text-[32px] md:text-[clamp(36px,5vw,64px)] font-semibold leading-[1.2] mb-6">
            Let's Create Something Exceptional Together
          </h2>
          <p className="font-sans text-[15px] md:text-[18px] text-bark leading-[1.8] mb-12">
            Whether you need custom bespoke pieces or large-scale contract manufacturing, our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-7 py-3.5 md:px-12 md:py-[18px] bg-cream text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-sand hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/bespoke"
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-7 py-3.5 md:px-12 md:py-[18px] border-2 border-warm text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-warm"
            >
              Explore Bespoke Services
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
