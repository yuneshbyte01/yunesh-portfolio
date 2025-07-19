import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaGraduationCap, FaHeart, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'Git & GitHub', level: 75 },
    { name: 'HTML/CSS/JS', level: 70 }
  ];

  return (
    <section className="about-section section">
      <Container className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <Row className="align-items-center">
          <Col lg={6} className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-text">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  I'm a passionate backend developer with strong experience in Java, Spring Boot, MySQL, and RESTful APIs. 
                  I love building efficient, scalable, and maintainable server-side applications that 
                  solve real-world problems. Currently based in Nepal, I'm eager to build scalable systems 
                  and improve backend architectures.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  I'm also learning frontend technologies to become a full-stack developer. When I'm not coding, 
                  you can find me exploring new technologies, contributing to open-source projects, and 
                  continuously learning to stay up-to-date with industry best practices.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  My journey in software development started with a curiosity to understand how things work behind the scenes. 
                  Today, I specialize in creating robust APIs, optimizing database performance, and implementing 
                  best practices for scalable applications.
                </motion.p>
              </div>

              <motion.div
                className="about-features"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="feature-item">
                  <FaGraduationCap className="feature-icon" />
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>Always exploring new technologies and best practices</p>
                  </div>
                </div>

                <div className="feature-item">
                  <FaHeart className="feature-icon" />
                  <div>
                    <h4>Passion for Code</h4>
                    <p>Love building solutions that make a difference</p>
                  </div>
                </div>

                <div className="feature-item">
                  <FaLightbulb className="feature-icon" />
                  <div>
                    <h4>Problem Solver</h4>
                    <p>Finding elegant solutions to complex challenges</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} className="about-visual">
            <motion.div
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="about-placeholder"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <FaCode className="about-icon" />
              </motion.div>

              <motion.div
                className="skills-chart"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4>Technical Skills</h4>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 