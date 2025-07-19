import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaJava, 
  FaLeaf, 
  FaDatabase, 
  FaGitAlt, 
  FaHtml5, 
  FaPaperPlane,
  FaTools
} from 'react-icons/fa';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: FaJava,
      name: 'Java',
      description: 'Core Java, OOP, Collections, Streams',
      color: '#ED8B00'
    },
    {
      icon: FaLeaf,
      name: 'Spring Boot',
      description: 'REST APIs, Dependency Injection, Security',
      color: '#6DB33F'
    },
    {
      icon: FaDatabase,
      name: 'MySQL',
      description: 'Database Design, SQL, Performance Optimization',
      color: '#4479A1'
    },
    {
      icon: FaGitAlt,
      name: 'Git',
      description: 'Version Control, Collaboration, CI/CD',
      color: '#F05032'
    },
    {
      icon: FaHtml5,
      name: 'HTML, CSS, JavaScript',
      description: 'Basic Frontend Development, Responsive Design',
      color: '#E34F26'
    },
    {
      icon: FaPaperPlane,
      name: 'REST APIs',
      description: 'API Design, Documentation, Testing',
      color: '#667eea'
    },
    {
      icon: FaTools,
      name: 'Postman',
      description: 'API Testing, Documentation, Collections',
      color: '#FF6C37'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="skills-section section">
      <Container className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row>
            {skills.map((skill, index) => (
              <Col lg={4} md={6} key={skill.name} className="mb-4">
                <motion.div
                  className="skill-card card-custom"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="skill-icon-container"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon 
                      className="skill-icon" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="summary-card card-custom">
            <h3>Learning Journey</h3>
            <p>
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies.<br/>
              Currently focusing on becoming a full-stack developer by learning React and modern frontend frameworks.
            </p>
            <div className="learning-progress-bar">
              <span>Backend</span>
              <div className="bar"><div className="fill backend"></div></div>
              <span>Frontend</span>
              <div className="bar"><div className="fill frontend"></div></div>
              <span>DevOps</span>
              <div className="bar"><div className="fill devops"></div></div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills; 