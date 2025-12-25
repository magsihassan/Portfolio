import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
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
      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
      }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '0.5rem',
          }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--color-text-secondary)',
          }}>
            Get to know the developer behind the code
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card"
          style={{
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gradient border effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #00f5ff, #a855f7, #ff00ff)',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
          }}>
            {/* Profile Icon/Avatar */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(168, 85, 247, 0.15))',
                border: '2px solid rgba(0, 245, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                boxShadow: '0 0 30px rgba(0, 245, 255, 0.2)',
              }}>
                👨‍💻
              </div>
            </motion.div>

            {/* Bio Text */}
            <div>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1rem',
              }}>
                I'm a <span style={{ color: '#00f5ff', fontWeight: 600 }}>Computer Science undergraduate</span> passionate
                about building modern, responsive web applications. Currently focusing on
                <span style={{ color: '#a855f7', fontWeight: 600 }}> React.js</span> and Tailwind CSS.
              </p>

              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}>
                My goal is to contribute to projects that make a
                <span style={{ color: '#f472b6', fontWeight: 600 }}> real impact</span>.
                Interested in AI and NLP.
              </p>

              {/* Stats */}
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '1.5rem',
                flexWrap: 'wrap',
              }}>
                {[
                  { number: '7+', label: 'Projects' },
                  { number: '8+', label: 'Technologies' },
                  { number: '∞', label: 'Curiosity' },
                ].map((stat, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
