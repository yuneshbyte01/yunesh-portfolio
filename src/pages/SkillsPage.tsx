import { useEffect } from 'react';

export function SkillsPage() {
  useEffect(() => {
    document.title = 'Skills | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore the backend engineering skillset of Yunesh Timsina, including Java, Spring Boot, Spring Security, PostgreSQL, MySQL, and Docker.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const skillGroups = [
    {
      category: 'Languages',
      description: 'Programming languages used for backend application logic, database queries, and scripting.',
      skills: ['Java', 'SQL', 'Python', 'JavaScript'],
    },
    {
      category: 'Backend',
      description: 'Frameworks, APIs, and libraries for developing secure, transactional backend systems.',
      skills: [
        'Spring Boot',
        'Spring Security',
        'Hibernate / JPA',
        'REST APIs',
        'JWT',
        'Role-Based Access Control (RBAC)',
      ],
    },
    {
      category: 'Databases',
      description: 'Relational and document database engines for high-integrity storage and indexing.',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      category: 'Frontend Familiarity',
      description: 'User interface technologies and templates utilized during full-stack integration and migrations.',
      skills: ['Angular', 'HTML', 'CSS', 'JSP'],
    },
    {
      category: 'Tools',
      description: 'Developer utilities, containerization engines, build pipelines, and IDEs for execution and version control.',
      skills: ['Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'IntelliJ IDEA'],
    },
  ];

  return (
    <div className="container page-shell">
      <header className="skills-header" style={{ marginBottom: '64px' }}>
        <p className="eyebrow">CAPABILITIES</p>
        <h1 id="skills-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Skills</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          Backend technologies organized by practical experience and engineering context. 
          Focusing on relational schemas, RESTful endpoint architectures, and application security configurations.
        </p>
      </header>

      {/* Skills Grid */}
      <section aria-labelledby="skills-grid-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        <h2 id="skills-grid-title" className="sr-only">Technical Skill Groups</h2>
        
        <div className="expertise-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.category} style={{ minHeight: '260px' }}>
              <p className="meta-label" style={{ color: 'var(--accent)' }}>{group.category}</p>
              <p style={{ margin: '10px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {group.description}
              </p>
              <ul className="tag-list" aria-label={`${group.category} skills`} style={{ margin: 0, padding: 0 }}>
                {group.skills.map((skill) => (
                  <li key={skill} style={{ fontSize: '0.74rem', padding: '5px 10px' }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Design System Consistency Note */}
      <footer style={{ marginTop: '64px', padding: '18px 20px', borderLeft: '2px solid var(--accent-2)', background: 'var(--surface)', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
        Note: The skills represented are limited to active technologies in development environments and production-style projects. No arbitrary ratings or progress indicators are applied.
      </footer>
    </div>
  );
}
