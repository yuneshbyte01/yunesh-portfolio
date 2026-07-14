import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';
import { Github, ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  return (
    <section className="section container" aria-labelledby="projects-title">
      <SectionHeading eyebrow="SELECTED WORK / 02" title="Backend systems built around real constraints." description="Projects focused on security, transactional consistency, and maintainable service architecture." />
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <div className="project-index" aria-hidden="true">0{index + 1}</div>
            <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.summary}</p><ul className="tag-list" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
            <div className="project-meta"><p className="meta-label">ENGINEERING FOCUS</p><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="project-actions">
                <a href={project.repository} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <Github style={{ width: '16px', height: '16px' }} /> Source
                </a>
                <Link to={`/projects/${project.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <ArrowRight style={{ width: '16px', height: '16px' }} /> Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
