import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'AI Vehicle Counter',
    role: 'Lead Developer',
    date: 'Jun 2025',
    description: 'Real-time vehicle detection using computer vision.',
    points: [
      'YOLOv4-Tiny + DeepSORT with OpenCV',
      'Streamlit frontend deployed via GitHub',
    ],
    tech: ['Python', 'OpenCV', 'YOLO', 'Streamlit'],
    gradient: '#00f5ff',
    icon: '🚗',
    github: 'https://github.com/magsihassan/AI-Powered-Vehicle-Counter',
  },
  {
    title: 'EquipRent',
    role: 'Full Stack Dev',
    date: '2025',
    description: 'Construction equipment rental system.',
    points: [
      'React.js + Node.js full-stack',
      'Booking management & admin controls',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    gradient: '#f59e0b',
    icon: '🏗️',
    github: 'https://github.com/magsihassan/EquipRent',
  },
  {
    title: 'Cinematic AI',
    role: 'ML Developer',
    date: '2025',
    description: 'Movie recommendation system.',
    points: [
      'Content + Collaborative filtering',
      'Hybrid approach for accuracy',
    ],
    tech: ['Python', 'ML', 'Streamlit'],
    gradient: '#ec4899',
    icon: '🎬',
    github: 'https://github.com/magsihassan/movie-recommendation-system',
  },
  {
    title: 'Split FL',
    role: 'Researcher',
    date: '2025',
    description: 'IEEE ICDCS 2023 implementation.',
    points: [
      'Split Federated Learning arch',
      'Distributed computing research',
    ],
    tech: ['Python', 'PyTorch', 'FL'],
    gradient: '#8b5cf6',
    icon: '🧠',
    github: 'https://github.com/magsihassan/Split-Federated-Learning',
  },
  {
    title: 'Churn Predictor',
    role: 'Lead Developer',
    date: 'May 2025',
    description: 'Employee turnover prediction.',
    points: [
      'RNN with TensorFlow',
      '80% prediction accuracy',
    ],
    tech: ['Python', 'TensorFlow', 'RNN'],
    gradient: '#a855f7',
    icon: '📊',
  },
  {
    title: 'Car Trade',
    role: 'Team Member',
    date: 'Feb 2025',
    description: 'Buy, sell & review cars.',
    points: [
      'FastAPI + Streamlit',
      'NeonDB with JWT auth',
    ],
    tech: ['FastAPI', 'Streamlit', 'NeonDB'],
    gradient: '#f472b6',
    icon: '🚙',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" style={{
        padding: '4rem 1.5rem',
        minHeight: '100vh',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>
              Click to view details
            </p>
          </motion.div>

          {/* GRID - using CSS Grid explicitly */}
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="project-card-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, boxShadow: `0 8px 30px ${p.gradient}30` }}
                onClick={() => setSelected(p)}
              >
                <div className="card-gradient-bar" style={{ background: p.gradient }} />
                <div className="card-content">
                  <div className="card-header">
                    <span className="card-icon">{p.icon}</span>
                    <div>
                      <h3 className="card-title">{p.title}</h3>
                      <span className="card-role">{p.role}</span>
                    </div>
                  </div>
                  <p className="card-desc">{p.description}</p>
                  <div className="card-tags">
                    {p.tech.map((t, j) => (
                      <span key={j} className="card-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-bar" style={{ background: selected.gradient }} />
              <button className="modal-close" onClick={() => setSelected(null)}>×</button>

              <div className="modal-body">
                <div className="modal-header">
                  <span className="modal-icon">{selected.icon}</span>
                  <div>
                    <h3 className="modal-title">{selected.title}</h3>
                    <span className="modal-role">{selected.role}</span>
                    <span className="modal-date"> • {selected.date}</span>
                  </div>
                </div>

                <p className="modal-desc">{selected.description}</p>

                <div className="modal-section">
                  <h4>Technologies</h4>
                  <div className="modal-tags">
                    {selected.tech.map((t, i) => (
                      <span key={i} className="modal-tag" style={{ background: selected.gradient }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-features">
                    {selected.points.map((pt, i) => (
                      <li key={i}><span style={{ color: '#00f5ff' }}>✦</span> {pt}</li>
                    ))}
                  </ul>
                </div>

                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="modal-github">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
        }

        .project-card-item {
          background: linear-gradient(145deg, rgba(15,15,46,0.95), rgba(26,26,62,0.95));
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .card-gradient-bar { height: 3px; }
        .card-content { padding: 1rem; }
        .card-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
        .card-icon { font-size: 1.5rem; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(0,245,255,0.1); border-radius: 10px; }
        .card-title { font-size: 0.9rem; font-weight: 600; color: #fff; margin: 0; }
        .card-role { font-size: 0.7rem; color: #00f5ff; }
        .card-desc { font-size: 0.75rem; color: #a1a1aa; line-height: 1.4; margin-bottom: 0.75rem; }
        .card-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
        .card-tag { padding: 0.15rem 0.5rem; font-size: 0.6rem; border-radius: 10px; background: rgba(0,245,255,0.1); border: 1px solid rgba(0,245,255,0.2); color: #00f5ff; }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .modal-content {
          background: linear-gradient(145deg, rgba(15,15,46,0.98), rgba(26,26,62,0.98));
          border-radius: 16px;
          border: 1px solid rgba(0,245,255,0.3);
          width: 100%;
          max-width: 450px;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
        }
        .modal-bar { height: 4px; }
        .modal-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.4);
          color: #fff;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-body { padding: 1.25rem; }
        .modal-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
        .modal-icon { font-size: 2rem; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; background: rgba(0,245,255,0.1); border-radius: 12px; }
        .modal-title { font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0; }
        .modal-role { font-size: 0.8rem; color: #00f5ff; }
        .modal-date { font-size: 0.75rem; color: #71717a; }
        .modal-desc { font-size: 0.85rem; color: #a1a1aa; line-height: 1.5; margin-bottom: 1rem; }
        .modal-section { margin-bottom: 1rem; }
        .modal-section h4 { font-size: 0.7rem; color: #71717a; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; }
        .modal-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .modal-tag { padding: 0.25rem 0.7rem; font-size: 0.75rem; border-radius: 15px; color: #0a0a1a; font-weight: 600; }
        .modal-features { list-style: none; padding: 0; margin: 0; }
        .modal-features li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8rem; color: #a1a1aa; margin-bottom: 0.4rem; line-height: 1.4; }
        .modal-github {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #333, #1a1a1a);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          color: #fff;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .modal-github:hover { box-shadow: 0 0 15px rgba(255,255,255,0.15); }
      `}</style>
    </>
  );
};

export default Projects;
