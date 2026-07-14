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
    <div className="container page-shell">
      <Link className="text-link" to="/projects" style={{ marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back to Projects
      </Link>

      {/* Case Study Header */}
      <header className="case-study-header engineering-grid-bg">
        <div>
          <div className="header-meta">
            <span className="eyebrow" style={{ margin: 0 }}>REUSABLE FOUNDATION</span>
            <span className="header-status"><span className="status-dot-small" /> Completed</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', margin: '8px 0 16px', letterSpacing: '-0.02em' }}>Spring Auth Template</h1>
          <p className="header-summary">
            A secure, modular authentication and authorization template designed to accelerate backend microservice development.
          </p>
          <div className="header-actions">
            <a className="button button-small" href="https://github.com/yuneshbyte01/spring-auth-template" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Github style={{ width: '16px', height: '16px' }} /> Source <ArrowUpRight style={{ width: '14px', height: '14px' }} />
            </a>
          </div>
          <ul className="tag-list" aria-label="Spring Auth Template technologies" style={{ marginTop: '24px' }}>
            {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate / JPA', 'Maven'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </header>

      {/* Overview Section */}
      <section aria-labelledby="overview-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="overview-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Project Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }}>
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text)' }}>
              The Spring Auth Template is a pre-configured backend security base. 
              Designed as a starting point for microservice components, it implements user registration, credential verification, 
              JWT issuance, refresh token rotation, and role assignment.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '16px' }}>
              <strong>Problem Solved:</strong> Eliminates duplicate security setups for different backend services, 
              providing a pre-audited structure that prevents common authentication vulnerabilities.
            </p>
          </div>
          <div>
            <div className="project-placeholder-visual">
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
          Stateless filtration mapping of inbound request authorization contexts and database verification loops.
        </p>

        <div className="architecture-flow">
          <div className="architecture-node">
            <div className="architecture-box">
              HTTP Request <span>Auth Header</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              JWT Filter <span>Signature Check</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              UserDetails Loader <span>DB Authorities</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              Security Context <span>State Inject</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              REST Controller <span>Role Gate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section aria-labelledby="features-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="features-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>Core Backend Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Stateless JWT Authentication</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Enforces lightweight verification. Cryptographically signs short-lived access tokens to authenticate requests without performing database lookups on every route.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Refresh Token Rotation</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Extends session lifetimes securely. Allows clients to query new short-lived access tokens using unique, database-tracked refresh tokens that rotate on usage.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Granular Role-Based Access</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Protects critical operations. Secures controller endpoints at the method level using pre-authorization annotations based on database role tables.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Reusable Security Configurations</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Decouples utility modules. Codebase organizes exception handlers, JWT parsers, and password encoder algorithms for clean modular reuse.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section aria-labelledby="challenges-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="challenges-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Technical Challenges</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '820px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>1. Secure Session Revocation</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Purely stateless JWT authentication makes it hard to log out a compromised token before it expires. 
              I solved this by tracking refresh tokens in a MySQL database. When a user requests log out, the refresh token is deleted immediately, 
              and the corresponding access token cannot be renewed, neutralizing the session.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>2. Intercepting Authentication Exceptions Cleanly</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Spring Security filter chain exceptions bypass standard MVC `@ControllerAdvice` exception handlers because they occur before request reaches the controller. 
              I implemented a custom `AuthenticationEntryPoint` and `AccessDeniedHandler` to catch authentication and authorization failures, returning formatted JSON errors with correct HTTP status codes directly to the client.
            </p>
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section aria-labelledby="code-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="code-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Token Generation Implementation</h2>
        <div className="code-snippet-container">
          <div className="code-snippet-title">JwtTokenUtil.java (Access Token Creation Code)</div>
          <pre><code>{codeSnippet}</code></pre>
        </div>
      </section>

      {/* Technology Stack Grouped */}
      <section aria-labelledby="stack-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="stack-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>Detailed Technology Stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '24px' }}>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Languages</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Java (JDK 17), SQL</p>
          </div>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Frameworks</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Spring Boot, Spring Security, Spring Data JPA, Hibernate</p>
          </div>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Database</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>MySQL (Relational Schema)</p>
          </div>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Tools & Testing</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Maven, JWT Library (io.jsonwebtoken), BCrypt, JUnit 5</p>
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <footer style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', paddingBottom: '32px', textAlign: 'center' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px' }}>
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
