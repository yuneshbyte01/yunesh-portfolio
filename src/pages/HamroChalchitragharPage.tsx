import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function HamroChalchitragharPage() {
  useEffect(() => {
    document.title = 'Hamro Chalchitraghar Case Study | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Detailed case study of Hamro Chalchitraghar, a movie ticket booking backend featuring multi-layered architecture, seat locking, and asynchronous ticket dispatching.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const codeSnippet = `@Transactional
public BookingResponse reserveSeats(BookingRequest request) {
    // 1. Validate showtime availability and scheduling constraints
    Showtime showtime = showtimeRepository.findById(request.getShowtimeId())
        .orElseThrow(() -> new ResourceNotFoundException("Showtime not found"));

    if (showtime.getShowDateTime().isBefore(LocalDateTime.now())) {
        throw new InvalidBookingException("Showtime has already passed");
    }

    // 2. Fetch and locking requested seats (Pessimistic Write lock on rows)
    List<Seat> seats = seatRepository.findAllByIdInWithLock(request.getSeatIds());
    
    for (Seat seat : seats) {
        // Verify no overlapping temporary locks or final reservations exist
        if (seat.getStatus() != SeatStatus.AVAILABLE) {
            throw new SeatAlreadyReservedException("Seat " + seat.getNumber() + " is already locked or sold");
        }
        
        // 3. Mark seat status as locked with a 10-minute hold timestamp
        seat.setStatus(SeatStatus.LOCKED_TEMP);
        seat.setLockedAt(LocalDateTime.now());
        seat.setLockedBy(request.getUserId());
    }
    seatRepository.saveAll(seats);

    // 4. Create and persist booking record in PENDING state
    Booking booking = new Booking(showtime, seats, request.getUserId(), BookingStatus.PENDING);
    booking.setExpirationTime(LocalDateTime.now().plusMinutes(10));
    
    return bookingRepository.save(booking);
}`;

  return (
    <div className="container page-shell">
      <Link className="text-link" to="/projects" style={{ marginBottom: '32px' }}>
        <span aria-hidden="true">←</span> Back to Projects
      </Link>

      {/* Case Study Header */}
      <header style={{ marginTop: '24px', marginBottom: '48px' }}>
        <p className="eyebrow">ENTERTAINMENT BACKEND</p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', margin: '8px 0 16px', letterSpacing: '-0.02em' }}>Hamro Chalchitraghar</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: '1.6', marginBottom: '24px' }}>
          A secure ticket reservation and showtime management API supporting transactional seating grids and asynchronous notification delivery.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.8rem', padding: '6px 12px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
            STATUS: COMPLETED
          </span>
          <a className="button button-small" href="https://github.com/yuneshbyte01/hamro-chalachitraghar-backend" target="_blank" rel="noreferrer">
            GitHub Repository <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ul className="tag-list" aria-label="Hamro Chalchitraghar technologies" style={{ marginTop: 0 }}>
          {['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT', 'Swagger / OpenAPI', 'Mail Sender'].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>

      {/* Overview Section */}
      <section aria-labelledby="overview-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="overview-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Project Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }}>
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text)' }}>
              Hamro Chalchitraghar is a RESTful API backend built to manage movie showtimes, cinema halls, seat holds, and customer ticket sales. 
              Designed for reliability during peak ticket releases, it exposes endpoints for seat lookups, ticket checkouts, and booking cancellations.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '16px' }}>
              <strong>Problem Solved:</strong> Prevents multiple clients from buying the same seat coordinates simultaneously (double booking) 
              and ensures user sessions hold seats temporarily for 10 minutes while processing payments.
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
          Component flow detailing request security clearance, showtime allocation service calls, transactional seat holding, and asynchronous PDF ticket delivery.
        </p>

        <div className="architecture-flow">
          <div className="architecture-node">
            <div className="architecture-box">Client Application (UI)</div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">REST Controller Endpoints</div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box active">Spring Security (JWT filter)</div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">Booking & Showtime Services (Seat validation checks)</div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box active">Seat Repository (Transactional Database Locks)</div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">PostgreSQL Relational DB</div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section aria-labelledby="features-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="features-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>Core Backend Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Seat Locking Lifecycle</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Secures seats for a 10-minute duration. An automated task sweeper runs periodically to release expired holds back to available pools if no checkout occurs.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Booking Workflow</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Orchestrates reservations from `PENDING`, resolving to `SUCCESS` upon verified payment confirmation, or transitioning to `CANCELLED` upon hold expiry.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Email Notification System</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Deploys async JavaMailSender templates upon successful checkouts to dispatch reservation vouchers, minimizing response latency on the main thread.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Swagger / OpenAPI Documentation</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Provides interactive developer UI integration, mapping DTO inputs, authentication requirements, response headers, and status code codes.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section aria-labelledby="challenges-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="challenges-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Technical Challenges</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '820px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>1. Eliminating Double Booking Vulnerabilities</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Under heavy loads, two clients might attempt to book the same seat at the exact same millisecond. 
              Using standard isolation levels would allow both to query the seat as available before either saved. 
              I solved this by applying PostgreSQL row-level locking (`SELECT ... FOR UPDATE`) in the seat repository during hold requests. 
              This forces the second process to wait until the first commits its transaction.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>2. Decoupling Notification Dispatches from API Threads</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Connecting to external SMTP mail servers takes time (sometimes 2-5 seconds), which would block the client's API response. 
              To keep the API fast and responsive, I decorated the email utility using Spring's `@Async` annotation. 
              This delegates the mailing logic to a background thread pool, letting the main checkout response return immediately to the user.
            </p>
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section aria-labelledby="code-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="code-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Seat Hold Implementation</h2>
        <div className="code-snippet-container">
          <div className="code-snippet-title">BookingService.java (Seat Allocation Code)</div>
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
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Spring Boot, Spring Security, Spring Data JPA, Hibernate, Spring Mail</p>
          </div>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Database</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>PostgreSQL (Relational Schema)</p>
          </div>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Tools & Testing</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Docker, Maven, Swagger UI, JUnit 5, Mockito</p>
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
          <a className="button button-primary" href="https://github.com/yuneshbyte01/hamro-chalachitraghar-backend" target="_blank" rel="noreferrer">
            github.com/yuneshbyte01/hamro-chalachitraghar-backend <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
