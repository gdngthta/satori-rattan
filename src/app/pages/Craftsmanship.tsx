import { motion } from 'motion/react';
import { ArrowRight, Leaf, Droplets, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

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

export default function Craftsmanship() {
  const isMobile = useIsMobile();

  return (
    <div style={{ paddingTop: isMobile ? 64 : 80 }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: isMobile ? '60vh' : '85vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1565183928294-7d22f90a72d6?w=1920&h=1080&fit=crop"
            alt="Master artisan weaving natural rattan furniture"
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
              Manufacturing Excellence
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
              Where Tradition Meets Precision
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? '15px' : 'clamp(18px, 2vw, 22px)',
                lineHeight: 1.6,
                opacity: 0.95,
              }}
            >
              12+ years of mastering the art and science of rattan furniture manufacturing, combining ancestral techniques with modern quality control
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Premium Materials ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px' }}>
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
              Premium Materials
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
              We source only the finest materials, ensuring exceptional quality and performance in every piece
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: isMobile ? 16 : 64,
            }}
          >
            {materials.map((material, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.2, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{
                  padding: isMobile ? 24 : 40,
                  backgroundColor: 'var(--color-sand)',
                  border: '1px solid var(--color-dune)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 22 : 32,
                    fontWeight: 600,
                    color: 'var(--color-darker)',
                    marginBottom: 16,
                  }}
                >
                  {material.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 14 : 16,
                    color: 'var(--color-muted)',
                    lineHeight: 1.8,
                  }}
                >
                  {material.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Construction Details ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px', backgroundColor: 'var(--color-sand)' }}>
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
              Construction Excellence
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
              Every detail is meticulously crafted to ensure structural integrity and lasting beauty
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: isMobile ? 16 : 32,
            }}
          >
            {constructionDetails.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{ backgroundColor: 'var(--color-cream)', overflow: 'hidden' }}
              >
                <div style={{ position: 'relative', paddingTop: isMobile ? '60%' : '75%', overflow: 'hidden' }}>
                  <img
                    src={detail.image}
                    alt={detail.title}
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
                <div style={{ padding: isMobile ? 20 : 32 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 600,
                      color: 'var(--color-darker)',
                      marginBottom: 12,
                    }}
                  >
                    {detail.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: isMobile ? 14 : 15,
                      color: 'var(--color-muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weaving Split ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px' }}>
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
              style={{ position: 'relative', paddingTop: isMobile ? '75%' : '125%', overflow: 'hidden' }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1000&fit=crop"
                alt="Close-up of skilled artisan hands weaving intricate rattan pattern"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
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
                Traditional Techniques
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '28px' : 'clamp(36px, 5vw, 56px)',
                  fontWeight: 600,
                  color: 'var(--color-darker)',
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                The Art of Weaving
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? 14 : 16,
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                Our master weavers have honed their craft over decades, creating tight, consistent patterns that are both beautiful and structurally superior. Each piece requires an average of 20-40 hours of meticulous handwork.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: isMobile ? 14 : 16,
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                }}
              >
                We preserve traditional Indonesian weaving patterns while innovating new techniques to meet modern performance requirements. This balance of heritage and innovation defines our approach to craftsmanship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QC Section ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)' }}>
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
              Excellent Quality Control
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
              Multi-stage inspection protocols ensure every piece meets our exacting standards
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? 24 : 48,
            }}
          >
            {qcStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    width: isMobile ? 64 : 80,
                    height: isMobile ? 64 : 80,
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--color-warm)',
                    borderRadius: '50%',
                  }}
                >
                  <Shield size={isMobile ? 28 : 36} style={{ color: 'var(--color-warm)' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 20 : 24,
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 14 : 15,
                    color: 'var(--color-bark)',
                    lineHeight: 1.7,
                  }}
                >
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability Split ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px', backgroundColor: 'var(--color-sand)' }}>
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
              <Leaf size={isMobile ? 36 : 48} style={{ color: 'var(--color-warm)', marginBottom: 24 }} />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '28px' : 'clamp(36px, 5vw, 56px)',
                  fontWeight: 600,
                  color: 'var(--color-darker)',
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                Committed to Sustainability
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
                Environmental responsibility is woven into every aspect of our operation. We're committed to minimizing our environmental impact while supporting local communities.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {sustainabilityPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Droplets size={isMobile ? 16 : 20} style={{ color: 'var(--color-warm)', flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: isMobile ? 14 : 15,
                        color: 'var(--color-darker)',
                        lineHeight: 1.7,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ position: 'relative', paddingTop: isMobile ? '75%' : '125%', overflow: 'hidden' }}
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=1000&fit=crop"
                alt="Sustainable rattan forest"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
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
            Experience Our Craftsmanship
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
            Request samples or visit our facility to see our manufacturing excellence firsthand
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
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}