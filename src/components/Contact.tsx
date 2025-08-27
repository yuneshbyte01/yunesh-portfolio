import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  /** Handle input change */
  const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** Handle form submission */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
            time: new Date().toLocaleString(),
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  /** Contact Info */
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "yuneshtimsina@gmail.com",
      link: "mailto:yuneshtimsina@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+977 9742498100",
      link: "tel:+9779742498100",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kathmandu, Nepal",
      link: "#",
    },
  ];

  /** Social Links */
  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/yuneshbyte01",
      color: "#333",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yunesh-timsina-898775346/",
      color: "#0077b5",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/yunesh.timsina/",
      color: "#e1306c",
    },
  ];

  return (
      <section className="contact-section section">
        <Container className="container-custom">
          <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <Row className="align-items-start">
            {/* Left Section - Contact Info */}
            <Col lg={6} className="contact-info">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
              >
                <div className="info-card card-custom">
                  <h3>Let's Connect</h3>
                  <p>
                    I'm always open to discussing new opportunities, creative
                    collaborations, or even just having a friendly chat.
                    Drop me a message!
                  </p>

                  {/* Contact Details */}
                  <div className="contact-details">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.title}
                            href={info.link}
                            className="contact-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, x: 10 }}
                        >
                          <div className="contact-icon">
                            <info.icon />
                          </div>
                          <div className="contact-text">
                            <h4>{info.title}</h4>
                            <p>{info.value}</p>
                          </div>
                        </motion.a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="social-links">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                      {socialLinks.map((social, index) => (
                          <motion.a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-icon"
                              style={{
                                "--social-color": social.color,
                              } as React.CSSProperties}
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
                </div>
              </motion.div>
            </Col>

            {/* Right Section - Contact Form */}
            <Col lg={6} className="contact-form">
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
              >
                <div className="form-card card-custom">
                  <h3>Send Message</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What's this about?"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Type your message here..."
                      />
                    </Form.Group>

                    <motion.div
                        className="submit-container"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                      <Button
                          type="submit"
                          className="btn-custom btn-primary-custom w-100"
                          disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                            <motion.div
                                className="loading-spinner"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                            />
                        ) : (
                            <>
                              <FaPaperPlane /> Send Message
                            </>
                        )}
                      </Button>
                    </motion.div>

                    {/* Success & Error Messages */}
                    {submitStatus === "success" && (
                        <motion.div
                            className="success-message"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                          ✅ Your message has been sent successfully! I'll get back
                          to you shortly.
                        </motion.div>
                    )}

                    {submitStatus === "error" && (
                        <motion.div
                            className="error-message"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                          ❌ Oops! Something went wrong. Please try again.
                        </motion.div>
                    )}
                  </Form>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Contact;
