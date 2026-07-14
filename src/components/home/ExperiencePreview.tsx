import { Link } from 'react-router-dom';
import { experience } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ExperiencePreview() {
  const { elementRef } = useScrollReveal();

  return (
    <section ref={elementRef} className="section section-surface" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading eyebrow="EXPERIENCE / 03" title="Building backend experience in teams and projects." />
        <div className="timeline">
          {experience.map((entry) => (
            <article key={`${entry.role}-${entry.organization}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-heading">
                <div>
                  <h3>{entry.role}</h3>
                  <p>{entry.organization}</p>
                </div>
                <p className="timeline-date">
                  {entry.period}
                  {entry.location && <span>{entry.location}</span>}
                </p>
              </div>
              <ul>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link className="text-link" to="/experience">View full experience <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
