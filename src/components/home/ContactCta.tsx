import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ContactCta() {
  const { elementRef } = useScrollReveal();

  return (
    <section ref={elementRef} className="section section-surface" aria-labelledby="contact-cta-title">
      <div className="container">
        <div className="contact-cta">
          <p className="eyebrow" id="contact-cta-title" style={{ color: 'var(--muted)', marginBottom: '8px' }}>CONTACT / 05</p>
          <h2>Let's build reliable backend systems.</h2>
          <p style={{ maxWidth: '680px', marginBottom: '24px' }}>I'm interested in backend engineering opportunities where I can contribute to secure APIs, database-driven applications, and maintainable software systems.</p>
          <div className="button-row">
            <Link className="button button-primary" to="/contact">Contact Me</Link>
            <a className="text-link" href="mailto:yuneshtimsina@gmail.com">Email</a>
            <a className="text-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
