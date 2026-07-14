import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';
import { Github, ArrowRight } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
}

function FeaturedProjectCard({ project }: ProjectCardProps) {
  const { elementRef } = useTilt();

  return (
    <article ref={elementRef as React.RefObject<HTMLDivElement>} className="repo-card">
      <div className="repo-card-header">
        <div className="repo-card-title-group">
          <span className="repo-owner">yuneshbyte01 /</span>
          <h3 className="repo-name">{project.name}</h3>
          <span className="repo-status-chip">Completed</span>
        </div>
        <span className="repo-type-label">{project.type}</span>
      </div>
      
      <p className="repo-desc">{project.summary}</p>
      
      <div className="repo-highlights">
        <span className="meta-label">Focus Areas</span>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="repo-card-footer">
        <ul className="repo-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="repo-tag">{tech}</li>
          ))}
        </ul>
        
        <div className="repo-actions">
          <a href={project.repository} target="_blank" rel="noreferrer" className="repo-action-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Github /> Source
          </a>
          <Link to={`/projects/${project.slug}`} className="repo-action-link accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
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
    <section ref={elementRef} className="section container" aria-labelledby="projects-title">
      <SectionHeading 
        eyebrow="02 / SELECTED WORK" 
        title="Backend systems built around real constraints." 
        description="Projects focused on security, transactional consistency, and maintainable service architecture." 
      />
      <div className="project-grid">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
