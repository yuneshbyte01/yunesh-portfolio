import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowLeft, ArrowUpRight } from 'lucide-react';

export function SpringAuthTemplatePage() {
  useEffect(() => {
    document.title = 'Spring Auth Template Case Study | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Detailed case study of the Spring Auth Template, a reusable Spring Boot security foundation supporting JWT, refresh tokens, and role-based access control.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const codeSnippet = `public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    
    // Extract authorities/roles and map them into the claims payload
    List<String> roles = userDetails.getAuthorities().stream()
        .map(GrantedAuthority::getAuthority)
        .collect(Collectors.toList());
    claims.put("roles", roles);

    return Jwts.builder()
        .setClaims(claims)
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        // Set short lifespan expiration for access tokens (15 minutes)
        .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY_MS))
        .signWith(SignatureAlgorithm.HS512, secretKey)
        .compact();
}`;

  return (
    <div className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)] relative">
      <Link className="text-link inline-flex items-center gap-2 mb-8" to="/projects">
        <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back to Projects
      </Link>

      {/* Case Study Header */}
      <header className="group relative overflow-hidden border border-[var(--border)] rounded-[var(--radius)] bg-[var(--surface)] p-[clamp(24px,5vw,42px)] mt-6 mb-12 shadow-[0_14px_38px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_50px_rgba(76,141,255,0.12)] hover:border-[var(--accent)]/20 transition-all duration-300">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="flex justify-between items-center mb-3 flex-wrap gap-3">
            <span className="eyebrow" style={{ margin: 0 }}>REUSABLE FOUNDATION</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] text-[var(--success)] font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)]" /> Completed</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', margin: '8px 0 16px', letterSpacing: '-0.02em' }} className="group-hover:text-[var(--accent)] transition-colors duration-200">Spring Auth Template</h1>
          <p className="text-[1.2rem] text-[var(--text-secondary)] max-w-[780px] leading-[1.6] mb-6">
            A secure, modular authentication and authorization template designed to accelerate backend microservice development.
          </p>
          <div className="flex gap-4 items-center">
            <a className="button button-small" href="https://github.com/yuneshbyte01/spring-auth-template" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Github style={{ width: '16px', height: '16px' }} /> Source <ArrowUpRight style={{ width: '14px', height: '14px' }} />
            </a>
          </div>
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mt-6" aria-label="Spring Auth Template technologies">
            {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate / JPA', 'Maven'].map((t) => (
              <li key={t} className="px-3 py-1.5 border border-[var(--border)] rounded bg-[var(--bg)] text-[var(--text-secondary)] font-mono text-[0.76rem] transition-colors duration-200 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--text)]">{t}</li>
            ))}
          </ul>
        </div>
      </header>

      {/* Overview Section */}
      <section aria-labelledby="overview-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="overview-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Project Overview</h2>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text)' }}>
              Spring Auth Template is a pre-configured security baseline built on Spring Security and JWT.
              It eliminates the overhead of rewriting authentication filters, user details services, stateless token encoders,
              refresh token rotation engines, and endpoint rules on every new microservice project.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '16px' }}>
              <strong>Problem Solved:</strong> Standardizes security patterns across backend services.
              It implements stateless token access alongside database-backed, rotating refresh tokens to mitigate session hijacking risks.
            </p>
          </div>
          <div>
            <div className="border border-dashed border-[var(--border)] rounded-[var(--radius)] p-[42px_24px] bg-[rgba(22,27,34,0.4)] text-center group hover:border-[var(--accent)]/35 transition-colors duration-300">
              <p className="eyebrow" style={{ color: 'var(--muted)', marginBottom: '8px' }}>ARCHITECTURAL VISUAL</p>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Production screenshots and API schema visualizations will be integrated after the active pipeline deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section aria-labelledby="architecture-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="architecture-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>System Architecture</h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          A multi-layered request flow implementing security authentication filters, service validation rules, transactional limits, and relational locks before writing records to MySQL.
        </p>

        <div className="flex flex-col gap-3 max-w-[600px] mt-7">
          {[
            { title: 'Client Application', label: 'API Call with JWT' },
            { title: 'JWT Filter', label: 'Token Decoding' },
            { title: 'Authentication Manager', label: 'User Details Check' },
            { title: 'Security Context Holder', label: 'Authorization set' },
            { title: 'Access Decision Manager', label: 'RBAC Validation' },
            { title: 'Secured Resource', label: 'Endpoint Controller' },
          ].map((node, index) => (
            <div key={node.title} className="flex flex-col items-center group w-full">
              <div className="w-full px-5 py-3.5 bg-[var(--surface-2)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] rounded-md text-[var(--text)] font-mono text-[0.8rem] flex justify-between items-center shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-[rgba(28,33,40,0.85)] hover:border-[var(--accent)]/40 hover:shadow-[0_4px_12px_rgba(76,141,255,0.08)]">
                <span className="font-semibold group-hover:text-[var(--accent)] transition-colors duration-200">{node.title}</span>
                <span className="text-[var(--muted)] text-[0.74rem]">{node.label}</span>
              </div>
              {index < 5 && <div className="text-[var(--muted)] text-[1.1rem] py-1 text-center font-bold">↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section aria-labelledby="features-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="features-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>Core Backend Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          {[
            { title: 'Stateless JWT Session', desc: 'Validates cryptographic signatures on incoming request authorization headers without executing database session lookups.' },
            { title: 'Refresh Token Rotation', desc: 'Revokes used refresh tokens and rotates them on refresh exchanges to safeguard API clients against reuse exploits.' },
            { title: 'Role-Based Access (RBAC)', desc: 'Enforces custom security rules on routes using Spring annotations, securing endpoints dynamically based on user roles.' },
            { title: 'SQL Password Hashing', desc: 'Saves user passwords securely using BCrypt password encoding, applying configurable computational work factors.' },
          ].map((feat) => (
            <article key={feat.title} className="group relative overflow-hidden p-5 border border-[var(--border)] rounded-md bg-[rgba(22,27,34,0.4)] transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)] hover:bg-[rgba(28,33,40,0.5)]">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }} className="group-hover:text-[var(--accent)] transition-colors duration-200">{feat.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{feat.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Challenges */}
      <section aria-labelledby="challenges-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="challenges-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Technical Challenges</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '820px' }}>
          {[
            { q: '1. Hardening Refresh Token Architectures Against Leaks', a: 'Stateless access tokens have short lifespans (15 mins) to limit compromise windows, but refresh tokens live longer. If a refresh token leaks, attackers gain long-term access. To stop this, I built refresh token rotation (RTR) to revoke the whole token family immediately if any rotated token is reused.' },
            { q: '2. Enforcing Dynamic Endpoint Authorization Tiers', a: 'Hardcoded security rules block flexible authorization updates. To resolve this, I configured Spring Security filter rules to check DB-backed role authority lists, letting managers adjust user access permissions dynamically without code modifications.' }
          ].map((item) => (
            <div key={item.q} className="group border-l-2 border-[var(--accent)]/30 pl-5 hover:border-[var(--accent)] transition-colors duration-300">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }} className="group-hover:text-[var(--accent)] transition-colors duration-200">{item.q}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Snippet */}
      <section aria-labelledby="code-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="code-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Token Generation Implementation</h2>
        <div className="mt-7 group">
          <div className="px-4 py-3 bg-[var(--surface-2)] border border-[var(--border)] border-b-0 rounded-t-md font-mono text-[0.78rem] text-[var(--text-secondary)] flex justify-between items-center group-hover:border-[var(--accent)]/30 transition-all duration-300">
            <span>JwtTokenUtil.java (Access Token Creation Code)</span>
            <span className="text-[var(--accent)] text-[0.72rem] uppercase font-bold tracking-[0.05em]">Spring / Java</span>
          </div>
          <pre className="!m-0 p-5 bg-[#090d13] border border-[var(--border)] rounded-b-md overflow-x-auto font-mono text-[0.82rem] leading-[1.6] group-hover:border-[var(--accent)]/30 transition-all duration-300 shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)]">
            <code className="text-[#c9d1d9]">{codeSnippet}</code>
          </pre>
        </div>
      </section>

      {/* Technology Stack Grouped */}
      <section aria-labelledby="stack-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="stack-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>Detailed Technology Stack</h2>
        <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {[
            { title: 'Languages', items: 'Java (JDK 17), SQL' },
            { title: 'Frameworks', items: 'Spring Boot, Spring Security, Spring Data JPA, Hibernate' },
            { title: 'Database', items: 'MySQL (Auth Storage)' },
            { title: 'Tools & Testing', items: 'Docker, Maven, JUnit 5, Mockito, Postman' }
          ].map((col) => (
            <div key={col.title} className="group pl-4 border-l border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200">
              <h4 className="meta-label text-[0.72rem] tracking-[0.05em] uppercase" style={{ color: 'var(--accent)', marginBottom: '8px' }}>{col.title}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: 0 }}>{col.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub CTA */}
      <footer style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', paddingBottom: '32px', textAlign: 'center' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '38px' }} className="group relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />
          <p className="eyebrow">VERIFIED REPOSITORY</p>
          <h3 style={{ fontSize: '1.6rem', margin: '8px 0 16px' }}>Review the Full Codebase</h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Inspect structural repository elements, configuration filters, and validation tests on GitHub.
          </p>
          <a className="button button-primary" href="https://github.com/yuneshbyte01/spring-auth-template" target="_blank" rel="noreferrer">
            github.com/yuneshbyte01/spring-auth-template <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
