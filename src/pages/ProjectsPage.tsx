import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ProjectsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const otherProjects = [
    {
      name: 'WanderWise',
      description: 'A travel planning and itinerary generator backend system focused on user route optimization and structured travel plans.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
      repository: 'https://github.com/yuneshbyte01/wanderwise',
    },
    {
      name: 'CSV Insights',
      description: 'A performance-optimized parsing utility and analysis service for large-scale CSV datasets with custom data extraction filters.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
      repository: 'https://github.com/yuneshbyte01/csv-insights',
    },
    {
      name: 'University Placement System',
      description: 'A placement management backend tracking recruitment drives, company registrations, student profiles, and application lifecycles.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      repository: 'https://github.com/yuneshbyte01/university-placement-system',
    },
  ];

  return (
    <div className="container page-shell">
      <header className="projects-header" style={{ marginBottom: '64px' }}>
        <p className="eyebrow">CASE STUDIES</p>
        <h1 id="projects-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '12px 0 20px', letterSpacing: '-0.03em' }}>Projects</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6' }}>
          Backend architectures built around transaction consistency, system security, and real constraints. 
          These case studies outline design decisions, API specifications, and database structures.
        </p>
      </header>

      {/* Featured Projects */}
      <section aria-label="Featured Projects">
        <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid var(--border)', paddingBottom: '14px', marginBottom: '24px' }}>Featured Systems</h2>
        
        {/* HamroPaisa */}
        <article id="hamropaisa" className="featured-project-detail">
          <div>
            <p className="eyebrow" style={{ color: 'var(--accent-2)' }}>FEATURED SYSTEM / 01</p>
            <h3 style={{ fontSize: '2rem', margin: '8px 0 16px' }}>HamroPaisa</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
              A production-style fintech backend supporting wallet management, peer-to-peer transfers, double-entry ledger accounting, secure authentication, and auditable financial transactions.
            </p>

            <h4 className="meta-label" style={{ marginBottom: '8px' }}>Problem Solved</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
              Preventing race conditions, balance double-spending, and untrackable account discrepancies during concurrent peer-to-peer money transfers.
            </p>

            <h4 className="meta-label" style={{ marginBottom: '8px' }}>Solution</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
              Designed a strict double-entry accounting ledger system where funds are never updated in-place without matching debit and credit entries. Leveraged database constraints and locking mechanisms to handle concurrent requests safely.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 className="meta-label" style={{ marginBottom: '10px' }}>Technology Stack</h4>
              <ul className="tag-list" aria-label="HamroPaisa technologies" style={{ marginTop: 0 }}>
                {['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'JWT', 'REST API'].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Core Backend Features</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>P2P transfers & ledger balances</li>
                  <li>Account creation & verification</li>
                  <li>Transaction history indexing</li>
                </ul>
              </div>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Security Features</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Role-Based Access Control (RBAC)</li>
                  <li>Access & Refresh token pattern</li>
                  <li>Global API rate limiting</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Database Highlights</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>PostgreSQL relational design</li>
                  <li>Optimistic locking for balances</li>
                  <li>Indexes on wallet/ledger queries</li>
                </ul>
              </div>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Engineering Highlights</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Double-entry ledger ledgering</li>
                  <li>Idempotent transfers via request keys</li>
                  <li>Detailed audit logs for accounting</li>
                </ul>
              </div>
            </div>

            <a className="button" href="https://github.com/yuneshbyte01/digital-wallet-api" target="_blank" rel="noreferrer">
              GitHub repository <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <h4 className="meta-label">ENGINEERING VISUAL: IDEMPOTENCY & LEDGER</h4>
            <div className="mockup-window">
              <div className="mockup-header">
                <span className="mockup-dot red"></span>
                <span className="mockup-dot yellow"></span>
                <span className="mockup-dot green"></span>
                <span className="mockup-title">shell / wallet-transfer-log</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-comment"># POST request with unique idempotency key</div>
                <div>$ curl -X POST /api/v1/transfers \</div>
                <div>  -H <span className="mockup-string">"X-Idempotency-Key: e8a23b9d-4c32-47ef"</span> \</div>
                <div>  -d <span className="mockup-string">'{`{"source": "W-981", "target": "W-554", "amount": 250.00}`}'</span></div>
                <br />
                <div className="mockup-comment"># Server processes transaction (Transaction ID: TXN-10492)</div>
                <div>[INFO] Validating idempotency key: <span className="mockup-number">e8a23b9d</span>... <span className="mockup-success">NEW</span></div>
                <div>[INFO] Applying optimistic lock on Wallet <span className="mockup-number">W-981</span> (version: 4)</div>
                <div>[INFO] Inserting double-entry ledger records...</div>
                <div className="mockup-code" style={{ paddingLeft: '10px' }}>
                  - Credit Wallet <span className="mockup-success">W-554</span>: <span className="mockup-number">+250.00</span>
                  <br />
                  - Debit Wallet <span className="mockup-number">W-981</span>: <span className="mockup-number">-250.00</span>
                </div>
                <div>[INFO] Wallet balances updated successfully</div>
                <div className="mockup-success">HTTP/1.1 200 OK</div>
                <div>{`{ "status": "COMPLETED", "transactionId": "TXN-10492" }`}</div>
                <br />
                <div className="mockup-comment"># Re-sending same request yields cached response directly</div>
                <div>$ curl -X POST /api/v1/transfers -H <span className="mockup-string">"X-Idempotency-Key: e8a23b9d..."</span></div>
                <div className="mockup-accent">[WARN] Duplicate request detected. Returning cached response.</div>
                <div className="mockup-success">HTTP/1.1 200 OK (CACHED)</div>
              </div>
            </div>
          </div>
        </article>

        {/* Hamro Chalchitraghar */}
        <article id="hamro-chalchitraghar" className="featured-project-detail">
          <div>
            <p className="eyebrow" style={{ color: 'var(--accent-2)' }}>FEATURED SYSTEM / 02</p>
            <h3 style={{ fontSize: '2rem', margin: '8px 0 16px' }}>Hamro Chalchitraghar</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
              A backend platform for movie discovery, show scheduling, seat availability, booking workflows, payment lifecycle management, and ticket delivery.
            </p>

            <h4 className="meta-label" style={{ marginBottom: '8px' }}>Backend Architecture Summary</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
              Implemented with a clean multi-tiered architecture (Controller-Service-Repository) in Spring Boot, isolating user interactions, core booking logic, and persistent storage operations.
            </p>

            <h4 className="meta-label" style={{ marginBottom: '8px' }}>Booking Workflow</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
              The system coordinates showtime validation, temporary seat holds (10-minute timeout), external payment status resolution, final seat confirmation, and ticket issuance.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 className="meta-label" style={{ marginBottom: '10px' }}>Technology Stack</h4>
              <ul className="tag-list" aria-label="Hamro Chalchitraghar technologies" style={{ marginTop: 0 }}>
                {['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT', 'Swagger / OpenAPI', 'Mail Sender'].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Seat Management</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Database-level constraint checks</li>
                  <li>Temporary holding state flags</li>
                  <li>Transactional isolation levels</li>
                </ul>
              </div>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Payment & Communication</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Simulated state-driven payment flow</li>
                  <li>Asynchronous ticket delivery</li>
                  <li>Spring Mail notification engine</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Authentication</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Spring Security integration</li>
                  <li>Stateless JWT verification</li>
                  <li>Protected endpoint hierarchy</li>
                </ul>
              </div>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Testing & Specs</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>JUnit & Mockito coverage</li>
                  <li>Spring Boot slice test suites</li>
                  <li>OpenAPI Swagger specification</li>
                </ul>
              </div>
            </div>

            <a className="button" href="https://github.com/yuneshbyte01/hamro-chalachitraghar-backend" target="_blank" rel="noreferrer">
              GitHub repository <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <h4 className="meta-label">ENGINEERING VISUAL: PAYMENT & SEAT LIFECYCLE</h4>
            
            <div className="mockup-window">
              <div className="mockup-header">
                <span className="mockup-dot red"></span>
                <span className="mockup-dot yellow"></span>
                <span className="mockup-dot green"></span>
                <span className="mockup-title">diagram / seat-lifecycle</span>
              </div>
              <div className="mockup-body">
                <div className="flow-diagram">
                  <div className="flow-step">
                    <div className="flow-node" style={{ fontSize: '0.75rem', padding: '6px 8px' }}>Seat: AVAILABLE</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-node active" style={{ fontSize: '0.75rem', padding: '6px 8px' }}>Seat: LOCKED_TEMP (10m)</div>
                  </div>
                  <div className="flow-arrow" style={{ textAlign: 'left', paddingLeft: '40px', margin: '-4px 0' }}>│ (Payment Triggered)</div>
                  <div className="flow-step">
                    <div className="flow-node active" style={{ fontSize: '0.75rem', padding: '6px 8px' }}>Payment: PENDING</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-node" style={{ fontSize: '0.75rem', padding: '6px 8px' }}>Payment: SUCCESS</div>
                  </div>
                  <div className="flow-arrow" style={{ textAlign: 'left', paddingLeft: '40px', margin: '-4px 0' }}>│ (Async Email Sent)</div>
                  <div className="flow-step">
                    <div className="flow-node" style={{ fontSize: '0.75rem', padding: '6px 8px' }}>Seat: RESERVED</div>
                    <div className="flow-arrow">←</div>
                    <div className="flow-node" style={{ fontSize: '0.75rem', padding: '6px 8px' }}>Booking: CONFIRMED</div>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <div className="meta-label" style={{ fontSize: '0.7rem' }}>Showroom Seat Grid Hold State</div>
                  <div className="seat-grid">
                    <div className="seat reserved">A1</div>
                    <div className="seat reserved">A2</div>
                    <div className="seat locked">A3</div>
                    <div className="seat locked">A4</div>
                    <div className="seat available">A5</div>
                    <div className="seat available">A6</div>
                    <div className="seat available">B1</div>
                    <div className="seat available">B2</div>
                    <div className="seat available">B3</div>
                    <div className="seat available">B4</div>
                    <div className="seat available">B5</div>
                    <div className="seat available">B6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Spring Auth Template */}
        <article id="spring-auth-template" className="featured-project-detail">
          <div>
            <p className="eyebrow" style={{ color: 'var(--accent-2)' }}>FEATURED SYSTEM / 03</p>
            <h3 style={{ fontSize: '2rem', margin: '8px 0 16px' }}>Spring Auth Template</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
              A reusable Spring Boot authentication foundation with JWT access tokens, refresh-token handling, Spring Security configuration, and role-based endpoint authorization.
            </p>

            <h4 className="meta-label" style={{ marginBottom: '8px' }}>Purpose</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
              Accelerating new backend microservice setups by providing a standard, pre-audited, secure template for identity and authorization.
            </p>

            <h4 className="meta-label" style={{ marginBottom: '8px' }}>Authentication Architecture</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
              Utilizes short-lived JSON Web Tokens (JWT) for stateless session verification and database-backed refresh tokens to allow seamless token renewal while retaining the ability to revoke active sessions.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 className="meta-label" style={{ marginBottom: '10px' }}>Technology Stack</h4>
              <ul className="tag-list" aria-label="Spring Auth Template technologies" style={{ marginTop: 0 }}>
                {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate / JPA', 'Maven'].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Spring Security</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Custom Security Filter Chain</li>
                  <li>Token Extraction & context binding</li>
                  <li>Password encoder configurations</li>
                </ul>
              </div>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>JWT & Refresh</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Cryptographic signature checks</li>
                  <li>Refresh token database storage</li>
                  <li>Session revocation endpoints</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Authorization Pattern</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Role-Based Access Control (RBAC)</li>
                  <li>Method-level `@PreAuthorize` annotation</li>
                  <li>Dynamic resource-based authorization</li>
                </ul>
              </div>
              <div>
                <h4 className="meta-label" style={{ marginBottom: '8px', color: 'var(--text)' }}>Architecture Code design</h4>
                <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Modular design ready to clone</li>
                  <li>Structured entities (User, Role, Token)</li>
                  <li>Exception handler wrappers</li>
                </ul>
              </div>
            </div>

            <a className="button" href="https://github.com/yuneshbyte01/spring-auth-template" target="_blank" rel="noreferrer">
              GitHub repository <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <h4 className="meta-label">ENGINEERING VISUAL: SECURITY CONFIG & JWT STRUCTURE</h4>
            
            <div className="mockup-window">
              <div className="mockup-header">
                <span className="mockup-dot red"></span>
                <span className="mockup-dot yellow"></span>
                <span className="mockup-dot green"></span>
                <span className="mockup-title">java / SecurityConfig.java</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-code" style={{ fontSize: '0.78rem' }}>
                  <span className="mockup-keyword">@Bean</span>
                  <br />
                  <span className="mockup-keyword">public</span> SecurityFilterChain <span className="mockup-accent">filterChain</span>(HttpSecurity http) <span className="mockup-keyword">throws</span> Exception {'{'}
                  <div style={{ paddingLeft: '16px' }}>
                    http.csrf(csrf -&gt; csrf.disable())
                    <br />
                    .sessionManagement(s -&gt; s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    <br />
                    .authorizeHttpRequests(auth -&gt; auth
                    <div style={{ paddingLeft: '16px' }}>
                      .requestMatchers(<span className="mockup-string">"/api/v1/auth/**"</span>).permitAll()
                      <br />
                      .requestMatchers(<span className="mockup-string">"/api/v1/admin/**"</span>).hasRole(<span className="mockup-string">"ADMIN"</span>)
                      <br />
                      .anyRequest().authenticated()
                    </div>
                    )
                    <br />
                    .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
                  </div>
                  {'}'}
                </div>
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '16px', paddingTop: '16px' }}>
                  <div className="meta-label" style={{ fontSize: '0.7rem' }}>Decoded JWT Payload (claims)</div>
                  <div className="mockup-code" style={{ background: '#0e141b', padding: '10px', borderRadius: '4px', marginTop: '6px' }}>
                    {'{'}
                    <div style={{ paddingLeft: '16px' }}>
                      <span className="mockup-string">"sub"</span>: <span className="mockup-string">"yunesh"</span>,
                      <br />
                      <span className="mockup-string">"roles"</span>: [<span className="mockup-string">"ROLE_USER"</span>, <span className="mockup-string">"ROLE_ADMIN"</span>],
                      <br />
                      <span className="mockup-string">"iat"</span>: <span className="mockup-number">1783940000</span>,
                      <br />
                      <span className="mockup-string">"exp"</span>: <span className="mockup-number">1783943600</span>
                    </div>
                    {'}'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Other Projects */}
      <section aria-labelledby="other-projects-title" style={{ marginTop: '96px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
        <p className="eyebrow" id="other-projects-title">SECONDARY REPOSITORIES</p>
        <h2 style={{ fontSize: '2.2rem', margin: '8px 0 32px' }}>Other Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {otherProjects.map((p) => (
            <article key={p.name} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--surface)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 12px', fontWeight: '600' }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 18px' }}>{p.description}</p>
              </div>
              <div>
                <ul className="tag-list" aria-label={`${p.name} technologies`} style={{ margin: '0 0 20px', padding: 0 }}>
                  {p.technologies.map((t) => (
                    <li key={t} style={{ fontSize: '0.68rem', padding: '4px 8px' }}>{t}</li>
                  ))}
                </ul>
                <a className="text-link" href={p.repository} target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem' }}>
                  GitHub repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GitHub Explore CTA */}
      <section aria-labelledby="github-cta-title" style={{ marginTop: '96px', borderTop: '1px solid var(--border)', paddingTop: '64px', paddingBottom: '32px' }}>
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--surface)', padding: '38px', textAlign: 'center' }}>
          <p className="eyebrow">EXPLORE MORE WORK</p>
          <h2 id="github-cta-title" style={{ fontSize: '2rem', margin: '8px 0 16px' }}>Explore More Projects</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 28px', lineHeight: '1.6' }}>
            Additional experimental projects, design templates, and university learning sandboxes are available on my GitHub profile.
          </p>
          <a className="button button-primary" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer">
            github.com/yuneshbyte01 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
