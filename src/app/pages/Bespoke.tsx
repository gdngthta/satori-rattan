import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Palette, Ruler, Cog, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation & Brief',
    description: 'We begin with an in-depth discovery session to understand your project scope, design vision, functional requirements, and budget parameters.',
    bullets: ['Project scope analysis', 'Design style exploration', 'Technical requirements review', 'Budget & timeline planning', 'Material recommendations', 'MOQ discussion', 'Feasibility assessment', 'Team introduction'],
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Our design team creates initial concepts, mood boards, and 3D visualizations to bring your vision to life before production begins.',
    bullets: ['Mood board creation', '3D CAD modeling', 'Material palette selection', 'Finish options presentation', 'Structural engineering', 'Ergonomic optimization', 'Cost estimation', 'Design refinement rounds'],
  },
  {
    number: '03',
    title: 'Prototype Production',
    description: 'We produce physical prototypes or samples for hands-on evaluation, allowing you to assess quality, ergonomic, and aesthetics firsthand.',
    bullets: ['Full-scale prototype build', 'Material sampling', 'Finish testing', 'Structural load testing', 'Ergonomic assessment', 'Photography & documentation', 'Client feedback session', 'Design iteration if needed'],
  },
  {
    number: '04',
    title: 'Production Planning',
    description: 'Once designs are approved, we create detailed production schedules, source materials, and establish quality control checkpoints.',
    bullets: ['Material procurement', 'Production timeline creation', 'Quality control protocols', 'Manufacturing resource allocation', 'Supply chain coordination', 'Milestone scheduling', 'Team assignment', 'Progress reporting setup'],
  },
  {
    number: '05',
    title: 'Manufacturing & QC',
    description: 'Our skilled artisans craft each piece with precision while our QC team conducts rigorous inspections at every production stage.',
    bullets: ['Batch production management', 'In-process quality checks', 'Dimensional verification', 'Finish quality inspection', 'Structural integrity testing', 'Photography documentation', 'Regular progress updates', 'Final inspection protocols'],
  },
  {
    number: '06',
    title: 'Packaging & Delivery',
    description: 'We provide custom packaging and coordinate global logistics to ensure your furniture arrives safely and on schedule.',
    bullets: ['Custom packaging design', 'Protective wrapping protocols', 'Container optimization', 'Export documentation', 'Shipping coordination', 'Tracking & updates', 'Delivery scheduling', 'Post-delivery support'],
  },
];

const capabilities = [
  {
    icon: Palette,
    title: 'Custom Design Services',
    description: 'From sketch to finished product, our design team works closely with you to create furniture that perfectly matches your vision and specifications.',
  },
  {
    icon: Ruler,
    title: 'Dimensional Flexibility',
    description: 'We can modify dimensions, proportions, and configurations to suit specific spaces, user requirements, or design aesthetics.',
  },
  {
    icon: Cog,
    title: 'Material & Finish Options',
    description: 'Choose from an extensive range of rattan types, frame materials, finishes, and cushion fabrics to achieve your desired look and performance.',
  },
  {
    icon: Globe,
    title: 'Scalable Production',
    description: 'Our manufacturing capacity and supply chain can scale to meet your project requirements.',
  },
];

export default function Bespoke() {
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
            Bespoke Manufacturing
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
            Custom Rattan Solutions
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
            From initial concept to final delivery, we partner with you to create bespoke rattan furniture that brings your unique vision to life
          </p>
        </motion.div>
      </section>

      {/* ── Process Steps ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ marginBottom: isMobile ? 48 : 80, textAlign: 'center' }}
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
              Our Bespoke Process
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
              A proven six-stage methodology ensuring seamless collaboration from concept to completion
            </p>
          </motion.div>

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '200px 1fr',
                gap: isMobile ? 16 : 48,
                marginBottom: isMobile ? 40 : 64,
                paddingBottom: i < processSteps.length - 1 ? (isMobile ? 40 : 64) : 0,
                borderBottom: i < processSteps.length - 1 ? '1px solid var(--color-dune)' : 'none',
              }}
            >
              {/* Step Number + Title */}
              <div style={{ display: isMobile ? 'flex' : 'block', alignItems: isMobile ? 'center' : 'flex-start', gap: isMobile ? 16 : 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 48 : 72,
                    fontWeight: 300,
                    color: 'var(--color-warm)',
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: isMobile ? 0 : 16,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 20 : 28,
                    fontWeight: 600,
                    color: 'var(--color-darker)',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description + Bullets */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 14 : 16,
                    color: 'var(--color-muted)',
                    lineHeight: 1.8,
                    marginBottom: 24,
                  }}
                >
                  {step.description}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: isMobile ? 10 : 16,
                  }}
                >
                  {step.bullets.map((bullet, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-warm)', flexShrink: 0, marginTop: 2 }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: isMobile ? 13 : 14,
                          color: 'var(--color-darker)',
                          lineHeight: 1.6,
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ── */}
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
                fontSize: isMobile ? '32px' : 'clamp(36px, 5vw, 56px)',
                fontWeight: 600,
                color: 'var(--color-darker)',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Our Capabilities
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
              Comprehensive bespoke services tailored to your project needs
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: isMobile ? 16 : 32,
            }}
          >
            {capabilities.map((capability, i) => (
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
                <capability.icon size={isMobile ? 32 : 40} style={{ color: 'var(--color-warm)', marginBottom: isMobile ? 16 : 24 }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isMobile ? 20 : 24,
                    fontWeight: 600,
                    color: 'var(--color-darker)',
                    marginBottom: 12,
                  }}
                >
                  {capability.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 14 : 15,
                    color: 'var(--color-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '96px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)', textAlign: 'center' }}>
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
              fontSize: isMobile ? '28px' : 'clamp(36px, 5vw, 56px)',
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Let's Discuss Your Custom Project
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
            Our bespoke team is ready to explore your design vision and create a tailored solution for your project
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
            Start a Bespoke Project
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}