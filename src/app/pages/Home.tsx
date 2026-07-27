import { motion } from 'motion/react';
import { ArrowRight, Check, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

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

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div style={{ paddingTop: 80 }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: isMobile ? '70vh' : '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/Hero-Picture.jpg"
            alt="Luxurious rattan lounge chairs in tropical resort setting"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(34,31,28,0.7) 0%, rgba(139,121,105,0.4) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            height: '100%',
            maxWidth: 1440,
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 48px',
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <motion.div {...fadeUp} style={{ maxWidth: isMobile ? '100%' : 800 }}>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? 11 : 13,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: isMobile ? 16 : 24,
                opacity: 0.9,
              }}
            >
              Premium Rattan Manufacturer
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? '36px' : 'clamp(48px, 6vw, 84px)',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: isMobile ? 16 : 24,
                letterSpacing: '-0.02em',
              }}
            >
              Crafting Excellence in Natural & Synthetic Rattan
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? '16px' : 'clamp(18px, 2vw, 22px)',
                lineHeight: 1.6,
                marginBottom: isMobile ? 32 : 48,
                opacity: 0.95,
                maxWidth: 640,
              }}
            >
              Trusted by global brands, interior designers, and commercial developers for 12+ years of uncompromising quality and craftsmanship.
            </p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', gap: isMobile ? 12 : 16 }}>
              <Link
                to="/collections"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  padding: isMobile ? '14px 28px' : '18px 40px',
                  backgroundColor: '#fff',
                  color: 'var(--color-darker)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-sand)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Collections
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  padding: isMobile ? '14px 28px' : '18px 40px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Credentials Ticker ── */}
      <div
        style={{
          backgroundColor: 'var(--color-darker)',
          color: 'var(--color-cream)',
          padding: '20px 0',
          overflow: 'hidden',
          borderTop: '1px solid var(--color-warm)',
          borderBottom: '1px solid var(--color-warm)',
        }}
      >
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'ticker 40s linear infinite' }}>
          {[...credentials, ...credentials, ...credentials].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '0 32px',
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? 12 : 14,
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              <Check size={16} style={{ color: 'var(--color-warm)', flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Mission Quote ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px', backgroundColor: 'var(--color-sand)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}
        >
          <Quote size={isMobile ? 36 : 48} style={{ color: 'var(--color-warm)', margin: '0 auto 32px' }} />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '24px' : 'clamp(32px, 4vw, 56px)',
              fontWeight: 500,
              lineHeight: 1.4,
              color: 'var(--color-darker)',
              marginBottom: 32,
              fontStyle: 'italic',
            }}
          >
            "We don't just manufacture furniture. We craft timeless pieces that embody the perfect harmony between nature's beauty and human ingenuity."
          </h2>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, fontWeight: 600, color: 'var(--color-warm)' }}>
            — Satori Rattan Philosophy
          </div>
        </motion.div>
      </section>

      {/* ── Featured Products ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ marginBottom: 48, textAlign: 'center' }}
          >
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
              Our Work
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? '36px' : 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                color: 'var(--color-darker)',
                lineHeight: 1.2,
              }}
            >
              Featured Products
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: isMobile ? 16 : 32,
            }}
          >
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
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div style={{ position: 'relative', paddingTop: '125%', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.category}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s var(--ease-smooth)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      width: 32,
                      height: 32,
                      backgroundColor: 'rgba(254,253,251,0.95)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s var(--ease-smooth)',
                    }}
                    className="external-link-icon"
                  >
                    <ExternalLink size={14} style={{ color: 'var(--color-darker)' }} />
                  </div>
                </div>
                <div style={{ padding: isMobile ? '12px 0' : '24px 0' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-warm)',
                      marginBottom: 4,
                    }}
                  >
                    {project.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isMobile ? 16 : 24,
                      fontWeight: 600,
                      color: 'var(--color-darker)',
                      marginBottom: 4,
                    }}
                  >
                    {project.name}
                  </h3>
                  {!isMobile && (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)' }}>
                      {project.location}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            style={{ marginTop: isMobile ? 40 : 64, textAlign: 'center' }}
          >
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: isMobile ? '14px 28px' : '16px 40px',
                border: '2px solid var(--color-darker)',
                color: 'var(--color-darker)',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.3s var(--ease-smooth)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-darker)';
                e.currentTarget.style.color = 'var(--color-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-darker)';
              }}
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Collections Preview ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px', backgroundColor: 'var(--color-sand)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ marginBottom: isMobile ? 40 : 64, textAlign: 'center' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? '36px' : 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                color: 'var(--color-darker)',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Our Collections
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? 15 : 18,
                color: 'var(--color-muted)',
                maxWidth: 640,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Explore our curated range of natural and synthetic rattan furniture designed for diverse applications
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: isMobile ? 48 : 48,
            }}
          >
            {/* Natural Rattan */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', marginBottom: 24 }}>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                  alt="Natural rattan furniture collection"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s var(--ease-smooth)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 24 : 32, fontWeight: 600, color: 'var(--color-darker)', marginBottom: 12 }}>
                Natural Rattan
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 24 }}>
                Sustainably sourced natural rattan crafted using traditional techniques, offering authentic warmth and character for exclusive indoor spaces.
              </p>
              <Link
                to="/collections"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--color-warm)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'gap 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
              >
                Explore Natural Collection
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Synthetic Rattan */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', marginBottom: 24 }}>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                  alt="Synthetic rattan furniture collection"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s var(--ease-smooth)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 24 : 32, fontWeight: 600, color: 'var(--color-darker)', marginBottom: 12 }}>
                Synthetic Rattan
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 24 }}>
                High-performance synthetic rattan engineered for extreme durability, UV resistance, and all-weather performance. Ideal for outdoor hospitality and commercial uses.
              </p>
              <Link
                to="/collections"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--color-warm)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'gap 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
              >
                Explore Synthetic Collection
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship Split ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: isMobile ? 40 : 64,
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
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
                Our Expertise
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '30px' : 'clamp(36px, 5vw, 56px)',
                  fontWeight: 600,
                  color: 'var(--color-darker)',
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                Master Craftsmanship Meets Modern Innovation
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? 15 : 18,
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Every piece we create is a testament to decades of experience, combining time-honored weaving techniques with cutting-edge manufacturing processes to deliver exceptional quality at scale.
              </p>
              <Link
                to="/craftsmanship"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: isMobile ? '14px 28px' : '16px 40px',
                  backgroundColor: 'var(--color-darker)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s var(--ease-smooth)',
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
                Discover Our Process
                <ArrowRight size={18} />
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{
                  marginTop: 48,
                  padding: isMobile ? 24 : 32,
                  backgroundColor: 'var(--color-sand)',
                  border: '1px solid var(--color-dune)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 36 : 48, fontWeight: 600, color: 'var(--color-warm)', marginBottom: 8 }}>
                  150+
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--color-darker)', marginBottom: 8 }}>
                  Skilled Artisans
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  Our team of master craftsmen brings generations of expertise to every project
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', paddingTop: isMobile ? '80%' : '125%', overflow: 'hidden' }}>
                <img
                  src="/images/Master-Craftmanship.png"
                  alt="Skilled artisan weaving rattan furniture by hand"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '86.8%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Grid ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '96px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: isMobile ? 24 : 48,
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? '32px' : 'clamp(48px, 6vw, 72px)',
                    fontWeight: 600,
                    color: 'var(--color-warm)',
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 12 : 16,
                    fontWeight: 500,
                    color: 'var(--color-bark)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ marginBottom: isMobile ? 40 : 64, textAlign: 'center' }}
          >
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
              How We Work
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? '36px' : 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                color: 'var(--color-darker)',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Our Process
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? 15 : 18,
                color: 'var(--color-muted)',
                maxWidth: 640,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              From concept to delivery, we ensure seamless collaboration at every stage and we made everything in house
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? 16 : 32,
            }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{
                  padding: isMobile ? 24 : 32,
                  backgroundColor: 'var(--color-sand)',
                  border: '1px solid var(--color-dune)',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-dune)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-sand)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 36 : 48,
                    fontWeight: 600,
                    color: 'var(--color-warm)',
                    opacity: 0.4,
                    marginBottom: 16,
                  }}
                >
                  {step.number}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 20 : 24, fontWeight: 600, color: 'var(--color-darker)', marginBottom: 12 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 15, color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px', backgroundColor: 'var(--color-dune)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}
        >
          <Quote size={isMobile ? 40 : 56} style={{ color: 'var(--color-warm)', margin: '0 auto 32px', opacity: 0.6 }} />
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '20px' : 'clamp(24px, 3vw, 36px)',
              fontWeight: 500,
              lineHeight: 1.6,
              color: 'var(--color-darker)',
              marginBottom: 32,
              fontStyle: 'italic',
            }}
          >
            "Satori Rattan has been our exclusive furniture partner for over 15 years. Their attention to detail, consistency in quality, and ability to scale production while maintaining craftsmanship is unmatched in the industry."
          </p>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, fontWeight: 600, color: 'var(--color-darker)', marginBottom: 4 }}>
              Marcus Chen
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 13 : 14, color: 'var(--color-muted)' }}>
              Director of Procurement, Horizons Hospitality Group
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          style={{ maxWidth: 800, margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '32px' : 'clamp(36px, 5vw, 64px)',
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Let's Create Something Exceptional Together
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 15 : 18,
              color: 'var(--color-bark)',
              lineHeight: 1.8,
              marginBottom: 48,
            }}
          >
            Whether you need custom bespoke pieces or large-scale contract manufacturing, our team is ready to bring your vision to life.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', gap: isMobile ? 12 : 16, justifyContent: 'center', alignItems: 'center' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: isMobile ? '14px 28px' : '18px 48px',
                width: isMobile ? '100%' : 'auto',
                backgroundColor: 'var(--color-cream)',
                color: 'var(--color-darker)',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
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
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/bespoke"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: isMobile ? '14px 28px' : '18px 48px',
                width: isMobile ? '100%' : 'auto',
                border: '2px solid var(--color-warm)',
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.3s var(--ease-smooth)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-warm)';
                e.currentTarget.style.borderColor = 'var(--color-warm)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--color-warm)';
              }}
            >
              Explore Bespoke Services
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}