import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Palette, Ruler, Cog, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { fadeUp } from '../lib/animations';

// ═══════════════════════════════════════════════════════════════════════════
//  COPYWRITING lives in these arrays (the process steps + capability cards).
//  Change the text inside the quotes to reword anything. Keep field names.
// ═══════════════════════════════════════════════════════════════════════════

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

// Reused label (no-prefix = phone, md: = desktop >= 768px).
const eyebrow = 'font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm';

export default function Bespoke() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ── Hero ──  (headline copy here) */}
      <section className="bg-sand px-6 pt-20 pb-16 md:px-12 md:pt-30 md:pb-24">
        <motion.div {...fadeUp} className="max-w-[1200px] mx-auto text-center">
          <div className={`${eyebrow} mb-4`}>Bespoke Manufacturing</div>
          <h1 className="font-serif text-[38px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] text-darker mb-6">
            Custom Rattan Solutions
          </h1>
          <p className="font-sans text-[15px] md:text-[20px] text-muted max-w-[800px] mx-auto leading-[1.6]">
            From initial concept to final delivery, we partner with you to create bespoke rattan furniture that brings your unique vision to life
          </p>
        </motion.div>
      </section>

      {/* ── Process Steps ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="font-serif text-[32px] md:text-[clamp(36px,5vw,64px)] font-semibold text-darker leading-[1.2] mb-4">
              Our Bespoke Process
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-muted max-w-[700px] mx-auto leading-[1.6]">
              A proven six-stage methodology ensuring seamless collaboration from concept to completion
            </p>
          </motion.div>

          {processSteps.map((step, i) => {
            const notLast = i < processSteps.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 mb-10 md:mb-16 ${notLast ? 'pb-10 md:pb-16 border-b border-dune' : ''}`}
              >
                {/* Step number + title (row on phone, stacked on desktop) */}
                <div className="flex items-center gap-4 md:block">
                  <div className="font-serif text-[48px] md:text-[72px] font-light text-warm opacity-40 leading-none shrink-0 md:mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-[20px] md:text-[28px] font-semibold text-darker leading-[1.3]">
                    {step.title}
                  </h3>
                </div>

                {/* Description + bullet checklist */}
                <div>
                  <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-6">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
                    {step.bullets.map((bullet, j) => (
                      <div key={j} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-warm shrink-0 mt-0.5" />
                        <span className="font-sans text-[13px] md:text-[14px] text-darker leading-[1.6]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-sand px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1440px] mx-auto">
          {/* Section heading copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-serif text-[32px] md:text-[clamp(36px,5vw,56px)] font-semibold text-darker leading-[1.2] mb-4">
              Our Capabilities
            </h2>
            <p className="font-sans text-[15px] md:text-[18px] text-muted max-w-[700px] mx-auto leading-[1.6]">
              Comprehensive bespoke services tailored to your project needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {capabilities.map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 md:p-10 bg-cream border border-dune transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-warm"
              >
                <capability.icon className="w-8 h-8 md:w-10 md:h-10 text-warm mb-4 md:mb-6" />
                <h3 className="font-serif text-[20px] md:text-[24px] font-semibold text-darker mb-3">
                  {capability.title}
                </h3>
                <p className="font-sans text-[14px] md:text-[15px] text-muted leading-[1.7]">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
          <h2 className="font-serif text-[28px] md:text-[clamp(36px,5vw,56px)] font-semibold leading-[1.2] mb-6">
            Let's Discuss Your Custom Project
          </h2>
          <p className="font-sans text-[15px] md:text-[18px] text-bark leading-[1.8] mb-10">
            Our bespoke team is ready to explore your design vision and create a tailored solution for your project
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto max-w-[320px] md:max-w-none px-8 py-3.5 md:px-12 md:py-[18px] bg-cream text-darker font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-sand hover:-translate-y-0.5"
          >
            Start a Bespoke Project
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
