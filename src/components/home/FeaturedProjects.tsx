import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';
import { Github, ArrowRight } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Project } from '../../types/content';

function FeaturedProjectCard({ project }: { project: Project }) {
  const { elementRef } = useTilt();

  return (
    <article ref={elementRef as React.RefObject<HTMLDivElement>} className="repo-card">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-mono text-[var(--muted)] text-[0.9rem]">yuneshbyte01 /</span>
          <h3 className="text-[1.15rem] font-bold m-0 text-[var(--text)] tracking-[-0.01em]">{project.name}</h3>
          <span className="font-mono text-[0.64rem] text-[var(--success)] bg-[rgba(63,185,80,0.1)] border border-[rgba(63,185,80,0.2)] px-2 py-0.5 rounded-xl font-semibold ml-1">Completed</span>
        </div>
        <span className="font-mono text-[0.68rem] text-[var(--accent)] uppercase tracking-[0.05em]">{project.type}</span>
      </div>

      <p className="m-0 text-[0.94rem] text-[var(--text-secondary)] leading-[1.6]">{project.summary}</p>

      {/* Highlights */}
      <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-md px-4 py-3">
        <span className="meta-label block mb-2 text-[var(--muted)]">Focus Areas</span>
        <ul className="m-0 pl-[18px] text-[0.88rem] text-[var(--text-secondary)] flex flex-col gap-1.5">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-[var(--border)] pt-3.5 mt-1 flex-wrap gap-4">
        <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="font-mono text-[0.68rem] px-1.5 py-[3px] border border-[var(--border)] rounded bg-[var(--bg)] text-[var(--text-secondary)]">{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <a href={project.repository} target="_blank" rel="noreferrer" className="repo-action-link inline-flex items-center gap-1.5">
            <Github /> Source
          </a>
          <Link to={`/projects/${project.slug}`} className="repo-action-link accent inline-flex items-center gap-1.5">
            <ArrowRight /> Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  const { elementRef } = useScrollReveal();

  return (
    <section ref={elementRef} className="py-[clamp(72px,10vw,128px)] container" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="02 / SELECTED WORK"
        title="Backend systems built around real constraints."
        description="Projects focused on security, transactional consistency, and maintainable service architecture."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mt-6">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
