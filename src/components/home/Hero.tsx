import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">BACKEND ENGINEER</p>
        <h1 id="hero-title">Yunesh Timsina</h1>
        <p className="hero-statement">I build secure, scalable backend systems with Java, Spring Boot, PostgreSQL, and REST APIs.</p>
        <p className="hero-support">Backend Engineer and BSc Information Technology student based in Kathmandu, Nepal. I focus on API design, application security, relational databases, and maintainable backend architecture.</p>
        <div className="button-row" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link className="button button-primary" to="/projects">View Projects</Link>
          <a className="icon-link" href="/Resume.pdf" target="_blank" rel="noreferrer" aria-label="Download CV" data-tooltip="Download CV"><FileText /></a>
          <a className="icon-link" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Github /></a>
          <a className="icon-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><Linkedin /></a>
          <a className="icon-link" href="mailto:yuneshtimsina@gmail.com" aria-label="Email" data-tooltip="Email"><Mail /></a>
        </div>
        <p className="location"><span className="status-dot" aria-hidden="true" />Kathmandu, Nepal</p>
      </div>
      <figure className="profile-frame"><img src="/profile.jpg" alt="Yunesh Timsina" width="960" height="1280" /><figcaption>Backend systems / API engineering</figcaption></figure>
    </section>
  );
}
