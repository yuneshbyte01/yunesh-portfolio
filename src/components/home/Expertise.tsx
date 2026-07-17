import { skillGroups } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Expertise() {
  const { elementRef } = useScrollReveal();

  return (
    <section ref={elementRef} className="py-[clamp(72px,10vw,128px)] container" aria-labelledby="expertise-title">
      <SectionHeading eyebrow="EXPERTISE / 04" title="Tools for dependable backend delivery." />
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className={`min-h-[200px] p-[26px] bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] saturate-[110%] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-[border-color,background] duration-200 hover:border-[rgba(120,165,255,0.18)] hover:bg-[rgba(20,29,41,0.62)] ${group.featured ? 'col-span-2 max-sm:col-span-1 bg-[rgba(22,30,42,0.58)]' : ''}`}
          >
            <p className="meta-label text-[var(--accent)]">{group.title}</p>
            <ul className="list-none p-0 mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li 
                  key={skill} 
                  className="px-3 py-1.5 border border-[var(--border)] rounded-md bg-[rgba(28,33,40,0.4)] text-[0.88rem] font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)]/30 hover:text-[var(--text)] hover:bg-[rgba(28,33,40,0.7)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
