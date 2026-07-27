import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/useWindowSize';

const navLinks = [
  { label: 'Projects', path: '/projects' },
  { label: 'Collections', path: '/collections' },
  { label: 'Bespoke', path: '/bespoke' },
  { label: 'Craftsmanship', path: '/craftsmanship' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? 64 : 80,
          backgroundColor: 'rgba(254, 253, 251, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(234, 229, 222, 0.5)',
          zIndex: 1000,
          transition: 'all 0.3s var(--ease-smooth)',
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 48px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo + Brand */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? 8 : 12,
              flexShrink: 0,
            }}
          >
            <img
              src="/images/Logo.png"
              alt="Satori Rattan Logo"
              style={{
                height: isMobile ? 40 : 58,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: isMobile ? 18 : 24,
                fontWeight: 600,
                color: 'var(--color-darker)',
                letterSpacing: '0.02em',
                transition: 'color 0.3s var(--ease-smooth)',
                whiteSpace: 'nowrap',
              }}
            >
              Satori Rattan
            </div>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--color-darker)',
                    letterSpacing: '0.02em',
                    transition: 'opacity 0.2s var(--ease-smooth)',
                    opacity: location.pathname === link.path ? 1 : 0.7,
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = location.pathname === link.path ? '1' : '0.7')
                  }
                >
                  {link.label}
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 1,
                        backgroundColor: 'var(--color-warm)',
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setDrawerOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                color: 'var(--color-darker)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0,
              }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          )}
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
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1100,
              }}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '80%',
                maxWidth: 360,
                backgroundColor: 'var(--color-cream)',
                zIndex: 1200,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Drawer Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  borderBottom: '1px solid var(--color-dune)',
                  flexShrink: 0,
                }}
              >
                <Link
                  to="/"
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <img
                    src="/images/Logo.png"
                    alt="Satori Rattan Logo"
                    style={{
                      height: 36,
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 20,
                      fontWeight: 600,
                      color: 'var(--color-darker)',
                    }}
                  >
                    Satori Rattan
                  </div>
                </Link>

                <button
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    color: 'var(--color-darker)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    flexShrink: 0,
                  }}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setDrawerOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 0',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 18,
                        fontWeight: location.pathname === link.path ? 600 : 500,
                        color: location.pathname === link.path ? 'var(--color-warm)' : 'var(--color-darker)',
                        letterSpacing: '0.02em',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(234, 229, 222, 0.5)',
                        transition: 'color 0.2s var(--ease-smooth)',
                      }}
                      onMouseEnter={(e) => {
                        if (location.pathname !== link.path) {
                          e.currentTarget.style.color = 'var(--color-warm)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== link.path) {
                          e.currentTarget.style.color = 'var(--color-darker)';
                        }
                      }}
                    >
                      {link.label}
                      {location.pathname === link.path && (
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-warm)',
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div
                style={{
                  padding: '24px',
                  borderTop: '1px solid var(--color-dune)',
                  flexShrink: 0,
                }}
              >
                <Link
                  to="/contact"
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '14px 24px',
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