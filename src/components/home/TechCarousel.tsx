import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

interface Tech {
  name: string;
  src: string;
  label?: string;
  invert?: boolean;
}

const TECH_STACK: Tech[] = [
  { name: 'Java',            src: `${CDN}/java/java-original.svg` },
  { name: 'Spring Boot',     src: `${CDN}/spring/spring-original.svg`,   label: 'Spring Boot' },
  { name: 'Spring Security', src: `${CDN}/spring/spring-original.svg`,   label: 'Spring Security' },
  { name: 'Hibernate',       src: `${CDN}/hibernate/hibernate-original.svg` },
  { name: 'JPA',             src: `${CDN}/java/java-original.svg`,       label: 'Java Persistence API' },
  { name: 'PostgreSQL',      src: `${CDN}/postgresql/postgresql-original.svg` },
  { name: 'MySQL',           src: `${CDN}/mysql/mysql-original.svg` },
  { name: 'Docker',          src: `${CDN}/docker/docker-original.svg` },
  { name: 'Git',             src: `${CDN}/git/git-original.svg` },
  { name: 'GitHub',          src: `${CDN}/github/github-original.svg`,   label: 'GitHub', invert: true },
  { name: 'Maven',           src: `${CDN}/maven/maven-original.svg` },
  { name: 'Postman',         src: `${CDN}/postman/postman-original.svg` },
  { name: 'IntelliJ IDEA',   src: `${CDN}/intellij/intellij-original.svg`, label: 'IntelliJ IDEA' },
  { name: 'Angular',         src: `${CDN}/angular/angular-original.svg` },
  { name: 'Linux',           src: `${CDN}/linux/linux-original.svg` },
  { name: 'Kubernetes',      src: `${CDN}/kubernetes/kubernetes-plain.svg`, label: 'Kubernetes' },
  { name: 'Redis',           src: `${CDN}/redis/redis-original.svg`,     label: 'Redis' },
];

export function TechCarousel() {
  const { elementRef } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
    pausedRef.current = true;
  };
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
    pausedRef.current = false;
  };
  const handleFocusIn = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };
  const handleFocusOut = () => {
    if (trackRef.current && !pausedRef.current) {
      trackRef.current.style.animationPlayState = 'running';
    }
  };

  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section
      ref={elementRef}
      id="highlights"
      className="tech-strip"
      aria-label="Core Technology Stack"
    >
      {/* Inner grid: label + carousel */}
      <div className="container grid grid-cols-[120px_1fr] gap-7 items-center overflow-hidden max-sm:grid-cols-1 max-sm:gap-3">
        <p className="eyebrow !m-0 shrink-0 whitespace-nowrap" aria-hidden="true">CORE / 01</p>

        {/* Carousel viewport */}
        <div
          className="tech-carousel-viewport"
          role="region"
          aria-label="Technology carousel — hover to pause"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocusCapture={handleFocusIn}
          onBlurCapture={handleFocusOut}
        >
          {/* Scrolling track */}
          <div className="tech-carousel-track" ref={trackRef} aria-hidden="true">
            {doubled.map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="group inline-flex items-center gap-3 px-7 py-2 border-r border-[var(--glass-border)] cursor-default whitespace-nowrap transition-[background,transform] duration-200 hover:bg-white/[0.035] hover:-translate-y-[1.5px]"
              >
                <img
                  src={tech.src}
                  alt=""
                  aria-hidden="true"
                  className="tech-logo-img"
                  loading="lazy"
                  draggable={false}
                  {...(tech.invert ? { 'data-invert': 'true' } : {})}
                />
                <span className="text-[0.92rem] font-medium text-[var(--text-secondary)] select-none whitespace-nowrap group-hover:text-[var(--text)] transition-colors duration-[0.18s]">
                  {tech.name}
                </span>
              </span>
            ))}
          </div>

          {/* Screen-reader list + reduced-motion fallback */}
          <ul className="tech-list-accessible" aria-label="Technology stack">
            {TECH_STACK.map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2 px-2.5 py-1.5 border border-[var(--glass-border)] rounded-md bg-[var(--glass-bg-soft)] text-[0.85rem] text-[var(--text-secondary)]"
              >
                <img src={tech.src} alt={tech.label ?? tech.name} className="tech-logo-img" loading="lazy" />
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>

          {/* Edge fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-[72px] pointer-events-none z-[2] bg-gradient-to-r from-[rgba(11,16,24,0.82)] to-transparent max-sm:w-10" aria-hidden="true" />
          <div className="absolute top-0 bottom-0 right-0 w-[72px] pointer-events-none z-[2] bg-gradient-to-l from-[rgba(11,16,24,0.82)] to-transparent max-sm:w-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
