import { Link } from 'react-router';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Craftsmanship', path: '/craftsmanship' },
    { label: 'Sustainability', path: '/about' },
    { label: 'Certifications', path: '/about' },
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

// Reused column-heading style.
const colHeading = 'font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-warm mb-5';
const footerLink = 'font-sans text-[13px] md:text-[14px] text-bark transition-colors duration-200 ease-smooth hover:text-cream';

export default function Footer() {
  return (
    <footer className="bg-darker text-cream">
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-12">

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">

          {/* Brand column — full width on phone (spans both columns) */}
          <div className="col-span-2 md:col-auto">
            <div className="font-serif text-[24px] md:text-[28px] font-semibold text-cream mb-4">
              Satori Rattan
            </div>
            <p className="font-sans text-[14px] text-bark leading-[1.8] mb-6 max-w-full md:max-w-[280px]">
              Premium rattan furniture manufacturer serving hospitality, residential, and commercial projects worldwide since 2014.
            </p>

            {/* Instagram — icon inherits the link's text color (warm, flips on hover) */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/satori.rattan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 flex items-center justify-center border border-warm text-warm shrink-0 transition-all duration-300 ease-smooth hover:bg-warm hover:text-darker"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className={colHeading}>Company</h3>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              {footerLinks.company.map((link) => (
                // key must be unique; several links share the same path, so key on the label
                <li key={link.label}>
                  <Link to={link.path} className={footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={colHeading}>Services</h3>
            <ul className="list-none flex flex-col gap-2 p-0 m-0">
              {services.map((service, i) => (
                <li key={i} className="font-sans text-[13px] md:text-[14px] text-bark leading-[1.6]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — full width on phone */}
          <div className="col-span-2 md:col-auto">
            <h3 className={colHeading}>Contact</h3>
            <ul className="list-none flex flex-col gap-4 p-0 m-0">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-warm shrink-0 mt-0.5" />
                <span className="font-sans text-[13px] md:text-[14px] text-bark leading-[1.6]">
                  Jl. Suryadinata no. 6 Desa Marikangen
                  <br />
                  Kecamatan Plumbon, Kabupaten Cirebon
                  <br />
                  West Java 45155, Indonesia
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-warm shrink-0" />
                <a href="tel:+622318765432" className={footerLink}>+62 231 876 5432</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-warm shrink-0" />
                <a href="mailto:info@satorirattan.com" className={`${footerLink} break-all`}>
                  info@satorirattan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
          <p className="font-sans text-[13px] text-muted">
            © {new Date().getFullYear()} Satori Rattan. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="font-sans text-[13px] text-muted transition-colors duration-200 ease-smooth hover:text-cream">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-[13px] text-muted transition-colors duration-200 ease-smooth hover:text-cream">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
