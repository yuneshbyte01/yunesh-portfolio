import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaMapMarkedAlt } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'WanderWise – Travel Recommendation App',
      description: 'Personalized travel recommendation system for destinations across Nepal. Features include destination suggestions, user preferences, and travel planning tools.',
      technologies: ['Spring Boot', 'MySQL', 'REST API', 'HTML/CSS'],
      github: 'https://github.com/yuneshbyte01/Wander_Wise',
      demo: 'https://wander-wise-alpha.vercel.app/',
      icon: FaMapMarkedAlt,
      color: '#667eea'
    },
    {
      id: 2,
      title: 'Spring Auth Template',
      description: 'A template project demonstrating authentication and authorization using Spring Boot Security. Includes JWT-based authentication setup and role-based access control.',
      technologies: ['Spring Boot', 'Spring Security', 'JWT', 'Java'],
      github: 'https://github.com/yuneshbyte01/spring-auth-template',
      demo: '#',
      icon: FaMapMarkedAlt,
      color: '#764ba2'
    },
    {
      id: 3,
      title: 'Chat App',
      description: 'A real-time chat application supporting group and private messaging. Built with Spring Boot backend and WebSocket/STOMP for instant communication.',
      technologies: ['Spring Boot', 'WebSocket', 'STOMP', 'Java'],
      github: 'https://github.com/yuneshbyte01/chat-app',
      demo: '#',
      icon: FaMapMarkedAlt,
      color: '#ff6a00'
    },
    {
      id: 4,
      title: 'CSV Insights',
      description: 'A Django-based tool for analyzing CSV files and extracting insights. Supports data cleaning, aggregation, and visualization of trends.',
      technologies: ['Django', 'Python', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/yuneshbyte01/csv_insights',
      demo: '#',
      icon: FaMapMarkedAlt,
      color: '#28a745'
    },
    {
      id: 5,
      title: 'Placement System',
      description: 'A project for managing student placements. Includes features like student registration, company job postings, and application tracking.',
      technologies: ['Spring Boot', 'MySQL', 'Java'],
      github: 'https://github.com/yuneshbyte01/placement-system',
      demo: '#',
      icon: FaMapMarkedAlt,
      color: '#17a2b8'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
      <section className="projects-section section">
        <Container className="container-custom">
          <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            <Row>
              {projects.map((project) => (
                  <Col lg={6} key={project.id} className="mb-4">
                    <motion.div
                        className="project-card card-custom"
                        variants={cardVariants}
                        whileHover={{
                          scale: 1.02,
                          y: -10,
                          transition: { duration: 0.3 }
                        }}
                    >
                      <motion.div
                          className="project-image"
                          style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)` }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                      >
                        <motion.div
                            className="project-icon-container"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <project.icon className="project-icon" />
                        </motion.div>
                      </motion.div>

                      <div className="project-content">
                        <motion.h3
                            className="project-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p
                            className="project-description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                            className="project-technologies"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                          {project.technologies.map((tech, index) => (
                              <span key={index} className="tech-tag">
                          {tech}
                        </span>
                          ))}
                        </motion.div>

                        <motion.div
                            className="project-links"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                          <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub />
                            GitHub
                          </motion.a>
                          <motion.a
                              href={project.demo}
                              className="project-link"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt />
                            Demo
                          </motion.a>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Col>
              ))}
            </Row>
          </motion.div>

          <motion.div
              className="projects-cta"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
          >
            <div className="cta-card card-custom">
              <h3>Interested in Working Together?</h3>
              <p>
                I'm always open to discussing new opportunities and exciting projects.
                Let's create something amazing together!
              </p>
              <motion.a
                  href="/contact"
                  className="btn-custom btn-primary-custom"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>
  );
};

export default Projects;
