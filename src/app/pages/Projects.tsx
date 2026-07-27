import { motion } from 'motion/react';
import { MapPin, Ruler, Package, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { fadeUp } from '../lib/animations';

// ── Page data (unchanged) ──
const projects = [
  {
    name: 'Maison Tropicale Resort',
    location: 'Bali, Indonesia',
    scope: '240 Custom Pieces',
    materials: 'Natural Rattan, Teak',
    timeline: '6 Months',
    tags: ['Hospitality', 'Luxury', 'Natural'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
    description:
      'Complete FF&E package for a 5-star boutique resort featuring custom lounge furniture, dining sets, and poolside cabanas. Our team delivered bespoke pieces that seamlessly blend traditional Balinese aesthetics with contemporary comfort.',
    link: 'https://www.aman.com/resorts/amankila',
  },
  {
    name: 'The Greenwich Residences',
    location: 'London, UK',
    scope: '180 Units',
    materials: 'Synthetic Rattan, Aluminum',
    timeline: '8 Months',
    tags: ['Residential', 'Urban', 'Synthetic'],
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&h=800&fit=crop',
    description:
      'High-end residential development requiring weather-resistant balcony furniture for 180 luxury apartments. Our synthetic rattan solution provided durability and style for the UK climate while maintaining a natural aesthetic.',
    link: 'https://www.berkeleygroup.co.uk/',
  },
  {
    name: 'Azure Beach Club',
    location: 'Mykonos, Greece',
    scope: '320 Seating Units',
    materials: 'Synthetic Rattan, Stainless Steel',
    timeline: '5 Months',
    tags: ['Hospitality', 'Outdoor', 'Commercial'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    description:
      'Coastal beach club requiring UV-resistant, salt-tolerant furniture that could withstand extreme sun exposure and daily cleaning protocols. Our marine-grade synthetic rattan delivered exceptional performance.',
    link: 'https://www.scorpiosmusic.com/',
  },
  {
    name: 'Ember Restaurant Group',
    location: 'Singapore',
    scope: '12 Locations',
    materials: 'Natural & Synthetic Blend',
    timeline: '12 Months',
    tags: ['Commercial', 'Multi-Site', 'F&B'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    description:
      'Chain-wide furniture rollout for a premium restaurant group, coordinating production and delivery across multiple locations. Standardized designs with site-specific customization for each venue.',
    link: 'https://www.unlisted-collection.com/',
  },
  {
    name: 'Serenity Spa & Wellness',
    location: 'Maldives',
    scope: '85 Custom Pieces',
    materials: 'Natural Rattan, Bamboo',
    timeline: '4 Months',
    tags: ['Hospitality', 'Wellness', 'Luxury'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop',
    description:
      'Overwater spa pavilions requiring lightweight yet durable furniture with natural finishes. Our artisans created pieces that enhanced the tranquil atmosphere while meeting structural requirements.',
    link: 'https://www.soneva.com/',
  },
  {
    name: 'Verde Urban Gardens',
    location: 'Melbourne, Australia',
    scope: '450 Outdoor Sets',
    materials: 'Synthetic Rattan, Powder-Coated Aluminum',
    timeline: '7 Months',
    tags: ['Residential', 'Outdoor', 'Large-Scale'],
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&h=800&fit=crop',
    description:
      'Large-scale residential complex requiring cost-effective yet premium outdoor furniture for rooftop gardens and terraces. Our efficient production process delivered quality at competitive pricing.',
    link: 'https://www.lendlease.com/',
  },
];

// Reused label styles. A "class" here is just a string of Tailwind shortcuts.
// No-prefix labels = phone; the md: prefix kicks in on desktop (screens >= 768px).
const eyebrow = 'font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm';
const detailLabel = 'font-sans text-[11px] font-semibold tracking-[0.05em] uppercase text-warm mb-1';

export default function Projects() {
  return (
    // pt-16 (64px) on phone, pt-20 (80px) on desktop — clears the fixed header.
    <div className="pt-16 md:pt-20">

      {/* ── Hero ── */}
      <section className="bg-sand px-6 pt-20 pb-16 md:px-12 md:pt-30 md:pb-24">
        <motion.div {...fadeUp} className="max-w-[1200px] mx-auto text-center">
          <div className={`${eyebrow} mb-4`}>Portfolio</div>
          <h1 className="font-serif text-[38px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] text-darker mb-6">
            Featured Projects
          </h1>
          <p className="font-sans text-[15px] md:text-[20px] text-muted max-w-[800px] mx-auto leading-[1.6]">
            Discover how we've partnered with leading brands worldwide to deliver exceptional rattan furniture solutions for diverse applications
          </p>
        </motion.div>
      </section>

      {/* ── Case Studies ── */}
      <section className="pb-20">
        {projects.map((project, i) => {
          const even = i % 2 === 0;
          // On desktop, alternate which side the image sits. On phone it always stacks image-first.
          const imageOrder = even ? 'md:order-1' : 'md:order-2';
          const contentOrder = even ? 'md:order-2' : 'md:order-1';

          return (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] ${even ? 'bg-cream' : 'bg-sand'}`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: even ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className={`order-1 ${imageOrder} relative overflow-hidden min-h-[260px] md:min-h-0`}
              >
                {/* hover:scale-105 replaces the old JS mouse-enter/leave handlers */}
                <img
                  src={project.image}
                  alt={`${project.name} in ${project.location} - ${project.tags.join(', ')} project`}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-[600ms] ease-smooth hover:scale-105"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: even ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className={`order-2 ${contentOrder} flex flex-col justify-center px-6 py-8 md:p-16`}
              >
                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4 md:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-dune text-warm font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1 md:px-4 md:py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="font-serif text-[26px] md:text-[clamp(32px,4vw,48px)] font-semibold text-darker leading-[1.2] mb-3 md:mb-4">
                  {project.name}
                </h2>

                {/* Description */}
                <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-6 md:mb-8">
                  {project.description}
                </p>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 py-4 md:py-6 border-t border-b border-bark mb-6 md:mb-8">
                  {[
                    { icon: MapPin, label: 'Location', value: project.location },
                    { icon: Ruler, label: 'Scope', value: project.scope },
                    { icon: Package, label: 'Materials', value: project.materials },
                    { icon: Clock, label: 'Timeline', value: project.timeline },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-2 md:gap-3 items-start">
                      {/* Icon size set via w-/h- classes so it can be responsive too */}
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-warm shrink-0 mt-0.5" />
                      <div>
                        <div className={detailLabel}>{label}</div>
                        <div className="font-sans text-[13px] md:text-[14px] text-darker">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visit Website button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center justify-center md:justify-start gap-3 w-full md:w-auto px-6 py-3.5 md:px-8 bg-darker text-cream font-sans text-[13px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark hover:-translate-y-0.5"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section className="bg-darker text-cream text-center px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto"
        >
          <h2 className="font-serif text-[28px] md:text-[clamp(32px,4vw,56px)] font-semibold leading-[1.2] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-sans text-[15px] md:text-[18px] text-bark leading-[1.8] mb-10">
            Let's discuss how we can bring your vision to life with our expertise and craftsmanship
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-8 py-3.5 md:px-12 md:py-[18px] bg-cream text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-sand hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
