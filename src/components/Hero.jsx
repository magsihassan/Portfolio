import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Front-end Developer | AI Enthusiast | Problem Solver";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        position: 'relative',
      }}
    >
      {/* Glowing orb background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 245, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '0.95rem',
            color: '#00f5ff',
            marginBottom: '0.75rem',
            fontWeight: 500,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}
        >
          Hi, I'm{' '}
          <span
            className="gradient-text-glow"
            style={{
              display: 'inline-block',
            }}
          >
            Hassan
          </span>
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            style={{ display: 'inline-block', marginLeft: '0.4rem' }}
          >
            🥷🏿
          </motion.span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: '0.75rem',
            minHeight: '1.5rem',
          }}
        >
          {displayText}
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: '#00f5ff',
            marginLeft: '3px',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
            boxShadow: '0 0 8px #00f5ff',
          }} />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: '0.95rem',
            color: 'var(--color-text-muted)',
            maxWidth: '500px',
            margin: '0 auto 1.75rem',
            lineHeight: 1.7,
          }}
        >
          Crafting responsive, user-centric web applications with React and modern technologies.
          Passionate about AI and NLP.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
            }}
          >
            <span>Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
          <motion.a
            href="#projects"
            className="btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
            }}
          >
            <span>View Projects</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ bottom: '1.5rem' }}
      >
        <span style={{ fontSize: '0.75rem' }}>Scroll Down</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
