import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/magsihassan',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: '#fff',
    hoverColor: '#00f5ff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hassan-raza-mir-76737a358/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0077B5',
    hoverColor: '#00f5ff',
  },
  {
    name: 'Email',
    url: 'mailto:hassanrazamir63@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#EA4335',
    hoverColor: '#00f5ff',
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
      style={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '250px',
        background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '550px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '0.5rem',
          }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
          }}>
            Have a project in mind? Feel free to reach out!
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card"
          style={{
            padding: '1.75rem',
            marginBottom: '2rem',
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
            }}
          >
            ✉️
          </motion.div>

          <p style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            marginBottom: '0.5rem',
          }}>
            Drop me an email at
          </p>

          <motion.a
            href="mailto:hassanrazamir63@gmail.com"
            whileHover={{ scale: 1.02 }}
            style={{
              display: 'inline-block',
              fontSize: '1.1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
            }}
          >
            hassanrazamir63@gmail.com
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}>
            Or find me on
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: link.hoverColor,
                  boxShadow: `0 0 20px ${link.hoverColor}30`,
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: link.color,
                  transition: 'all 0.2s ease',
                }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
          }}>
            Designed & Built by{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
            }}>
              Hassan Raza Mir
            </span>
          </p>
          <p style={{
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
            marginTop: '0.25rem',
          }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
