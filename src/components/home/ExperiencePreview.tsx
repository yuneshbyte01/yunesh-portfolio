import { Link } from 'react-router-dom';
import { experience } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function ExperiencePreview() {
  const { elementRef } = useScrollReveal();

  return (
    <section
      ref={elementRef}
      className="py-[clamp(72px,10vw,128px)] bg-[var(--surface)] border-y border-[var(--border)]"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading eyebrow="EXPERIENCE / 03" title="Building backend experience in teams and projects." />

        {/* Timeline */}
        <div className="ml-[7px] border-l border-[var(--border)] mb-[30px]">
          {experience.map((entry) => (
            <article key={`${entry.role}-${entry.organization}`} className="relative pl-[38px] pb-8 last:pb-0">
              <div
                className="absolute top-2 left-[-5px] w-[9px] h-[9px] rounded-full bg-[var(--accent)]"
                style={{ boxShadow: '0 0 0 4px var(--bg), 0 0 0 5px var(--border)' }}
                aria-hidden="true"
              />
              <div className="bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] saturate-[110%] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] px-6 py-[22px] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-[border-color,background] duration-200 hover:border-[rgba(120,165,255,0.18)] hover:bg-[rgba(20,29,41,0.62)]">
                <div className="flex justify-between gap-8">
                  <div>
                    <h3 className="mb-1.5">{entry.role}</h3>
                    <p className="mb-0">{entry.organization}</p>
                  </div>
                  <p className="font-mono text-[0.76rem] font-semibold tracking-[0.1em] uppercase text-[var(--accent)] flex-shrink-0 text-right text-[var(--text-secondary)]">
                    {entry.period}
                    {entry.location && <span className="block mt-2 text-[var(--muted)]">{entry.location}</span>}
                  </p>
                </div>
                <ul className="max-w-[820px] pl-[19px] text-[var(--text-secondary)] leading-[1.7] text-[0.92rem]">
                  {entry.highlights.map((h) => (
                    <li key={h} style={{ listStyleType: 'disc' }}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <Link className="text-link" to="/experience">View full experience <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
