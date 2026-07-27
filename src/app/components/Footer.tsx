import { Link } from 'react-router';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useIsMobile } from '../hooks/useWindowSize';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Craftsmanship', path: '/craftsmanship' },
    { label: 'Sustainability', path: '/about' },
    { label: 'Certifications', path: '/about' },
  ],
  services: [
    { label: 'Bespoke Design', path: '/bespoke' },
    { label: 'Contract Manufacturing', path: '/projects' },
    { label: 'Product Development', path: '/bespoke' },
    { label: 'Quality Assurance', path: '/craftsmanship' },
  ],
};

const services = [
  'Natural Rattan Furniture',
  'Synthetic Rattan Solutions',
  'Custom Design & Development',
  'Contract Manufacturing',
  'Quality Control & Testing',
  'Global Logistics Support',
];

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{ backgroundColor: 'var(--color-darker)', color: 'var(--color-cream)' }}>
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: isMobile ? '64px 24px 32px' : '96px 48px 48px',
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: isMobile ? 40 : 64,
            marginBottom: isMobile ? 48 : 64,
          }}
        >
          {/* Brand Column - full width on mobile */}
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? 24 : 28,
                fontWeight: 600,
                marginBottom: 16,
                color: 'var(--color-cream)',
              }}
            >
              Satori Rattan
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--color-bark)',
                lineHeight: 1.8,
                marginBottom: 24,
                maxWidth: isMobile ? '100%' : 280,
              }}
            >
              Premium rattan furniture manufacturer serving hospitality, residential, and commercial projects worldwide since 2014.
            </p>

            {/* Instagram */}
            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://instagram.com/satori.rattan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-warm)',
                  color: 'var(--color-warm)',
                  transition: 'all 0.3s var(--ease-smooth)',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-warm)';
                  e.currentTarget.style.color = 'var(--color-darker)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-warm)';
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-warm)',
                marginBottom: 20,
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                // key must be unique; several links share the same path, so key on the label
                <li key={link.label}>
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: isMobile ? 13 : 14,
                      color: 'var(--color-bark)',
                      transition: 'color 0.2s var(--ease-smooth)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-bark)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-warm)',
                marginBottom: 20,
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, padding: 0, margin: 0 }}>
              {services.map((service, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 14,
                    color: 'var(--color-bark)',
                    lineHeight: 1.6,
                  }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - full width on mobile */}
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-warm)',
                marginBottom: 20,
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-warm)', flexShrink: 0, marginTop: 2 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 14,
                    color: 'var(--color-bark)',
                    lineHeight: 1.6,
                  }}
                >
                  Jl. Suryadinata no. 6 Desa Marikangen
                  <br />
                  Kecamatan Plumbon, Kabupaten Cirebon
                  <br />
                  West Java 45155, Indonesia
                </span>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--color-warm)', flexShrink: 0 }} />
                <a
                  href="tel:+622318765432"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 14,
                    color: 'var(--color-bark)',
                    transition: 'color 0.2s var(--ease-smooth)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-bark)')}
                >
                  +62 231 876 5432
                </a>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--color-warm)', flexShrink: 0 }} />
                <a
                  href="mailto:info@satorirattan.com"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: isMobile ? 13 : 14,
                    color: 'var(--color-bark)',
                    transition: 'color 0.2s var(--ease-smooth)',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-bark)')}
                >
                  info@satorirattan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 12 : 16,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--color-muted)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Satori Rattan. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: isMobile ? 16 : 24 }}>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'var(--color-muted)',
                transition: 'color 0.2s var(--ease-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'var(--color-muted)',
                transition: 'color 0.2s var(--ease-smooth)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}