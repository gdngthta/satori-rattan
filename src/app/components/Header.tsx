import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Collections', path: '/collections' },
  { label: 'Bespoke', path: '/bespoke' },
  { label: 'Craftsmanship', path: '/craftsmanship' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-[rgba(254,253,251,0.95)] backdrop-blur-[12px] border-b border-[rgba(234,229,222,0.5)] z-[1000]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 h-full flex items-center justify-between">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
            <img src="/images/Logo.png" alt="Satori Rattan Logo" className="h-10 md:h-[58px] w-auto object-contain" />
            <div className="font-serif text-[18px] md:text-[24px] font-semibold text-darker tracking-[0.02em] whitespace-nowrap">
              Satori Rattan
            </div>
          </Link>

          {/* Desktop Nav — hidden on phone, flex on desktop (md and up) */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-sans text-[14px] font-medium text-darker tracking-[0.02em] whitespace-nowrap transition-opacity duration-200 ease-smooth hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-70'}`}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-px bg-warm" />}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger — shown on phone, hidden on desktop */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex md:hidden items-center justify-center w-10 h-10 text-darker shrink-0"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 z-[1100]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-[360px] bg-cream z-[1200] flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-dune shrink-0">
                <Link to="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2.5">
                  <img src="/images/Logo.png" alt="Satori Rattan Logo" className="h-9 w-auto object-contain" />
                  <div className="font-serif text-[20px] font-semibold text-darker">Satori Rattan</div>
                </Link>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center w-9 h-9 text-darker shrink-0"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="px-6 py-8 flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setDrawerOpen(false)}
                        className={`flex items-center justify-between py-4 font-sans text-[18px] tracking-[0.02em] border-b border-[rgba(234,229,222,0.5)] transition-colors duration-200 ease-smooth ${isActive ? 'font-semibold text-warm' : 'font-medium text-darker hover:text-warm'}`}
                      >
                        {link.label}
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-warm" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-dune shrink-0">
                <Link
                  to="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-darker text-cream font-sans text-[14px] font-semibold tracking-[0.05em] uppercase transition-all duration-300 ease-smooth hover:bg-dark"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
