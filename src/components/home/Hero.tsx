import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import { useMouseLight } from '../../hooks/useMouseLight';

export function Hero() {
  const { containerRef, disableHoverEffect } = useMouseLight();

  return (
    <section ref={containerRef} className="container" aria-labelledby="hero-title" style={{ position: 'relative' }}>
      {/* Background Gradient Layers */}
      <div className="hero-gradient-wrapper">
        <div className="hero-gradient-layer hero-layer-1" />
        <div className="hero-gradient-layer hero-layer-2" />
        <div className="hero-gradient-layer hero-layer-3" />
      </div>

      {/* Mouse Follow Ambient Spotlight (behind content, in front of background) */}
      {!disableHoverEffect && <div className="hero-mouse-light" />}

      {/* Actual Hero Content Grid */}
      <div className="hero-grid" style={{ position: 'relative', zIndex: 2 }}>
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-accent-line" />
          <span className="eyebrow" style={{ color: 'var(--muted)', letterSpacing: '0.1em' }}>BACKEND ENGINEER</span>
          <h1 id="hero-title">Yunesh Timsina</h1>
          <h2 className="hero-subtitle-line">I build secure backend systems.</h2>
          <p className="hero-support-desc">
            I design REST APIs, authentication systems, and database-driven applications using Java, Spring Boot, PostgreSQL, and clean backend architecture.
          </p>
          
          <div className="button-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
            <Link className="button button-primary" to="/projects">View Projects</Link>
            <a className="button" href="/Resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
            <div className="connect-icons-row" style={{ marginLeft: '8px' }}>
              <a className="icon-link" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Github /></a>
              <a className="icon-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><Linkedin /></a>
              <a className="icon-link" href="mailto:yuneshtimsina@gmail.com" aria-label="Email" data-tooltip="Email"><Mail /></a>
            </div>
          </div>

          <div className="scroll-indicator-container">
            <a href="#highlights" className="scroll-indicator" aria-label="Scroll to core highlights">
              <ArrowDown />
            </a>
          </div>
        </div>

        {/* Center Column (Portrait Visual Overlap) */}
        <div className="hero-center">
          <div className="portrait-accent-glow" />
          <div className="portrait-container">
            <img src="/profile.jpg" alt="Yunesh Timsina professional portrait" className="portrait-image" />
          </div>
        </div>

        {/* Right Column (Stacked Directory Sidebar) */}
        <div className="hero-right">
          <div className="sidebar-block">
            <span className="eyebrow">ABOUT</span>
            <p>Backend Engineer and BSc Information Technology student based in Kathmandu, Nepal.</p>
            <Link className="text-link" to="/about">More about me <span aria-hidden="true">→</span></Link>
          </div>

          <div className="sidebar-block">
            <span className="eyebrow">CURRENT WORK</span>
            <p>Building secure, production-style backend systems focused on APIs, authentication, payments, bookings, and relational databases.</p>
            <Link className="text-link" to="/projects">Browse projects <span aria-hidden="true">→</span></Link>
          </div>

          <div className="sidebar-block">
            <span className="eyebrow">CONNECT</span>
            <div className="connect-icons-row">
              <a className="icon-link" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Github /></a>
              <a className="icon-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><Linkedin /></a>
              <a className="icon-link" href="mailto:yuneshtimsina@gmail.com" aria-label="Email" data-tooltip="Email"><Mail /></a>
              <a className="icon-link" href="/Resume.pdf" target="_blank" rel="noreferrer" aria-label="Download CV" data-tooltip="Download CV"><FileText /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
