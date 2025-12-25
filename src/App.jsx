import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random twinkling stars
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(generatedStars);

    // Generate shooting stars periodically
    const createShootingStar = () => ({
      id: Date.now(),
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      duration: 1 + Math.random() * 2,
    });

    const shootingInterval = setInterval(() => {
      setShootingStars(prev => [...prev.slice(-3), createShootingStar()]);
    }, 3000);

    // Track mouse for parallax effect
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(shootingInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Animated cosmic background with parallax */}
      <div className="cosmic-bg" style={{
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
      }}></div>

      {/* Floating nebula blobs */}
      <div className="nebula-container">
        <div className="nebula nebula-1" style={{
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
        }}></div>
        <div className="nebula nebula-2" style={{
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
        }}></div>
        <div className="nebula nebula-3" style={{
          transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * 0.3}px)`,
        }}></div>
      </div>

      {/* Animated stars */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars">
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
