import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Factory, Target, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

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
  const isMobile = useIsMobile();

  return (
    <div style={{ paddingTop: isMobile ? 64 : 80 }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: isMobile ? '60vh' : '85vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/Hero-About.jpg"
            alt="Satori Rattan headquarters and manufacturing facility in Cirebon, Indonesia"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(34,31,28,0.85) 0%, rgba(34,31,28,0.3) 100%)',
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
          <motion.div {...fadeUp} style={{ maxWidth: isMobile ? '100%' : 700 }}>
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
              About Us
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? '34px' : 'clamp(48px, 6vw, 84px)',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: isMobile ? 16 : 24,
                letterSpacing: '-0.02em',
              }}
            >
              Building Partnerships Through Excellence
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? '15px' : 'clamp(18px, 2vw, 22px)',
                lineHeight: 1.6,
                opacity: 0.95,
              }}
            >
              For over 12 years, Satori Rattan has been the trusted B2B partner for global brands seeking premium rattan furniture solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ padding: isMobile ? '48px 24px' : '80px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? 32 : 48,
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? '36px' : 'clamp(42px, 5vw, 64px)',
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
                    fontSize: isMobile ? 13 : 16,
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

      {/* ── Heritage Split ── */}
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
                Our Story
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
                A Legacy of Craftsmanship
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Founded in 2014 by master craftsman Satori, Satori Rattan began as a small workshop in Cirebon, Indonesia—the heart of
                traditional rattan manufacturing. What started with five artisans has grown into a global B2B leader employing over 150 skilled professionals.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Our growth has been guided by unwavering commitment to quality, innovation, and client partnerships. We've evolved from producing
                traditional Indonesian furniture to becoming a trusted manufacturer for international hospitality brands, residential developers, and commercial projects.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 14 : 16, color: 'var(--color-muted)', lineHeight: 1.8 }}>
                Today, Satori Rattan combines time-honored techniques with modern manufacturing capabilities, delivering premium rattan furniture
                to over 40 countries while supporting local communities and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ position: 'relative', paddingTop: isMobile ? '75%' : '125%', overflow: 'hidden' }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&h=1000&fit=crop"
                alt="Historical photo of Satori Rattan workshop showcasing traditional craftsmanship heritage"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Facility Cards ── */}
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
                fontSize: isMobile ? '32px' : 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                color: 'var(--color-darker)',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Our Facilities
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? 15 : 18,
                color: 'var(--color-muted)',
                maxWidth: 700,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              State-of-the-art infrastructure supporting every stage of production and delivery
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? 16 : 32,
            }}
          >
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{
                  padding: isMobile ? 24 : 40,
                  backgroundColor: 'var(--color-cream)',
                  border: '1px solid var(--color-dune)',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--color-warm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-dune)';
                }}
              >
                <facility.icon size={isMobile ? 32 : 40} style={{ color: 'var(--color-warm)', marginBottom: isMobile ? 16 : 24 }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 20 : 24,
                    fontWeight: 600,
                    color: 'var(--color-darker)',
                    marginBottom: 8,
                  }}
                >
                  {facility.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-warm)',
                    marginBottom: 12,
                    letterSpacing: '0.05em',
                  }}
                >
                  {facility.location}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 14 : 15,
                    color: 'var(--color-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {facility.specs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Reach Split ── */}
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
            {/* Image first on desktop, second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{
                position: 'relative',
                paddingTop: isMobile ? '70%' : '100%',
                overflow: 'hidden',
                order: isMobile ? 2 : 1,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=800&fit=crop"
                alt="World map showing Satori Rattan's global distribution network"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ order: isMobile ? 1 : 2 }}
            >
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
                Global Reach, Local Expertise
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? 14 : 16,
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Our furniture graces hotels, restaurants, residences, and commercial spaces across six continents. We've built a reputation for
                reliable delivery, consistent quality, and responsive service in every market we serve.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 8 : 12, marginBottom: 32 }}>
                {markets.map((market, i) => (
                  <span
                    key={i}
                    style={{
                      padding: isMobile ? '8px 14px' : '10px 20px',
                      backgroundColor: 'var(--color-sand)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: isMobile ? 13 : 14,
                      fontWeight: 500,
                      color: 'var(--color-darker)',
                      border: '1px solid var(--color-dune)',
                    }}
                  >
                    {market}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? 13 : 15,
                  color: 'var(--color-muted)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                "Our global presence is built on local relationships. We understand regional preferences, compliance requirements, and logistics
                challenges—ensuring seamless project execution anywhere in the world."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quality Commitments ── */}
      <section style={{ padding: isMobile ? '80px 24px' : '140px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)' }}>
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
                fontSize: isMobile ? '32px' : 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Our Commitments
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? 15 : 18,
                color: 'var(--color-bark)',
                maxWidth: 700,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              The principles that guide our business and define our relationships with clients, artisans, and communities
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: isMobile ? 16 : 32,
            }}
          >
            {qualityCommitments.map((commitment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{
                  padding: isMobile ? 28 : 40,
                  border: '1px solid var(--color-warm)',
                  textAlign: 'center',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-dark)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <commitment.icon size={isMobile ? 36 : 48} style={{ color: 'var(--color-warm)', margin: '0 auto 24px' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 20 : 24,
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {commitment.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 14,
                    color: 'var(--color-bark)',
                    lineHeight: 1.7,
                  }}
                >
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '96px 48px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              color: 'var(--color-darker)',
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Partner with Industry Leaders
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 14 : 16,
              color: 'var(--color-muted)',
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Join leading brands who trust Satori Rattan for their premium furniture needs
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
              backgroundColor: 'var(--color-darker)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
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
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}