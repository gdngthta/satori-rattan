import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useIsMobile } from '../hooks/useWindowSize';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

const contactStats = [
  { value: '3 Business Day', label: 'Response Time' },
  { value: '98%', label: 'Client Satisfaction' },
];

const inputStyle = (isMobile: boolean) => ({
  width: '100%',
  padding: isMobile ? '10px 14px' : '12px 16px',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  border: '1px solid var(--color-dune)',
  backgroundColor: 'var(--color-cream)',
  color: 'var(--color-darker)',
  boxSizing: 'border-box' as const,
});

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--color-darker)',
  marginBottom: 8,
};

export default function Contact() {
  const isMobile = useIsMobile();
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
            Get in Touch
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
            Let's Start Your Project
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
            Our team is ready to discuss your requirements and provide tailored solutions for your furniture needs
          </p>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ padding: isMobile ? '40px 24px' : '64px 48px', backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: isMobile ? 24 : 48,
            }}
          >
            {contactStats.map((stat, i) => (
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
                    fontSize: isMobile ? '28px' : 'clamp(36px, 4vw, 48px)',
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
                    fontSize: isMobile ? 13 : 14,
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

      {/* ── Main Content ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '140px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
              gap: isMobile ? 48 : 64,
            }}
          >
            {/* ── Contact Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isMobile ? '24px' : 32,
                  fontWeight: 600,
                  color: 'var(--color-darker)',
                  marginBottom: 32,
                }}
              >
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 32 }}>
                {[
                  {
                    icon: MapPin,
                    title: 'Head Office',
                    content: (
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
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
                      <a href="tel:+622318765432" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)', display: 'block' }}>
                        +62 231 876 5432
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: (
                      <a href="mailto:info@satorirattan.com" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)', display: 'block', wordBreak: 'break-all' as const }}>
                        info@satorirattan.com
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: (
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                        Monday - Friday<br />
                        8:00 AM - 4:00 PM (WIB)
                      </p>
                    ),
                  },
                ].map(({ icon: Icon, title, content }) => (
                  <div key={title} style={{ display: 'flex', gap: 12 }}>
                    <Icon size={20} style={{ color: 'var(--color-warm)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--color-darker)', marginBottom: 4 }}>
                        {title}
                      </div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: isMobile ? 32 : 48,
                  padding: isMobile ? 20 : 24,
                  backgroundColor: 'var(--color-sand)',
                  border: '1px solid var(--color-dune)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: 'var(--color-muted)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  "For urgent inquiries or large-scale projects, please call us directly. You can send technical drawings and specifications after we make initial contact."
                </p>
              </div>
            </motion.div>

            {/* ── RFQ Form ── */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {!submitted ? (
                <div style={{ backgroundColor: 'var(--color-sand)', padding: isMobile ? 24 : 48, border: '1px solid var(--color-dune)' }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isMobile ? '24px' : 32,
                      fontWeight: 600,
                      color: 'var(--color-darker)',
                      marginBottom: 12,
                    }}
                  >
                    Request for Quotation
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      color: 'var(--color-muted)',
                      marginBottom: 32,
                      lineHeight: 1.6,
                    }}
                  >
                    Complete the form below and our team will respond within 3 business day with a detailed quotation
                  </p>

                  {error && (
                    <div
                      style={{
                        padding: 16,
                        backgroundColor: '#fee',
                        border: '1px solid #fcc',
                        marginBottom: 24,
                        display: 'flex',
                        gap: 12,
                        alignItems: 'flex-start',
                        borderRadius: 4,
                      }}
                    >
                      <AlertCircle size={20} style={{ color: '#c00', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#c00', lineHeight: 1.5 }}>{error}</span>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 24 }}>

                    {/* Company + Contact Name */}
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={labelStyle}>Company Name *</label>
                        <input type="text" name="company_name" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} style={inputStyle(isMobile)} />
                      </div>
                      <div>
                        <label style={labelStyle}>Contact Name *</label>
                        <input type="text" name="from_name" required value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} style={inputStyle(isMobile)} />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input type="email" name="reply_to" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle(isMobile)} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle(isMobile)} />
                      </div>
                    </div>

                    {/* Project Type + Quantity */}
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={labelStyle}>Project Type *</label>
                        <select name="project_type" required value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} style={inputStyle(isMobile)}>
                          <option value="">Select type</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Estimated Quantity</label>
                        <input type="text" name="quantity" placeholder="e.g., 200 pieces" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} style={inputStyle(isMobile)} />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label style={labelStyle}>Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={inputStyle(isMobile)}>
                        <option value="">Select range</option>
                        <option value="<25k">Under $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value=">100k">Over $100,000</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows={isMobile ? 4 : 5}
                        placeholder="Please describe your project requirements, including furniture types, styles, quantities, and any specific needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          ...inputStyle(isMobile),
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        padding: isMobile ? '14px 24px' : '16px 48px',
                        width: isMobile ? '100%' : 'auto',
                        backgroundColor: loading ? 'var(--color-muted)' : 'var(--color-darker)',
                        color: 'var(--color-cream)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase' as const,
                        transition: 'all 0.3s var(--ease-smooth)',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        opacity: loading ? 0.7 : 1,
                        border: 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) e.currentTarget.style.backgroundColor = 'var(--color-dark)';
                      }}
                      onMouseLeave={(e) => {
                        if (!loading) e.currentTarget.style.backgroundColor = 'var(--color-darker)';
                      }}
                    >
                      {loading ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: 'var(--color-sand)',
                    padding: isMobile ? 32 : 64,
                    border: '1px solid var(--color-dune)',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle size={isMobile ? 48 : 64} style={{ color: 'var(--color-warm)', margin: '0 auto 24px' }} />
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isMobile ? '28px' : 36,
                      fontWeight: 600,
                      color: 'var(--color-darker)',
                      marginBottom: 16,
                    }}
                  >
                    Thank You!
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
                    Your inquiry has been received successfully. Our sales team will review your requirements and respond within 3 business day with a detailed quotation.
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      color: 'var(--color-muted)',
                      fontStyle: 'italic',
                    }}
                  >
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