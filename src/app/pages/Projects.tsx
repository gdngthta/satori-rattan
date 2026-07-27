import { motion } from 'motion/react';
import { MapPin, Ruler, Package, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

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

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <div style={{ paddingTop: isMobile ? 64 : 80 }}>

      {/* ── Hero ── */}
      <section style={{ padding: isMobile ? '80px 24px 64px' : '120px 48px 96px', backgroundColor: 'var(--color-sand)' }}>
        <motion.div {...fadeUp} style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-warm)',
              marginBottom: 16,
            }}
          >
            Portfolio
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '38px' : 'clamp(48px, 6vw, 84px)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: 'var(--color-darker)',
              marginBottom: 24,
            }}
          >
            Featured Projects
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 15 : 20,
              color: 'var(--color-muted)',
              maxWidth: 800,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Discover how we've partnered with leading brands worldwide to deliver exceptional rattan furniture solutions for diverse applications
          </p>
        </motion.div>
      </section>

      {/* ── Case Studies ── */}
      <section style={{ padding: '0 0 80px' }}>
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              minHeight: isMobile ? 'auto' : 600,
              backgroundColor: i % 2 === 0 ? 'var(--color-cream)' : 'var(--color-sand)',
            }}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{
                order: isMobile ? 1 : i % 2 === 0 ? 1 : 2,
                position: 'relative',
                overflow: 'hidden',
                minHeight: isMobile ? 260 : 'auto',
              }}
            >
              <img
                src={project.image}
                alt={`${project.name} in ${project.location} - ${project.tags.join(', ')} project`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s var(--ease-smooth)',
                  display: 'block',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{
                order: isMobile ? 2 : i % 2 === 0 ? 2 : 1,
                padding: isMobile ? '32px 24px' : 64,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: isMobile ? 16 : 24 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: isMobile ? '4px 12px' : '6px 16px',
                      backgroundColor: 'var(--color-dune)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-warm)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '26px' : 'clamp(32px, 4vw, 48px)',
                  fontWeight: 600,
                  color: 'var(--color-darker)',
                  marginBottom: isMobile ? 12 : 16,
                  lineHeight: 1.2,
                }}
              >
                {project.name}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? 14 : 16,
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                  marginBottom: isMobile ? 24 : 32,
                }}
              >
                {project.description}
              </p>

              {/* Details Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: isMobile ? 16 : 24,
                  padding: isMobile ? '16px 0' : '24px 0',
                  borderTop: '1px solid var(--color-bark)',
                  borderBottom: '1px solid var(--color-bark)',
                  marginBottom: isMobile ? 24 : 32,
                }}
              >
                {[
                  { icon: MapPin, label: 'Location', value: project.location },
                  { icon: Ruler, label: 'Scope', value: project.scope },
                  { icon: Package, label: 'Materials', value: project.materials },
                  { icon: Clock, label: 'Timeline', value: project.timeline },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: isMobile ? 8 : 12, alignItems: 'flex-start' }}>
                    <Icon size={isMobile ? 16 : 20} style={{ color: 'var(--color-warm)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: 'var(--color-warm)',
                          marginBottom: 4,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: isMobile ? 13 : 14,
                          color: 'var(--color-darker)',
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit Website Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  gap: 12,
                  padding: isMobile ? '14px 24px' : '14px 32px',
                  width: isMobile ? '100%' : 'auto',
                  backgroundColor: 'var(--color-darker)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s var(--ease-smooth)',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-darker)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Visit Website
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: isMobile ? '64px 24px' : '96px 48px',
          backgroundColor: 'var(--color-darker)',
          color: 'var(--color-cream)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: 800, margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 56px)',
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 15 : 18,
              color: 'var(--color-bark)',
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Let's discuss how we can bring your vision to life with our expertise and craftsmanship
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              padding: isMobile ? '14px 32px' : '18px 48px',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? 320 : 'none',
              backgroundColor: 'var(--color-cream)',
              color: 'var(--color-darker)',
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s var(--ease-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-sand)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-cream)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}