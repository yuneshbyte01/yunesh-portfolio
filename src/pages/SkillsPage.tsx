import { useEffect } from 'react';

export function SkillsPage() {
  useEffect(() => {
    document.title = 'Skills | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore the backend engineering skillset of Yunesh Timsina, including Java, Spring Boot, Spring Security, PostgreSQL, MySQL, and Docker.');
    }
    window.scrollTo(0, 0);
  }, []);

  const skillGroups = [
    { category: 'Languages',             description: 'Programming languages used for backend application logic, database queries, and scripting.',                                                                                    skills: ['Java','SQL','Python','JavaScript'] },
    { category: 'Backend',               description: 'Frameworks, APIs, and libraries for developing secure, transactional backend systems.',                                                                                        skills: ['Spring Boot','Spring Security','Hibernate / JPA','REST APIs','JWT','Role-Based Access Control (RBAC)'] },
    { category: 'Databases',             description: 'Relational and document database engines for high-integrity storage and indexing.',                                                                                             skills: ['PostgreSQL','MySQL','MongoDB'] },
    { category: 'Frontend Familiarity',  description: 'User interface technologies and templates utilized during full-stack integration and migrations.',                                                                              skills: ['Angular','HTML','CSS','JSP'] },
    { category: 'Tools',                 description: 'Developer utilities, containerization engines, build pipelines, and IDEs for execution and version control.',                                                                  skills: ['Git','GitHub','Docker','Maven','Postman','IntelliJ IDEA'] },
  ];

  return (
    <div className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)]">
      <header className="mb-16">
        <p className="eyebrow">CAPABILITIES</p>
        <h1 id="skills-title" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Skills</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          Backend technologies organized by practical experience and engineering context.
          Focusing on relational schemas, RESTful endpoint architectures, and application security configurations.
        </p>
      </header>

      <section aria-labelledby="skills-grid-title" className="border-t border-[var(--border)] pt-16 relative">
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(76,141,255,0.03)_0%,transparent_70%)] pointer-events-none z-0" />
        <h2 id="skills-grid-title" className="sr-only">Technical Skill Groups</h2>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 relative z-10">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="group relative overflow-hidden min-h-[260px] p-[26px] bg-[rgba(17,24,34,0.52)] backdrop-blur-[12px] border border-[var(--glass-border)] rounded-[var(--glass-radius-md)] shadow-[0_6px_20px_rgba(0,0,0,0.12),inset_0_1px_0_var(--glass-highlight)] transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-[rgba(20,29,41,0.62)] hover:shadow-[0_20px_50px_rgba(76,141,255,0.12)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="meta-label" style={{ color: 'var(--accent)' }}>{group.category}</p>
              <p style={{ margin: '10px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{group.description}</p>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                {group.skills.map((skill) => (
                  <li key={skill} className="px-3 py-1.5 border border-[var(--border)] rounded-md bg-[rgba(28,33,40,0.4)] text-[var(--text-secondary)] font-mono text-[0.74rem] transition-all duration-200 hover:border-[var(--accent)]/30 hover:text-[var(--text)] hover:bg-[rgba(28,33,40,0.7)]">{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-16 py-4 px-5 border-l-2 border-[var(--accent-2)] bg-[var(--surface)] font-mono text-[0.84rem] text-[var(--text-secondary)] relative z-10">
        Note: The skills represented are limited to active technologies in development environments and production-style projects. No arbitrary ratings or progress indicators are applied.
      </footer>
    </div>
  );
}
