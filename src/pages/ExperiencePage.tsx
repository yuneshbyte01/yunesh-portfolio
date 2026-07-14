import { useEffect } from 'react';

export function ExperiencePage() {
  useEffect(() => {
    document.title = 'Experience | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore the professional experience timeline of Yunesh Timsina, detailing backend engineering internships and personal projects.'
      );
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
    {
      title: 'Clean Architecture',
      description: 'Isolating domain logic from third-party frameworks and libraries, creating reusable and decoupleable service structures.',
    },
    {
      title: 'Security First',
      description: 'Designing security patterns (authentication, authorization, and validation) into systems from day one instead of appending them later.',
    },
    {
      title: 'API Design',
      description: 'Developing clean RESTful contracts with predictable URLs, semantic HTTP response codes, consistent JSON structures, and OpenAPI/Swagger documentations.',
    },
    {
      title: 'Database Design',
      description: 'Designing database schemas with high relational integrity, appropriate index selection, and concurrency safety using optimistic locking.',
    },
    {
      title: 'Maintainable Code',
      description: 'Writing readable, self-documenting code with clear separation of concerns, descriptive names, and minimal code duplication.',
    },
    {
      title: 'Testing',
      description: 'Verifying system correctness using comprehensive unit tests and integration tests to ensure reliable deployments and refactors.',
    },
  ];

  return (
    <div className="container page-shell">
      <header className="experience-header" style={{ marginBottom: '64px' }}>
        <p className="eyebrow">CHRONOLOGY</p>
        <h1 id="experience-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Experience</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          A record of professional software development internship work, alongside personal and academic backend engineering projects.
        </p>
      </header>

      {/* Timeline Section */}
      <section aria-label="Professional Timeline" style={{ marginBottom: '80px' }}>
        <div className="timeline">
          {experience.map((entry) => (
            <article key={`${entry.role}-${entry.organization}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-heading">
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: '600' }}>{entry.role}</h3>
                  <p style={{ fontWeight: '500', color: 'var(--text)' }}>{entry.organization}</p>
                </div>
                <p className="timeline-date">
                  {entry.period}
                  {entry.location && <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '6px', color: 'var(--muted)' }}>{entry.location}</span>}
                </p>
              </div>
              <ul style={{ marginTop: '16px' }}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering Principles Section */}
      <section aria-labelledby="principles-title" style={{ marginTop: '96px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        <p className="eyebrow" id="principles-title">OPERATING MODEL</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Engineering Principles</h2>
        
        <div className="expertise-grid">
          {principles.map((p) => (
            <article className="skill-group" key={p.title} style={{ minHeight: '180px' }}>
              <p className="meta-label" style={{ color: 'var(--accent)' }}>{p.title}</p>
              <p style={{ marginTop: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Explore More GitHub Section */}
      <section aria-labelledby="explore-cta-title" style={{ marginTop: '96px', borderTop: '1px solid var(--border)', paddingTop: '64px', paddingBottom: '32px' }}>
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
  );
}
