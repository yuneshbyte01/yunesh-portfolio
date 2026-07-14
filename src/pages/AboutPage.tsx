import { useEffect } from 'react';

export function AboutPage() {
  useEffect(() => {
    document.title = 'About | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn more about Yunesh Timsina, a Backend Engineer and B.Sc. IT student focused on security-first backend development, databases, and clean architecture.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const philosophy = [
    {
      title: 'Clean Architecture',
      description: 'Decoupling core business rules from external details like web frameworks, database engines, or UI layers. This ensures parts of the system can be refactored, updated, or swapped with minimal regression risk.',
    },
    {
      title: 'Security by Design',
      description: 'Treating security as a core architectural constraint rather than a feature layer added late in development. Integrating authorization (RBAC), stateless session tokens, and strict input validation at the entry boundaries.',
    },
    {
      title: 'Maintainability',
      description: 'Writing code for human readability, preserving design consistency, and documenting design decisions. Prioritizing modular structure over clever, hard-to-read abstractions.',
    },
    {
      title: 'Database-first Thinking',
      description: 'Designing high-integrity schemas, choosing correct primary and foreign keys, adding indexes on critical queries, and ensuring concurrency safety through transactions and optimistic locking.',
    },
    {
      title: 'Continuous Improvement',
      description: 'Refactoring redundant code, reviewing performance stats, analyzing logs, and researching backend patterns to improve API design, security, and response times.',
    },
    {
      title: 'Practical Problem Solving',
      description: 'Developing software to meet exact constraints and business requirements. Designing simple, direct architectures that solve immediate performance and transactional problems.',
    },
  ];

  const journey = [
    {
      title: 'Diploma in Civil Engineering',
      period: '2019 – 2023',
      description: 'Formed a foundation in structured design calculations, mathematical problem solving, and project management at Mahendra Rastriya Secondary School.',
    },
    {
      title: 'Transition into Information Technology',
      period: '2023',
      description: 'Recognized a strong interest in logical systems, algorithms, and automated processes. Transitioned fields to focus full-time on software engineering and information systems.',
    },
    {
      title: 'Learning Java Backend Development',
      period: '2023 – 2025',
      description: 'Studied core computer science concepts while specializing in Java, Spring Boot, relational database design (PostgreSQL, MySQL), and REST API design patterns.',
    },
    {
      title: 'Internship Experience',
      period: 'Dec 2025 – Feb 2026',
      description: 'Gained professional team experience as a Software Development Intern at KK Smartways Pvt. Ltd., migrating legacy JSP controllers into JSON APIs and integrating Angular.',
    },
    {
      title: 'Current Focus',
      period: '2026 – Present',
      description: 'Designing secure backend systems, studying advanced application security configurations, studying system design principles, and pursuing a B.Sc. in IT.',
    },
  ];

  return (
    <div className="container page-shell">
      {/* Intro Section */}
      <header className="about-header" style={{ marginBottom: '64px' }}>
        <p className="eyebrow">BIOGRAPHY</p>
        <h1 id="about-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>About Me</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          I am a Backend Engineer and B.Sc. Information Technology student based in Kathmandu, Nepal. 
          I focus on building secure APIs, managing relational databases, and designing scalable backend architectures.
        </p>
      </header>

      {/* Journey Timeline */}
      <section aria-labelledby="journey-title" style={{ marginBottom: '80px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        <p className="eyebrow" id="journey-title">TIMELINE</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>My Journey</h2>
        <div className="timeline">
          {journey.map((item) => (
            <article key={item.title}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-heading">
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{item.title}</h3>
                </div>
                <p className="timeline-date">{item.period}</p>
              </div>
              <p style={{ marginTop: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section aria-labelledby="philosophy-title" style={{ marginBottom: '80px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        <p className="eyebrow" id="philosophy-title">OPERATING PRINCIPLES</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Engineering Philosophy</h2>
        <div className="expertise-grid">
          {philosophy.map((p) => (
            <article className="skill-group" key={p.title} style={{ minHeight: '190px' }}>
              <p className="meta-label" style={{ color: 'var(--accent)' }}>{p.title}</p>
              <p style={{ marginTop: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Grid of Education & Current Focus */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', borderTop: '1px solid var(--border)', paddingTop: '64px', marginTop: '32px' }}>
        {/* Education Section */}
        <section aria-labelledby="education-title">
          <p className="eyebrow" id="education-title">ACADEMICS</p>
          <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Education</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <article style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 4px', fontWeight: '600' }}>B.Sc. Information Technology</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 6px', fontWeight: '500' }}>Presidential Graduate School</p>
              <p className="eyebrow" style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>2023 – Present</p>
            </article>

            <article style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 4px', fontWeight: '600' }}>Diploma in Civil Engineering</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 6px', fontWeight: '500' }}>Mahendra Rastriya Secondary School</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 6px' }}>CGPA: 3.28</p>
              <p className="eyebrow" style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>2019 – 2023</p>
            </article>
          </div>
        </section>

        {/* Current Focus Section */}
        <section aria-labelledby="focus-title">
          <p className="eyebrow" id="focus-title">ACQUISITION</p>
          <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Current Focus</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
            Technologies and concepts I am actively working with and expanding my skills in:
          </p>
          <ul className="tag-list" aria-label="Current focus areas" style={{ marginTop: 0 }}>
            {['Spring Security', 'PostgreSQL', 'Docker', 'System Design', 'Testing', 'Angular'].map((tech) => (
              <li key={tech} style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
