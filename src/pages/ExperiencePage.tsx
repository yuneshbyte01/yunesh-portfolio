import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ExperiencePage() {
  const revealHeader     = useScrollReveal();
  const revealTimeline   = useScrollReveal();
  const revealPrinciples = useScrollReveal();
  const revealExplore    = useScrollReveal();

  useEffect(() => {
    document.title = 'Experience | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore the professional experience timeline of Yunesh Timsina, detailing backend engineering internships and personal projects.');
    }
    window.scrollTo(0, 0);
  }, []);

  const experience = [
    {
      role: 'Software Development Intern',
      organization: 'KK Smartways Pvt. Ltd.',
      period: 'Dec 2025 – Feb 2026',
      location: 'Lalitpur, Nepal',
      highlights: [
        'Contributed to the development of the Dental Clinic Management System backend services.',
        'Migrated frontend functionality from legacy JSP pages to Angular components.',
        'Refactored legacy controller actions into clean, JSON-based REST APIs.',
        'Integrated Angular applications with Spring Boot backend services.',
        'Participated in application debugging, writing unit tests, and optimizing REST endpoint execution speeds.',
      ],
    },
    {
      role: 'Backend Engineer',
      organization: 'Academic & Personal Projects',
      period: '2023 – Present',
      location: 'Kathmandu, Nepal',
      highlights: [
        'Designed and built multiple Spring Boot applications and robust REST APIs.',
        'Implemented modern authentication flows including stateless JWT access tokens and database-backed refresh tokens.',
        'Enforced granular Role-Based Access Control (RBAC) to secure web endpoints.',
        'Designed relational database schemas with high integrity in PostgreSQL and MySQL.',
        'Applied structured Controller-Service-Repository layered architecture across all backend systems.',
      ],
    },
  ];

  const principles = [
    { title: 'Clean Architecture', description: 'Isolating domain logic from third-party frameworks and libraries, creating reusable and decoupleable service structures.' },
    { title: 'Security First',     description: 'Designing security patterns (authentication, authorization, and validation) into systems from day one instead of appending them later.' },
    { title: 'API Design',         description: 'Developing clean RESTful contracts with predictable URLs, semantic HTTP response codes, consistent JSON structures, and OpenAPI/Swagger documentations.' },
    { title: 'Database Design',    description: 'Designing database schemas with high relational integrity, appropriate index selection, and concurrency safety using optimistic locking.' },
    { title: 'Maintainable Code',  description: 'Writing readable, self-documenting code with clear separation of concerns, descriptive names, and minimal code duplication.' },
    { title: 'Testing',            description: 'Verifying system correctness using comprehensive unit tests and integration tests to ensure reliable deployments and refactors.' },
  ];

  return (
    <div className="min-h-[calc(100vh-300px)]">
      <div className="container pt-[clamp(100px,14vw,180px)]">
        <header ref={revealHeader.elementRef} className="mb-12">
          <p className="eyebrow">CHRONOLOGY</p>
          <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Experience</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
            A record of professional software development internship work, alongside personal and academic backend engineering projects.
          </p>
        </header>

        {/* Timeline */}
        <section ref={revealTimeline.elementRef} aria-label="Professional Timeline" className="mb-20">
          <div className="ml-[7px] border-l border-[var(--border)]">
            {experience.map((entry) => (
              <article key={`${entry.role}-${entry.organization}`} className="relative pl-[38px] pb-8 last:pb-0">
                <div
                  className="absolute top-2 left-[-5px] w-[9px] h-[9px] rounded-full bg-[var(--accent)]"
                  style={{ boxShadow: '0 0 0 4px var(--bg), 0 0 0 5px var(--border)' }}
                  aria-hidden="true"
                />
                <div className="bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] px-6 py-[22px] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-[border-color,background] duration-200 hover:border-[rgba(120,165,255,0.18)] hover:bg-[rgba(20,29,41,0.62)]">
                  <div className="flex justify-between gap-8 mb-4">
                    <div>
                      <h3 style={{ fontSize: '1.45rem', fontWeight: '600', marginBottom: '4px' }}>{entry.role}</h3>
                      <p style={{ fontWeight: '500', color: 'var(--text)', margin: 0 }}>{entry.organization}</p>
                    </div>
                    <p className="font-mono text-[0.76rem] font-semibold tracking-[0.1em] uppercase text-[var(--accent)] shrink-0 text-right">
                      {entry.period}
                      {entry.location && <span className="block mt-1.5 text-[0.75rem] text-[var(--muted)]">{entry.location}</span>}
                    </p>
                  </div>
                  <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
                    {entry.highlights.map((h) => (
                      <li key={h} style={{ marginBottom: '8px', lineHeight: '1.6' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Engineering Principles */}
      <section ref={revealPrinciples.elementRef} className="py-[clamp(72px,10vw,128px)] bg-[var(--surface)] border-y border-[var(--border)]" aria-labelledby="principles-title">
        <div className="container">
          <p className="eyebrow" id="principles-title">OPERATING MODEL</p>
          <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Engineering Principles</h2>
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {principles.map((p) => (
              <article
                key={p.title}
                className="min-h-[180px] p-[26px] bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-[border-color,background] duration-200 hover:border-[rgba(120,165,255,0.18)] hover:bg-[rgba(20,29,41,0.62)]"
              >
                <p className="meta-label" style={{ color: 'var(--accent)' }}>{p.title}</p>
                <p style={{ marginTop: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <div ref={revealExplore.elementRef as React.RefObject<HTMLDivElement>} className="container">
        <section aria-labelledby="explore-cta-title" className="py-20 pb-8">
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--surface)', padding: '38px', textAlign: 'center' }}>
            <p className="eyebrow">EXPLORE MORE WORK</p>
            <h2 id="explore-cta-title" style={{ fontSize: '2rem', margin: '8px 0 16px' }}>Explore More Projects</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 28px', lineHeight: '1.6' }}>
              Additional experimental projects, design templates, and university learning sandboxes are available on my GitHub profile.
            </p>
            <a className="button button-primary" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer">
              github.com/yuneshbyte01 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
