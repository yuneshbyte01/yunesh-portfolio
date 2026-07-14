import { useState, useEffect } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Get in touch with Yunesh Timsina for backend engineering roles, Java / Spring Boot opportunities, and API integration collaborations.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 4) {
      tempErrors.subject = 'Subject must be at least 4 characters.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  const interests = [
    'Backend Engineering',
    'Java Development',
    'Spring Boot Projects',
    'API Development',
  ];

  return (
    <div className="container page-shell">
      <header className="contact-header" style={{ marginBottom: '64px' }}>
        <p className="eyebrow">COMMUNICATION</p>
        <h1 id="contact-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Contact</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          I am interested in backend engineering opportunities where I can contribute to secure APIs, 
          database-driven architectures, and robust system configurations.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        {/* Left Side: Form */}
        <section aria-labelledby="form-section-title">
          <h2 id="form-section-title" className="sr-only">Contact Form</h2>
          
          {submitStatus === 'success' && (
            <div className="form-status success" role="alert">
              <strong>Message Simulated Successfully!</strong>
              <p style={{ margin: '8px 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Thank you for your message. Note: EmailJS service is currently unconfigured in this sandbox build, but your form fields validated successfully.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-name' : undefined}
                required
                disabled={isSubmitting}
              />
              {errors.name && (
                <span id="error-name" className="form-feedback error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="yunesh@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'error-email' : undefined}
                required
                disabled={isSubmitting}
              />
              {errors.email && (
                <span id="error-email" className="form-feedback error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Project discussion / Role description"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'error-subject' : undefined}
                required
                disabled={isSubmitting}
              />
              {errors.subject && (
                <span id="error-subject" className="form-feedback error" role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Describe the project goals or details..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'error-message' : undefined}
                required
                disabled={isSubmitting}
              />
              {errors.message && (
                <span id="error-message" className="form-feedback error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="button button-primary"
              style={{ minHeight: '44px', width: 'fit-content' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </section>

        {/* Right Side: Contact Info & Availability */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Info Section */}
          <section aria-labelledby="info-section-title">
            <p className="eyebrow" id="info-section-title">DIRECT DIRECTORY</p>
            <h2 style={{ fontSize: '1.8rem', margin: '8px 0 24px' }}>Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span className="meta-label" style={{ fontSize: '0.7rem' }}>Email Address</span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: '500', color: 'var(--text)' }}>
                  <a href="mailto:yuneshtimsina@gmail.com" className="text-link" style={{ fontSize: '1rem' }}>
                    yuneshtimsina@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <span className="meta-label" style={{ fontSize: '0.7rem' }}>LinkedIn Profile</span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: '500', color: 'var(--text)' }}>
                  <a
                    href="https://www.linkedin.com/in/yunesh-timsina-898775346/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                    style={{ fontSize: '1rem' }}
                  >
                    yunesh-timsina-898775346 <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>

              <div>
                <span className="meta-label" style={{ fontSize: '0.7rem' }}>GitHub Profile</span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: '500', color: 'var(--text)' }}>
                  <a
                    href="https://github.com/yuneshbyte01"
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                    style={{ fontSize: '1rem' }}
                  >
                    github.com/yuneshbyte01 <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>

              <div>
                <span className="meta-label" style={{ fontSize: '0.7rem' }}>Location</span>
                <p style={{ margin: '4px 0 0', fontSize: '1.05rem', fontWeight: '500', color: 'var(--text)' }}>
                  Kathmandu, Nepal
                </p>
              </div>
            </div>
          </section>

          {/* Availability Section */}
          <section aria-labelledby="avail-section-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
            <p className="eyebrow" id="avail-section-title">AVAILABILITY</p>
            <h2 style={{ fontSize: '1.8rem', margin: '8px 0 24px' }}>Interested In</h2>
            
            <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              {interests.map((interest) => (
                <li key={interest} style={{ marginBottom: '6px' }}>
                  {interest}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
