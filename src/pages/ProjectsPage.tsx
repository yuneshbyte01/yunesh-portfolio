import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FeaturedProject {
  slug: string;
  name: string;
  type: string;
  summary: string;
  technologies: string[];
  description: string;
}

function FeaturedProjectCard({ p }: { p: FeaturedProject }) {
  const { elementRef } = useTilt();
  return (
    <article ref={elementRef as React.RefObject<HTMLDivElement>} className="repo-card">
      <div className="flex justify-between items-center border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-mono text-[var(--muted)] text-[0.9rem]">yuneshbyte01 /</span>
          <h3 className="text-[1.15rem] font-bold m-0 text-[var(--text)] tracking-[-0.01em]">{p.name}</h3>
          <span className="font-mono text-[0.64rem] text-[var(--success)] bg-[rgba(63,185,80,0.1)] border border-[rgba(63,185,80,0.2)] px-2 py-0.5 rounded-xl font-semibold ml-1">Completed</span>
        </div>
        <span className="font-mono text-[0.68rem] text-[var(--accent)] uppercase tracking-[0.05em]">{p.type}</span>
      </div>

      <p className="m-0 text-[1.02rem] font-medium text-[var(--text)]">{p.summary}</p>
      <p className="m-0 text-[0.94rem] text-[var(--text-secondary)] leading-[1.6]">{p.description}</p>

      <div className="flex justify-between items-center border-t border-[var(--border)] pt-3.5 mt-1 flex-wrap gap-4">
        <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0">
          {p.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="font-mono text-[0.68rem] px-1.5 py-[3px] border border-[var(--border)] rounded bg-[var(--bg)] text-[var(--text-secondary)]">{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <a
            href={`https://github.com/yuneshbyte01/${p.slug === 'hamropaisa' ? 'digital-wallet-api' : p.slug === 'hamro-chalchitraghar' ? 'hamro-chalachitraghar-backend' : 'spring-auth-template'}`}
            target="_blank" rel="noreferrer"
            className="repo-action-link inline-flex items-center gap-1.5"
          >
            <Github /> Source
          </a>
          <Link to={`/projects/${p.slug}`} className="repo-action-link accent inline-flex items-center gap-1.5">
            <ArrowRight /> Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}

interface OtherProject {
  name: string;
  description: string;
  technologies: string[];
  repository: string;
}

function OtherProjectCard({ p }: { p: OtherProject }) {
  const { elementRef } = useTilt();
  return (
    <article ref={elementRef as React.RefObject<HTMLDivElement>} className="repo-card flex flex-col justify-between min-h-[220px]">
      <div>
        <h3 style={{ fontSize: '1.25rem', margin: '0 0 12px', fontWeight: '600' }}>{p.name}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 18px' }}>{p.description}</p>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2 list-none m-0 mb-5 p-0">
          {p.technologies.map((t) => (
            <li key={t} className="font-mono text-[0.68rem] px-2 py-1 border border-[var(--border)] rounded bg-[var(--bg)] text-[var(--text-secondary)]">{t}</li>
          ))}
        </ul>
        <a className="text-link text-[0.88rem]" href={p.repository} target="_blank" rel="noreferrer">
          GitHub repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const revealHeader   = useScrollReveal();
  const revealFeatured = useScrollReveal();
  const revealOther    = useScrollReveal();
  const revealCta      = useScrollReveal();

  useEffect(() => {
    document.title = 'Projects | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore the backend projects developed by Yunesh Timsina, featuring fintech systems, booking workflows, and secure API architectures.');
    }
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects: FeaturedProject[] = [
    { slug: 'hamropaisa',          name: 'HamroPaisa',          type: 'FINTECH BACKEND SYSTEM',        summary: 'A production-style digital wallet API designed around strict transactional integrity, idempotency, and auditable accounting.',                          technologies: ['Java','Spring Boot','PostgreSQL','Docker','Spring Security','JWT','REST API'],                                description: 'Built to handle concurrent peer-to-peer transfers, maintaining ledger consistency without double-spending or account discrepancies.' },
    { slug: 'hamro-chalchitraghar', name: 'Hamro Chalchitraghar', type: 'ENTERTAINMENT BACKEND SYSTEM', summary: 'A secure ticket reservation and showtime management API supporting transactional seating grids and asynchronous notification delivery.', technologies: ['Java','Spring Boot','PostgreSQL','Spring Security','JWT','Swagger / OpenAPI','Mail Sender'],           description: 'Coordinates hall showtimes, locks seat positions temporarily, processes checkouts, and dispatches automated ticket confirmation receipts.' },
    { slug: 'spring-auth-template', name: 'Spring Auth Template', type: 'REUSABLE SECURITY FOUNDATION', summary: 'A secure, modular authentication and authorization template designed to accelerate backend microservice development.',                               technologies: ['Java','Spring Boot','Spring Security','JWT','MySQL','Hibernate / JPA','Maven'],                            description: 'Provides pre-configured UserDetails verification, stateless JWT signature checks, refresh token rotation, and dynamic RBAC checks.' },
  ];

  const otherProjects: OtherProject[] = [
    { name: 'WanderWise',                    description: 'A travel planning and itinerary generator backend system focused on user route optimization and structured travel plans.',                                         technologies: ['Java','Spring Boot','PostgreSQL'], repository: 'https://github.com/yuneshbyte01/wanderwise' },
    { name: 'CSV Insights',                  description: 'A performance-optimized parsing utility and analysis service for large-scale CSV datasets with custom data extraction filters.',                                technologies: ['Java','Spring Boot','PostgreSQL'], repository: 'https://github.com/yuneshbyte01/csv-insights' },
    { name: 'University Placement System',   description: 'A placement management backend tracking recruitment drives, company registrations, student profiles, and application lifecycles.',                              technologies: ['Java','Spring Boot','MySQL'],       repository: 'https://github.com/yuneshbyte01/university-placement-system' },
  ];

  return (
    <div className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)]">
      <header ref={revealHeader.elementRef} className="mb-16">
        <p className="eyebrow">PORTFOLIO</p>
        <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Projects</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          Backend architectures built around transaction consistency, system security, and real constraints.
          Select a project below to read its in-depth engineering case study.
        </p>
      </header>

      {/* Featured */}
      <section ref={revealFeatured.elementRef} aria-label="Featured Projects">
        <h2 className="text-[1.8rem] border-b border-[var(--border)] pb-3.5 mb-8">Featured Systems</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {featuredProjects.map((p) => <FeaturedProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Other */}
      <section ref={revealOther.elementRef} aria-labelledby="other-projects-title" className="mt-24 border-t border-[var(--border)] pt-16">
        <p className="eyebrow" id="other-projects-title">SECONDARY REPOSITORIES</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Other Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {otherProjects.map((p) => <OtherProjectCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* GitHub CTA */}
      <section ref={revealCta.elementRef} aria-labelledby="github-cta-title" className="mt-24 border-t border-[var(--border)] pt-16 pb-8">
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
