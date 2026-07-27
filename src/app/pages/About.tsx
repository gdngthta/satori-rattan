import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Factory, Target, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { fadeUp } from '../lib/animations';

// ═══════════════════════════════════════════════════════════════════════════
//  COPYWRITING lives in these arrays. Edit text inside the quotes; keep names.
// ═══════════════════════════════════════════════════════════════════════════

const stats = [
  { value: '2014', label: 'Founded' },
  { value: '12+', label: 'Years Experience' },
  { value: '150+', label: 'Team Members' },
  { value: '40+', label: 'Countries Served' },
];

const facilities = [
  {
    icon: Factory,
    title: 'Main Production Facility',
    location: 'Cirebon, West Java',
    specs: '45,000 m² manufacturing space with 12 production lines',
  },
  {
    icon: Users,
    title: 'Design & Development Center',
    location: 'Jakarta, Indonesia',
    specs: 'In-house design studio and material innovation lab',
  },
  {
    icon: Award,
    title: 'Quality Control Center',
    location: 'Cirebon, West Java',
    specs: 'Testing facility with advanced equipment',
  },
];

const markets = [
  'North America',
  'Europe',
  'Middle East',
  'Asia Pacific',
  'Australia',
  'South America',
];

const qualityCommitments = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Rigorous quality control at every production stage ensures consistent excellence in every piece we manufacture.',
  },
  {
    icon: Target,
    title: 'Client Focus',
    description: 'Dedicated to understanding and exceeding client expectations through collaborative partnerships and responsive service.',
  },
  {
    icon: Heart,
    title: 'Ethical Manufacturing',
    description: 'Fair wages, safe working conditions, and community support are fundamental to our business operations.',
  },
];

export default function About() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ── Hero (full-image) ── */}
      <section className="relative h-[60vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Hero-About.jpg"
            alt="Satori Rattan headquarters and manufacturing facility in Cirebon, Indonesia"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,31,28,0.85)_0%,rgba(34,31,28,0.3)_100%)]" />
        <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center text-white">
          <motion.div {...fadeUp} className="max-w-full md:max-w-[700px]">
            <div className="font-sans text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase mb-4 md:mb-6 opacity-90">
              About Us
            </div>
            <h1 className="font-serif text-[34px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] mb-4 md:mb-6 tracking-[-0.02em]">
              Building Partnerships Through Excellence
            </h1>
            <p className="font-sans text-[15px] md:text-[clamp(18px,2vw,22px)] leading-[1.6] opacity-95">
              For over 12 years, Satori Rattan has been the trusted B2B partner for global brands seeking premium rattan furniture solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-darker text-cream px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-serif text-[36px] md:text-[clamp(42px,5vw,64px)] font-semibold text-warm mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-[13px] md:text-[16px] font-medium text-bark tracking-[0.05em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage Split (text + image) ── */}
      <section className="px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm mb-4">
                Our Story
              </div>
              <h2 className="font-serif text-[30px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2] mb-6">
                A Legacy of Craftsmanship
              </h2>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-5">
                Founded in 2014 by master craftsman Satori, Satori Rattan began as a small workshop in Cirebon, Indonesia—the heart of
                traditional rattan manufacturing. What started with five artisans has grown into a global B2B leader employing over 150 skilled professionals.
              </p>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-5">
                Our growth has been guided by unwavering commitment to quality, innovation, and client partnerships. We've evolved from producing
                traditional Indonesian furniture to becoming a trusted manufacturer for international hospitality brands, residential developers, and commercial projects.
              </p>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8]">
                Today, Satori Rattan combines time-honored techniques with modern manufacturing capabilities, delivering premium rattan furniture
                to over 40 countries while supporting local communities and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative pt-[75%] md:pt-[125%] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&h=1000&fit=crop"
                alt="Historical photo of Satori Rattan workshop showcasing traditional craftsmanship heritage"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Facility Cards ── */}
      <section className="bg-sand px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-serif text-[32px] md:text-[clamp(36px,5vw,64px)] font-semibold text-darker leading-[1.2] mb-4">
              Our Facilities
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-muted max-w-[700px] mx-auto leading-[1.6]">
              State-of-the-art infrastructure supporting every stage of production and delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 md:p-10 bg-cream border border-dune transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-warm"
              >
                <facility.icon className="w-8 h-8 md:w-10 md:h-10 text-warm mb-4 md:mb-6" />
                <h3 className="font-serif text-[20px] md:text-[24px] font-semibold text-darker mb-2">
                  {facility.title}
                </h3>
                <p className="font-sans text-[13px] font-semibold text-warm tracking-[0.05em] mb-3">
                  {facility.location}
                </p>
                <p className="font-sans text-[14px] md:text-[15px] text-muted leading-[1.7]">
                  {facility.specs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Reach Split (image + text, reordered on mobile) ── */}
      <section className="px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] items-center">
            {/* order-2 md:order-1 = text first on phone, image on the left on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative pt-[70%] md:pt-[100%] overflow-hidden order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=800&fit=crop"
                alt="World map showing Satori Rattan's global distribution network"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="order-1 md:order-2"
            >
              <h2 className="font-serif text-[30px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2] mb-6">
                Global Reach, Local Expertise
              </h2>
              <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-8">
                Our furniture graces hotels, restaurants, residences, and commercial spaces across six continents. We've built a reputation for
                reliable delivery, consistent quality, and responsive service in every market we serve.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                {markets.map((market, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-2 md:px-5 md:py-2.5 bg-sand border border-dune font-sans text-[13px] md:text-[14px] font-medium text-darker"
                  >
                    {market}
                  </span>
                ))}
              </div>

              <p className="font-sans text-[13px] md:text-[15px] text-muted leading-[1.7] italic">
                "Our global presence is built on local relationships. We understand regional preferences, compliance requirements, and logistics
                challenges—ensuring seamless project execution anywhere in the world."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quality Commitments (dark) ── */}
      <section className="bg-darker text-cream px-6 py-20 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-serif text-[32px] md:text-[clamp(36px,5vw,64px)] font-semibold leading-[1.2] mb-4">
              Our Commitments
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-bark max-w-[700px] mx-auto leading-[1.6]">
              The principles that guide our business and define our relationships with clients, artisans, and communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {qualityCommitments.map((commitment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-7 md:p-10 border border-warm text-center transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-1"
              >
                <commitment.icon className="w-9 h-9 md:w-12 md:h-12 text-warm mx-auto mb-6" />
                <h3 className="font-serif text-[20px] md:text-[24px] font-semibold mb-3">
                  {commitment.title}
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-bark leading-[1.7]">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
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
            Partner with Industry Leaders
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-10">
            Join leading brands who trust Satori Rattan for their premium furniture needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-3.5 md:px-12 md:py-[18px] bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
