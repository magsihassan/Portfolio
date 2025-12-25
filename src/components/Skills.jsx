import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = {
  Languages: [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚙️' },
  ],
  Frameworks: [
    { name: 'React.js', icon: '⚛️' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'NLTK', icon: '📝' },
    { name: 'Tailwind', icon: '🎨' },
  ],
  Databases: [
    { name: 'SQL', icon: '🗃️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'NeonDB', icon: '💚' },
  ],
};

const categories = Object.keys(skillsData);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  return (
    <section
      id="skills"
      className="section"
      style={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--color-text-secondary)',
          }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '25px',
                border: activeCategory === category
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.15)',
                background: activeCategory === category
                  ? 'linear-gradient(135deg, #00f5ff, #a855f7)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === category
                  ? '#0a0a1a'
                  : 'var(--color-text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem',
              justifyItems: 'center',
            }}
          >
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
                }}
                className="glass-card"
                style={{
                  width: '100%',
                  maxWidth: '140px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                }}>
                  {skill.icon}
                </div>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                }}>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All Skills Floating Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
          }}
        >
          {Object.values(skillsData).flat().map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{
                y: -3,
                borderColor: 'rgba(0, 245, 255, 0.4)',
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.9rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '25px',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
