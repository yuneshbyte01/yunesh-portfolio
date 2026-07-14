import { skillGroups } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Expertise() {
  const { elementRef } = useScrollReveal();

  return (
    <section ref={elementRef} className="section container" aria-labelledby="expertise-title">
      <SectionHeading eyebrow="EXPERTISE / 04" title="Tools for dependable backend delivery." />
      <div className="expertise-grid">
        {skillGroups.map((group) => (
          <article className={group.featured ? 'skill-group featured' : 'skill-group'} key={group.title}>
            <p className="meta-label">{group.title}</p>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
