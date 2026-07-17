import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AboutPage() {
  const revealHeader    = useScrollReveal();
  const revealJourney   = useScrollReveal();
  const revealPhilosophy = useScrollReveal();
  const revealEduFocus  = useScrollReveal();

  useEffect(() => {
    document.title = 'About | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn more about Yunesh Timsina, a Backend Engineer and B.Sc. IT student focused on security-first backend development, databases, and clean architecture.');
    }
    window.scrollTo(0, 0);
  }, []);

  const philosophy = [
    { title: 'Clean Architecture',       description: 'Decoupling core business rules from external details like web frameworks, database engines, or UI layers. This ensures parts of the system can be refactored, updated, or swapped with minimal regression risk.' },
    { title: 'Security by Design',        description: 'Treating security as a core architectural constraint rather than a feature layer added late in development. Integrating authorization (RBAC), stateless session tokens, and strict input validation at the entry boundaries.' },
    { title: 'Maintainability',           description: 'Writing code for human readability, preserving design consistency, and documenting design decisions. Prioritizing modular structure over clever, hard-to-read abstractions.' },
    { title: 'Database-first Thinking',   description: 'Designing high-integrity schemas, choosing correct primary and foreign keys, adding indexes on critical queries, and ensuring concurrency safety through transactions and optimistic locking.' },
    { title: 'Continuous Improvement',    description: 'Refactoring redundant code, reviewing performance stats, analyzing logs, and researching backend patterns to improve API design, security, and response times.' },
    { title: 'Practical Problem Solving', description: 'Developing software to meet exact constraints and business requirements. Designing simple, direct architectures that solve immediate performance and transactional problems.' },
  ];

  const journey = [
    { title: 'Diploma in Civil Engineering',      period: '2019 – 2023', description: 'Formed a foundation in structured design calculations, mathematical problem solving, and project management at Mahendra Rastriya Secondary School.' },
    { title: 'Transition into Information Technology', period: '2023',   description: 'Recognized a strong interest in logical systems, algorithms, and automated processes. Transitioned fields to focus full-time on software engineering and information systems.' },
    { title: 'Learning Java Backend Development', period: '2023 – 2025', description: 'Studied core computer science concepts while specializing in Java, Spring Boot, relational database design (PostgreSQL, MySQL), and REST API design patterns.' },
    { title: 'Internship Experience',             period: 'Dec 2025 – Feb 2026', description: 'Gained professional team experience as a Software Development Intern at KK Smartways Pvt. Ltd., migrating legacy JSP controllers into JSON APIs and integrating Angular.' },
    { title: 'Current Focus',                     period: '2026 – Present',      description: 'Designing secure backend systems, studying advanced application security configurations, studying system design principles, and pursuing a B.Sc. in IT.' },
  ];

  return (
    <div className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)]">
      {/* Intro */}
      <header ref={revealHeader.elementRef} className="mb-16">
        <p className="eyebrow">BIOGRAPHY</p>
        <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>About Me</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          I am a Backend Engineer and B.Sc. Information Technology student based in Kathmandu, Nepal.
          I focus on building secure APIs, managing relational databases, and designing scalable backend architectures.
        </p>
      </header>

      {/* Journey Timeline */}
      <section ref={revealJourney.elementRef} aria-labelledby="journey-title" className="mb-20 border-t border-[var(--border)] pt-16">
        <p className="eyebrow" id="journey-title">TIMELINE</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>My Journey</h2>
        <div className="ml-[7px] border-l border-[var(--border)]">
          {journey.map((item) => (
            <article key={item.title} className="relative pl-[38px] pb-8 last:pb-0">
              <div
                className="absolute top-2 left-[-5px] w-[9px] h-[9px] rounded-full bg-[var(--accent)]"
                style={{ boxShadow: '0 0 0 4px var(--bg), 0 0 0 5px var(--border)' }}
                aria-hidden="true"
              />
              <div className="group relative overflow-hidden bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] px-6 py-[22px] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-[rgba(20,29,41,0.62)] hover:shadow-[0_20px_50px_rgba(76,141,255,0.12)]">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex justify-between gap-8 flex-wrap sm:flex-nowrap">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: 0 }} className="group-hover:text-[var(--accent)] transition-colors duration-200">{item.title}</h3>
                  <p className="font-mono text-[0.76rem] font-semibold tracking-[0.1em] uppercase text-[var(--accent)] shrink-0">{item.period}</p>
                </div>
                <p style={{ marginTop: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section ref={revealPhilosophy.elementRef} aria-labelledby="philosophy-title" className="mb-20 border-t border-[var(--border)] pt-16">
        <p className="eyebrow" id="philosophy-title">OPERATING PRINCIPLES</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Engineering Philosophy</h2>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {philosophy.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden min-h-[190px] p-[26px] bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-[rgba(20,29,41,0.62)] hover:shadow-[0_20px_50px_rgba(76,141,255,0.12)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="meta-label" style={{ color: 'var(--accent)' }}>{p.title}</p>
              <p style={{ marginTop: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Education & Current Focus */}
      <div
        ref={revealEduFocus.elementRef as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-[1.1fr_0.9fr] gap-12 border-t border-[var(--border)] pt-16 mt-8 max-md:grid-cols-1"
      >
        {/* Education */}
        <section aria-labelledby="education-title">
          <p className="eyebrow" id="education-title">ACADEMICS</p>
          <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Education</h2>
          <div className="flex flex-col gap-8">
            <article className="border-l-2 border-[var(--accent)] pl-5 group relative">
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 4px', fontWeight: '600' }} className="group-hover:text-[var(--accent)] transition-colors duration-200">B.Sc. Information Technology</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 6px', fontWeight: '500' }}>Presidential Graduate School</p>
              <p className="eyebrow" style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>2023 – Present</p>
            </article>
            <article className="border-l-2 border-[var(--accent)] pl-5 group relative">
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 4px', fontWeight: '600' }} className="group-hover:text-[var(--accent)] transition-colors duration-200">Diploma in Civil Engineering</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 6px', fontWeight: '500' }}>Mahendra Rastriya Secondary School</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 6px' }}>CGPA: 3.28</p>
              <p className="eyebrow" style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>2019 – 2023</p>
            </article>
          </div>
        </section>

        {/* Current Focus */}
        <section aria-labelledby="focus-title">
          <p className="eyebrow" id="focus-title">ACQUISITION</p>
          <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Current Focus</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
            Technologies and concepts I am actively working with and expanding my skills in:
          </p>
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
            {['Spring Security', 'PostgreSQL', 'Docker', 'System Design', 'Testing', 'Angular'].map((tech) => (
              <li key={tech} className="px-3 py-1.5 border border-[var(--border)] rounded-md bg-[rgba(28,33,40,0.4)] text-[var(--text-secondary)] font-mono text-[0.8rem] transition-all duration-200 hover:border-[var(--accent)]/30 hover:text-[var(--text)] hover:bg-[rgba(28,33,40,0.7)]">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
