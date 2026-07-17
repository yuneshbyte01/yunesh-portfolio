import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ContactCta() {
  const { elementRef } = useScrollReveal();

  return (
    <section
      ref={elementRef}
      className="py-[clamp(72px,10vw,128px)] bg-[var(--surface)] border-y border-[var(--border)]"
      aria-labelledby="contact-cta-title"
    >
      <div className="container">
        <div className="p-[clamp(38px,7vw,72px)] bg-[rgba(17,24,34,0.52)] backdrop-blur-[14px] saturate-[115%] border border-[var(--glass-border)] rounded-[var(--glass-radius-lg)] shadow-[0_14px_38px_rgba(0,0,0,0.18),inset_0_1px_0_var(--glass-highlight)]">
          <p className="eyebrow" id="contact-cta-title" style={{ color: 'var(--muted)', marginBottom: '8px' }}>CONTACT / 05</p>
          <h2 className="max-w-[800px]">Let's build reliable backend systems.</h2>
          <p className="max-w-[730px] text-[1.05rem] mb-0">
            I'm interested in backend engineering opportunities where I can contribute to secure APIs, database-driven applications, and maintainable software systems.
          </p>
          <div className="flex flex-wrap gap-3.5 items-center mt-7">
            <Link className="button button-primary" to="/contact">Contact Me</Link>
            <a className="text-link" href="mailto:yuneshtimsina@gmail.com">Email</a>
            <a className="text-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
