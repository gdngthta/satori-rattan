import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeUp } from '../lib/animations';

// COPYWRITING: the two headline stats shown in the dark bar.
const contactStats = [
  { value: '3 Business Days', label: 'Quotation Response' },
];

// Shared field styles. Written once, used by every input/select/textarea.
// focus:border-warm gives a visible highlight when a field is selected — and we
// keep the browser's default focus outline (not removed) so keyboard users can see it.
const inputClass =
  'w-full px-3.5 py-2.5 md:px-4 md:py-3 font-sans text-[14px] border border-dune bg-cream text-darker focus:border-warm';
const labelClass = 'block font-sans text-[13px] font-semibold text-darker mb-2';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    quantity: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const submissionTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    try {
      emailjs.init('pW1vDoZIFag3A6sY3');

      const result = await emailjs.send(
        'service_athfx8e',
        'template_rz0s4di',
        {
          company_name: formData.companyName,
          from_name: formData.contactName,
          reply_to: formData.email,
          phone: formData.phone || 'Not provided',
          project_type: formData.projectType,
          quantity: formData.quantity || 'Not specified',
          budget: formData.budget || 'Not specified',
          message: formData.message,
          submission_time: submissionTime,
        }
      );

      console.log('Email sent successfully!', result);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Detailed error:', err);
      setError(`Failed to send message: ${err.text || err.message || 'Please try again'}`);
    } finally {
      setLoading(false);
    }
  };

  // Contact sidebar rows. Content is JSX so phone/email can be clickable links.
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      content: (
        <p className="font-sans text-[14px] text-muted leading-[1.6]">
          Jl. Suryadinata no. 6 Desa Marikangen<br />
          Kecamatan Plumbon, Kabupaten Cirebon<br />
          West Java 45155, Indonesia
        </p>
      ),
    },
    {
      icon: Phone,
      title: 'Phone',
      content: (
        <a href="tel:+622318765432" className="font-sans text-[14px] text-muted block">
          +62 231 876 5432
        </a>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <a href="mailto:info@satorirattan.com" className="font-sans text-[14px] text-muted block break-all">
          info@satorirattan.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: (
        <p className="font-sans text-[14px] text-muted leading-[1.6]">
          Monday - Friday<br />
          8:00 AM - 4:00 PM (WIB)
        </p>
      ),
    },
  ];

  return (
    <div className="pt-16 md:pt-20">

      {/* ── Hero ── */}
      <section className="bg-sand px-6 pt-20 pb-16 md:px-12 md:pt-30 md:pb-24">
        <motion.div {...fadeUp} className="max-w-[1200px] mx-auto text-center">
          <div className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-warm mb-4">
            Get in Touch
          </div>
          <h1 className="font-serif text-[38px] md:text-[clamp(48px,6vw,84px)] font-semibold leading-[1.1] text-darker mb-6">
            Let's Start Your Project
          </h1>
          <p className="font-sans text-[15px] md:text-[20px] text-muted max-w-[800px] mx-auto leading-[1.6]">
            Our team is ready to discuss your requirements and provide tailored solutions for your furniture needs
          </p>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-darker text-cream px-6 py-10 md:px-12 md:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 gap-6 md:gap-12">
            {contactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-serif text-[28px] md:text-[clamp(36px,4vw,48px)] font-semibold text-warm mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-[13px] md:text-[14px] font-medium text-bark tracking-[0.05em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="px-6 py-16 md:px-12 md:py-[140px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">

            {/* ── Contact Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="font-serif text-[24px] md:text-[32px] font-semibold text-darker mb-8">
                Contact Information
              </h2>

              <div className="flex flex-col gap-6 md:gap-8">
                {contactInfo.map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex gap-3">
                    <Icon className="w-5 h-5 text-warm shrink-0 mt-0.5" />
                    <div>
                      <div className="font-sans text-[14px] font-semibold text-darker mb-1">{title}</div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-12 p-5 md:p-6 bg-sand border border-dune">
                <p className="font-sans text-[14px] text-muted leading-[1.7] italic">
                  "For urgent inquiries or large-scale projects, please call us directly. You can send technical drawings and specifications after we make initial contact."
                </p>
              </div>
            </motion.div>

            {/* ── RFQ Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {!submitted ? (
                <div className="bg-sand p-6 md:p-12 border border-dune">
                  <h2 className="font-serif text-[24px] md:text-[32px] font-semibold text-darker mb-3">
                    Request for Quotation
                  </h2>
                  <p className="font-sans text-[14px] text-muted mb-8 leading-[1.6]">
                    Complete the form below and our team will respond within 3 business days with a detailed quotation
                  </p>

                  {error && (
                    <div className="p-4 bg-[#fee] border border-[#fcc] mb-6 flex gap-3 items-start rounded">
                      <AlertCircle className="w-5 h-5 text-[#c00] shrink-0 mt-0.5" />
                      <span className="font-sans text-[14px] text-[#c00] leading-[1.5]">{error}</span>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">

                    {/* Company + Contact Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company_name" className={labelClass}>Company Name *</label>
                        <input id="company_name" type="text" name="company_name" required autoComplete="organization" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="from_name" className={labelClass}>Contact Name *</label>
                        <input id="from_name" type="text" name="from_name" required autoComplete="name" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} className={inputClass} />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reply_to" className={labelClass}>Email *</label>
                        <input id="reply_to" type="email" name="reply_to" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                        <input id="phone" type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                      </div>
                    </div>

                    {/* Project Type + Quantity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="project_type" className={labelClass}>Project Type *</label>
                        <select id="project_type" name="project_type" required value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClass}>
                          <option value="">Select type</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className={labelClass}>Estimated Quantity</label>
                        <input id="quantity" type="text" name="quantity" placeholder="e.g., 200 pieces" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className={inputClass} />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className={labelClass}>Budget Range</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={inputClass}>
                        <option value="">Select range</option>
                        <option value="<25k">Under $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value=">100k">Over $100,000</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelClass}>Project Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Please describe your project requirements, including furniture types, styles, quantities, and any specific needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-y`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="self-start w-full md:w-auto px-6 py-3.5 md:px-12 md:py-4 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark disabled:bg-muted disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-sand p-8 md:p-16 border border-dune text-center">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-warm mx-auto mb-6" />
                  <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-darker mb-4">
                    Thank You!
                  </h2>
                  <p className="font-sans text-[14px] md:text-[16px] text-muted leading-[1.8] mb-8">
                    Your inquiry has been received successfully. Our sales team will review your requirements and respond within 3 business days with a detailed quotation.
                  </p>
                  <p className="font-sans text-[14px] text-muted italic">
                    Reference: RFQ-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
