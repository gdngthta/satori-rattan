import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

const naturalProducts = [
  {
    name: 'Lombok Lounge Chair',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop',
    dimensions: 'W 75cm × D 80cm × H 85cm',
    material: 'Natural Rattan Core',
    customizable: 'Yes',
    leadTime: '8-10 weeks',
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

const syntheticProducts = [
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

const specFields = [
  { key: 'dimensions', label: 'Dimensions' },
  { key: 'material', label: 'Material' },
  { key: 'customizable', label: 'Customizable' },
  { key: 'leadTime', label: 'Lead Time' },
];

export default function Collections() {
  const isMobile = useIsMobile();

  const ProductGrid = ({ products }: { products: typeof naturalProducts }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: isMobile ? 16 : 32,
      }}
    >
      {products.map((product, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          style={{
            backgroundColor: 'var(--color-sand)',
            overflow: 'hidden',
            transition: 'transform 0.3s var(--ease-smooth)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ position: 'relative', paddingTop: '125%', overflow: 'hidden' }}>
            <img
              src={product.image}
              alt={`${product.name} - ${product.material}`}
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
          <div style={{ padding: isMobile ? 16 : 24 }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? 16 : 24,
                fontWeight: 600,
                color: 'var(--color-darker)',
                marginBottom: isMobile ? 10 : 16,
              }}
            >
              {product.name}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 6 : 8 }}>
              {specFields.map(({ key, label }) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: isMobile ? 10 : 12,
                      fontWeight: 600,
                      color: 'var(--color-warm)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: isMobile ? 11 : 13,
                      color: 'var(--color-muted)',
                      textAlign: 'right',
                    }}
                  >
                    {product[key as keyof typeof product]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

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
            Product Catalog
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
            Our Collections
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
            Explore our curated range of premium rattan furniture, designed for clients seeking quality, durability, and timeless style
          </p>
        </motion.div>
      </section>

      {/* ── Natural Rattan ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ marginBottom: isMobile ? 32 : 64 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? 16 : 24,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? 48 : 72,
                  fontWeight: 300,
                  color: 'var(--color-warm)',
                  opacity: 0.4,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                01
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? '24px' : 'clamp(36px, 5vw, 56px)',
                    fontWeight: 600,
                    color: 'var(--color-darker)',
                    lineHeight: 1.2,
                  }}
                >
                  Natural Rattan Collection
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 16,
                    color: 'var(--color-muted)',
                    marginTop: 8,
                  }}
                >
                  Sustainably sourced and traditionally crafted for indoor and covered applications
                </p>
              </div>
            </div>
          </motion.div>
          <ProductGrid products={naturalProducts} />
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ height: 1, backgroundColor: 'var(--color-dune)', margin: isMobile ? '0 24px' : '0 48px' }} />

      {/* ── Synthetic Rattan ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ marginBottom: isMobile ? 32 : 64 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? 16 : 24,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? 48 : 72,
                  fontWeight: 300,
                  color: 'var(--color-warm)',
                  opacity: 0.4,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                02
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? '24px' : 'clamp(36px, 5vw, 56px)',
                    fontWeight: 600,
                    color: 'var(--color-darker)',
                    lineHeight: 1.2,
                  }}
                >
                  Synthetic Rattan Collection
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 16,
                    color: 'var(--color-muted)',
                    marginTop: 8,
                  }}
                >
                  High-performance, all-weather solutions for outdoor commercial applications
                </p>
              </div>
            </div>
          </motion.div>
          <ProductGrid products={syntheticProducts} />
        </div>
      </section>

      {/* ── See More Callout ── */}
      <section style={{ padding: isMobile ? '48px 24px' : '64px 48px', backgroundColor: 'var(--color-dune)', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: 800, margin: '0 auto' }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '24px' : 'clamp(28px, 3vw, 40px)',
              fontWeight: 600,
              color: 'var(--color-darker)',
              marginBottom: 16,
            }}
          >
            Looking for Custom Solutions?
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 14 : 16,
              color: 'var(--color-muted)',
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Our full catalog includes 200+ designs. Request our product catalog or discuss bespoke requirements with our team.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 12 : 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: isMobile ? '14px 28px' : '16px 32px',
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
              Request Full Catalog
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/bespoke"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: isMobile ? '14px 28px' : '16px 32px',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? 320 : 'none',
                border: '2px solid var(--color-darker)',
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
                e.currentTarget.style.backgroundColor = 'var(--color-darker)';
                e.currentTarget.style.color = 'var(--color-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-darker)';
              }}
            >
              Explore Bespoke Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '96px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)', textAlign: 'center' }}>
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
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Need Volume Pricing or MOQ Information?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 14 : 16,
              color: 'var(--color-bark)',
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Contact our sales team for detailed specifications, bulk pricing, and lead times
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              padding: isMobile ? '14px 32px' : '16px 40px',
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
            Contact Sales Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}