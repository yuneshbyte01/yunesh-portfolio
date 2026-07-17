import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container relative z-[2]">
        {/* Hero Content Grid */}
        <div className="hero-grid">

          {/* Left Column */}
          <div className="flex flex-col justify-center z-[2]">
            <div className="w-10 h-0.5 bg-[var(--accent)] mb-3" />
            <span className="eyebrow" style={{ color: 'var(--muted)', letterSpacing: '0.1em' }}>BACKEND ENGINEER</span>
            <h1 id="hero-title" className="[font-size:clamp(2.6rem,5.5vw,4.4rem)] font-extrabold mt-3 mb-2 leading-[1.05] tracking-[-0.03em] text-[var(--text)]">
              Yunesh Timsina
            </h1>
            <h2 className="hero-subtitle-line">I build secure backend systems.</h2>
            <p className="max-w-[480px] text-[1.02rem] leading-[1.65] text-[var(--text-secondary)] mb-7">
              I design REST APIs, authentication systems, and database-driven applications using Java, Spring Boot, PostgreSQL, and clean backend architecture.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link className="button button-primary" to="/projects">View Projects</Link>
              <a className="button" href="/Resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
              <div className="flex items-center gap-3 ml-2">
                <a className="icon-link" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Github /></a>
                <a className="icon-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><Linkedin /></a>
                <a className="icon-link" href="mailto:yuneshtimsina@gmail.com" aria-label="Email" data-tooltip="Email"><Mail /></a>
              </div>
            </div>

            <div className="mt-12">
              <a href="#highlights" className="scroll-indicator" aria-label="Scroll to core highlights">
                <ArrowDown />
              </a>
            </div>
          </div>

          {/* Center Column (Portrait Visual Overlap) */}
          <div className="flex justify-center items-end relative z-[1]">
            <div className="portrait-accent-glow" />
            <div className="relative w-full max-w-[2048px] flex justify-center items-end">
              <img 
                src="/github-profile-logo.png" 
                alt="" 
                className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] max-w-[2048px] aspect-square object-contain opacity-[0.50] pointer-events-none z-0 filter blur-[1px] saturate-[1.1] transition-all duration-500 hover:opacity-[0.25]" 
              />
              <img src="/profile.png" alt="Yunesh Timsina professional portrait" className="portrait-image relative z-10" />
            </div>
          </div>

          {/* Right Column (Stacked Directory Sidebar) */}
          <div className="flex flex-col gap-7 z-[2]">
            <div className="border-b border-[var(--border)] pb-5">
              <span className="eyebrow">ABOUT</span>
              <p className="text-[0.94rem] leading-[1.6] text-[var(--text-secondary)] mt-2 mb-3">Backend Engineer and BSc Information Technology student based in Kathmandu, Nepal.</p>
              <Link className="text-link" to="/about">More about me <span aria-hidden="true">→</span></Link>
            </div>

            <div className="border-b border-[var(--border)] pb-5">
              <span className="eyebrow">CURRENT WORK</span>
              <p className="text-[0.94rem] leading-[1.6] text-[var(--text-secondary)] mt-2 mb-3">Building secure, production-style backend systems focused on APIs, authentication, payments, bookings, and relational databases.</p>
              <Link className="text-link" to="/projects">Browse projects <span aria-hidden="true">→</span></Link>
            </div>

            <div>
              <span className="eyebrow">CONNECT</span>
              <div className="flex items-center gap-3 mt-2">
                <a className="icon-link" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Github /></a>
                <a className="icon-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><Linkedin /></a>
                <a className="icon-link" href="mailto:yuneshtimsina@gmail.com" aria-label="Email" data-tooltip="Email"><Mail /></a>
                <a className="icon-link" href="/Resume.pdf" target="_blank" rel="noreferrer" aria-label="Download CV" data-tooltip="Download CV"><FileText /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
