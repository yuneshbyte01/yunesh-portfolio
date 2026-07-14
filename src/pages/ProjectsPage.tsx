import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight } from 'lucide-react';

export function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore the backend projects developed by Yunesh Timsina, featuring fintech systems, booking workflows, and secure API architectures.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      slug: 'hamropaisa',
      name: 'HamroPaisa',
      type: 'FINTECH BACKEND SYSTEM',
      summary: 'A production-style digital wallet API designed around strict transactional integrity, idempotency, and auditable accounting.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'JWT', 'REST API'],
      description: 'Built to handle concurrent peer-to-peer transfers, maintaining ledger consistency without double-spending or account discrepancies.',
    },
    {
      slug: 'hamro-chalchitraghar',
      name: 'Hamro Chalchitraghar',
      type: 'ENTERTAINMENT BACKEND SYSTEM',
      summary: 'A secure ticket reservation and showtime management API supporting transactional seating grids and asynchronous notification delivery.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT', 'Swagger / OpenAPI', 'Mail Sender'],
      description: 'Coordinates hall showtimes, locks seat positions temporarily, processes checkouts, and dispatches automated ticket confirmation receipts.',
    },
    {
      slug: 'spring-auth-template',
      name: 'Spring Auth Template',
      type: 'REUSABLE SECURITY FOUNDATION',
      summary: 'A secure, modular authentication and authorization template designed to accelerate backend microservice development.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate / JPA', 'Maven'],
      description: 'Provides pre-configured UserDetails verification, stateless JWT signature checks, refresh token rotation, and dynamic RBAC checks.',
    },
  ];

  const otherProjects = [
    {
      name: 'WanderWise',
      description: 'A travel planning and itinerary generator backend system focused on user route optimization and structured travel plans.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
      repository: 'https://github.com/yuneshbyte01/wanderwise',
    },
    {
      name: 'CSV Insights',
      description: 'A performance-optimized parsing utility and analysis service for large-scale CSV datasets with custom data extraction filters.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
      repository: 'https://github.com/yuneshbyte01/csv-insights',
    },
    {
      name: 'University Placement System',
      description: 'A placement management backend tracking recruitment drives, company registrations, student profiles, and application lifecycles.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      repository: 'https://github.com/yuneshbyte01/university-placement-system',
    },
  ];

  return (
    <div className="container page-shell">
      <header className="projects-header" style={{ marginBottom: '64px' }}>
        <p className="eyebrow">PORTFOLIO</p>
        <h1 id="projects-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Projects</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          Backend architectures built around transaction consistency, system security, and real constraints. 
          Select a project below to read its in-depth engineering case study.
        </p>
      </header>

      {/* Featured Projects */}
      <section aria-label="Featured Projects">
        <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid var(--border)', paddingBottom: '14px', marginBottom: '32px' }}>Featured Systems</h2>
        
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <article className="repo-card" key={p.slug}>
              <div className="repo-card-header">
                <div className="repo-card-title-group">
                  <span className="repo-owner">yuneshbyte01 /</span>
                  <h3 className="repo-name">{p.name}</h3>
                  <span className="repo-status-chip">Completed</span>
                </div>
                <span className="repo-type-label">{p.type}</span>
              </div>
              
              <p className="repo-desc" style={{ fontSize: '1.02rem', color: 'var(--text)' }}>{p.summary}</p>
              <p className="repo-desc">{p.description}</p>

              <div className="repo-card-footer">
                <ul className="repo-tags">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <li key={tech} className="repo-tag">{tech}</li>
                  ))}
                </ul>
                
                <div className="repo-actions">
                  <a href={`https://github.com/yuneshbyte01/${p.slug === 'hamropaisa' ? 'digital-wallet-api' : p.slug === 'hamro-chalchitraghar' ? 'hamro-chalachitraghar-backend' : 'spring-auth-template'}`} target="_blank" rel="noreferrer" className="repo-action-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Github /> Source
                  </a>
                  <Link to={`/projects/${p.slug}`} className="repo-action-link accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <ArrowRight /> Case Study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section aria-labelledby="other-projects-title" style={{ marginTop: '96px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        <p className="eyebrow" id="other-projects-title">SECONDARY REPOSITORIES</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Other Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {otherProjects.map((p) => (
            <article key={p.name} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--surface)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 12px', fontWeight: '600' }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 18px' }}>{p.description}</p>
              </div>
              <div>
                <ul className="tag-list" aria-label={`${p.name} technologies`} style={{ margin: '0 0 20px', padding: 0 }}>
                  {p.technologies.map((t) => (
                    <li key={t} style={{ fontSize: '0.68rem', padding: '4px 8px' }}>{t}</li>
                  ))}
                </ul>
                <a className="text-link" href={p.repository} target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem' }}>
                  GitHub repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GitHub Explore CTA */}
      <section aria-labelledby="github-cta-title" style={{ marginTop: '96px', borderTop: '1px solid var(--border)', paddingTop: '64px', paddingBottom: '32px' }}>
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--surface)', padding: '38px', textAlign: 'center' }}>
          <p className="eyebrow">EXPLORE MORE WORK</p>
          <h2 id="github-cta-title" style={{ fontSize: '2rem', margin: '8px 0 16px' }}>Explore More Projects</h2>
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
