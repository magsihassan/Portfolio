import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        background: isScrolled ? 'rgba(10, 10, 26, 0.9)' : 'rgba(10, 10, 26, 0.5)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'background 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          HR
        </motion.a>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
          className="desktop-nav"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="nav-link"
              style={{
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          <div style={{
            width: '24px',
            height: '2px',
            background: '#00f5ff',
            marginBottom: '5px',
            transition: 'all 0.3s',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: '#00f5ff',
            marginBottom: '5px',
            opacity: isMobileMenuOpen ? 0 : 1,
            transition: 'all 0.3s',
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: '#00f5ff',
            transition: 'all 0.3s',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem 0',
              marginTop: '1rem',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link"
                style={{
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
