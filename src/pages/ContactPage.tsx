import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FormState   { name: string; email: string; subject: string; message: string; }
interface FormErrors  { name?: string; email?: string; subject?: string; message?: string; }

const fieldCls = 'w-full bg-[rgba(17,24,34,0.48)] border border-[var(--border)] rounded-md text-[var(--text)] px-4 py-3.5 text-[0.94rem] leading-[1.5] font-[inherit] transition-all duration-200 outline-none placeholder:text-[var(--muted)] hover:border-[var(--border)]/80 focus:border-[var(--accent)] focus:bg-[rgba(17,24,34,0.65)] focus:shadow-[0_0_0_4px_rgba(76,141,255,0.12)]';

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Get in touch with Yunesh Timsina for backend engineering roles, Java / Spring Boot opportunities, and API integration collaborations.');
    }
    window.scrollTo(0, 0);
  }, []);

  const [formData,     setFormData]     = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors,       setErrors]       = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim())                       tempErrors.name    = 'Name is required.';
    else if (formData.name.trim().length < 2)        tempErrors.name    = 'Name must be at least 2 characters.';
    if (!formData.email.trim())                      tempErrors.email   = 'Email is required.';
    else if (!emailPattern.test(formData.email))     tempErrors.email   = 'Please enter a valid email address.';
    if (!formData.subject.trim())                    tempErrors.subject = 'Subject is required.';
    else if (formData.subject.trim().length < 4)     tempErrors.subject = 'Subject must be at least 4 characters.';
    if (!formData.message.trim())                    tempErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10)    tempErrors.message = 'Message must be at least 10 characters.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const interests = ['Backend Engineering', 'Java Development', 'Spring Boot Projects', 'API Development'];

  return (
    <div className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)]">
      <header className="mb-16">
        <p className="eyebrow">COMMUNICATION</p>
        <h1 id="contact-title" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Contact</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          I am interested in backend engineering opportunities where I can contribute to secure APIs,
          database-driven architectures, and robust system configurations.
        </p>
      </header>

      <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 border-t border-[var(--border)] pt-16 max-md:grid-cols-1">
        {/* Form */}
        <section aria-labelledby="form-section-title" className="group relative overflow-hidden bg-[rgba(17,24,34,0.32)] border border-[var(--border)] rounded-[var(--glass-radius-md)] p-6 sm:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
          <h2 id="form-section-title" className="sr-only">Contact Form</h2>

          {submitStatus === 'success' && (
            <div className="px-3.5 py-4 rounded-md border border-[var(--success)] bg-[rgba(63,185,80,0.1)] text-[var(--text)] mb-6 text-[0.95rem]" role="alert">
              <strong>Message Simulated Successfully!</strong>
              <p style={{ margin: '8px 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Thank you for your message. Note: EmailJS service is currently unconfigured in this sandbox build, but your form fields validated successfully.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            {([
              { id: 'contact-name',    label: 'Name',           name: 'name',    type: 'text',  placeholder: 'Enter your name', error: errors.name },
              { id: 'contact-email',   label: 'Email Address',  name: 'email',   type: 'email', placeholder: 'yunesh@example.com', error: errors.email },
              { id: 'contact-subject', label: 'Subject',        name: 'subject', type: 'text',  placeholder: 'Project discussion / Role description', error: errors.subject },
            ] as const).map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <label htmlFor={field.id} className="font-medium text-[0.9rem] text-[var(--text)] font-mono uppercase tracking-[0.05em]">{field.label}</label>
                <input
                  type={field.type} id={field.id} name={field.name}
                  value={formData[field.name as keyof FormState]}
                  onChange={handleInputChange}
                  className={`${fieldCls} ${field.error ? 'border-[#ff5f56] focus:border-[#ff5f56] focus:shadow-[0_0_0_4px_rgba(255,95,86,0.15)]' : ''}`}
                  placeholder={field.placeholder}
                  aria-invalid={!!field.error}
                  aria-describedby={field.error ? `error-${field.name}` : undefined}
                  required disabled={isSubmitting}
                />
                {field.error && (
                  <span id={`error-${field.name}`} className="text-[#ff5f56] text-[0.84rem]" role="alert">{field.error}</span>
                )}
              </div>
            ))}

            {/* Message textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="font-medium text-[0.9rem] text-[var(--text)] font-mono uppercase tracking-[0.05em]">Message</label>
              <textarea
                id="contact-message" name="message" rows={7}
                value={formData.message}
                onChange={handleInputChange}
                className={`${fieldCls} resize-y min-h-[120px] ${errors.message ? 'border-[#ff5f56] focus:border-[#ff5f56] focus:shadow-[0_0_0_4px_rgba(255,95,86,0.15)]' : ''}`}
                placeholder="Describe the project goals or details..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'error-message' : undefined}
                required disabled={isSubmitting}
              />
              {errors.message && (
                <span id="error-message" className="text-[#ff5f56] text-[0.84rem]" role="alert">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="button button-primary w-fit min-h-[44px] cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" aria-hidden="true" />
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </section>

        {/* Info + Availability */}
        <div className="flex flex-col gap-10">
          <section aria-labelledby="info-section-title">
            <p className="eyebrow" id="info-section-title">DIRECT DIRECTORY</p>
            <h2 style={{ fontSize: '1.8rem', margin: '8px 0 24px' }}>Information</h2>

            <div className="flex flex-col gap-5">
              {[
                { icon: <Mail aria-hidden="true" />, content: <a href="mailto:yuneshtimsina@gmail.com" className="text-link">yuneshtimsina@gmail.com</a> },
                { icon: <Linkedin aria-hidden="true" />, content: <a href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" className="text-link">linkedin.com/in/yunesh-timsina-898775346</a> },
                { icon: <Github aria-hidden="true" />, content: <a href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" className="text-link">github.com/yuneshbyte01</a> },
                { icon: <MapPin aria-hidden="true" />, content: <span className="text-[var(--text)] font-medium">Kathmandu, Nepal</span> },
                { icon: <Phone aria-hidden="true" />, content: <span className="text-[var(--text)] font-medium">+977 98XXXXXXXX</span> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[1rem] group">
                  <div className="w-10 h-10 rounded-md border border-[var(--glass-border)] bg-[rgba(17,24,34,0.52)] flex items-center justify-center text-[var(--accent)] transition-colors duration-200 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--text)] shrink-0">
                    {item.icon}
                  </div>
                  {item.content}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="avail-section-title" className="border-t border-[var(--border)] pt-8">
            <p className="eyebrow" id="avail-section-title">AVAILABILITY</p>
            <h2 style={{ fontSize: '1.8rem', margin: '8px 0 24px' }}>Interested In</h2>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {interests.map((interest) => (
                <li 
                  key={interest} 
                  className="px-3.5 py-1.5 border border-[var(--border)] rounded-md bg-[rgba(28,33,40,0.4)] text-[0.88rem] font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)]/30 hover:text-[var(--text)] hover:bg-[rgba(28,33,40,0.7)]"
                >
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
