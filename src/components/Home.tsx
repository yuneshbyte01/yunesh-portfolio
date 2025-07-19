import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home: React.FC = () => {
  const handleResumeDownload = () => {
    // Create a temporary link to simulate download
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Yunesh_Timsina_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home-section">
      <div className="hero-background">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <Container className="container-custom">
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <span className="highlight">Yunesh Timsina</span>
              </motion.h1>

              <motion.h2
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Backend Developer
              </motion.h2>

              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tech explorer who loves building apps & learning new things. 
                Crafting robust and scalable server-side solutions with passion and precision. 
                Based in Nepal, building the future one API at a time.
              </motion.p>

              <motion.div
                className="hero-location"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <FaMapMarkerAlt className="location-icon" />
                <span>Nepal</span>
              </motion.div>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a
                  className="btn-custom btn-primary-custom"
                  href="/Resume.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download Resume
                </motion.a>

                <motion.a
                  href="https://github.com/yuneshbyte01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-custom btn-secondary-custom"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  GitHub Profile
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} className="hero-visual">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="profile-placeholder"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Yunesh Timsina"
                  className="profile-photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </motion.div>

              <motion.div
                className="floating-elements"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="floating-element"
                    style={{
                      '--angle': `${i * 60}deg`,
                      '--distance': '200px',
                    } as React.CSSProperties}
                  />
                ))}
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home; 