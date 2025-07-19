import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/yuneshbyte01',
      color: '#0077b5'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yunesh-timsina-898775346/',
      color: '#0077b5'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/yunesh.timsina/',
      color: '#1da1f2'
    }
  ];

  return (
    <footer className="footer">
      <Container className="container-custom">
        <Row className="align-items-center">
          <Col lg={4} className="footer-brand">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-container">
                <FaCode className="brand-icon" />
                <div>
                  <h3>Yunesh Timsina</h3>
                  <p>Backend Developer</p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={4} className="footer-links">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/skills">Skills</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </motion.div>
          </Col>

          <Col lg={4} className="footer-social">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="social-links">
                <h4>Connect With Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--social-color': social.color } as React.CSSProperties}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="copyright">
            <p>
              © {currentYear} Yunesh Timsina. All rights reserved. 
              Made with <FaHeart className="heart-icon" /> in Nepal
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer; 