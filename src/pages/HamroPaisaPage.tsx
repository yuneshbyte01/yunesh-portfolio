import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowLeft, ArrowUpRight } from 'lucide-react';

export function HamroPaisaPage() {
  useEffect(() => {
    document.title = 'HamroPaisa Case Study | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Detailed case study of HamroPaisa, a production-style fintech backend featuring double-entry ledgers, idempotency, and optimistic concurrency locks.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const codeSnippet = `@Transactional
public TransactionResponse transferFunds(TransferRequest request) {
    // 1. Idempotency validation (prevent duplicate execution)
    if (idempotencyService.exists(request.getIdempotencyKey())) {
        return idempotencyService.get(request.getIdempotencyKey());
    }

    // 2. Fetch and apply optimistic locking (@Version version check)
    Wallet source = walletRepository.findByIdWithLock(request.getSourceWalletId())
        .orElseThrow(() -> new WalletNotFoundException("Source wallet not found"));
    Wallet target = walletRepository.findByIdWithLock(request.getTargetWalletId())
        .orElseThrow(() -> new WalletNotFoundException("Target wallet not found"));

    if (source.getBalance().compareTo(request.getAmount()) < 0) {
        throw new InsufficientBalanceException("Insufficient wallet balance");
    }

    // 3. Balance deduction and addition
    source.setBalance(source.getBalance().subtract(request.getAmount()));
    target.setBalance(target.getBalance().add(request.getAmount()));
    walletRepository.save(source);
    walletRepository.save(target);

    // 4. Record double-entry ledger entries for auditing
    LedgerEntry debit = new LedgerEntry(source.getId(), EntryType.DEBIT, request.getAmount());
    LedgerEntry credit = new LedgerEntry(target.getId(), EntryType.CREDIT, request.getAmount());
    ledgerRepository.save(debit);
    ledgerRepository.save(credit);

    TransactionResponse response = new TransactionResponse("COMPLETED", UUID.randomUUID().toString());
    idempotencyService.save(request.getIdempotencyKey(), response);
    return response;
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
            <span className="eyebrow" style={{ margin: 0 }}>FINTECH BACKEND</span>
            <span className="header-status"><span className="status-dot-small" /> Completed</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', margin: '8px 0 16px', letterSpacing: '-0.02em' }}>HamroPaisa</h1>
          <p className="header-summary">
            A production-style digital wallet API designed around strict transactional integrity, idempotency, and auditable accounting.
          </p>
          <div className="header-actions">
            <a className="button button-small" href="https://github.com/yuneshbyte01/digital-wallet-api" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Github style={{ width: '16px', height: '16px' }} /> Source <ArrowUpRight style={{ width: '14px', height: '14px' }} />
            </a>
          </div>
          <ul className="tag-list" aria-label="HamroPaisa technologies" style={{ marginTop: '24px' }}>
            {['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'JWT', 'REST API'].map((t) => (
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
              HamroPaisa is a digital wallet API engineered for secure peer-to-peer (P2P) transfers and financial ledger records. 
              Designed for integration by digital commerce channels and financial microservices, it acts as a reliable ledger accounting engine. 
              It guarantees that wallet balance modifications are atomic, auditable, and trace-protected.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '16px' }}>
              <strong>Problem Solved:</strong> Prevents transaction discrepancies, concurrent double-spending, and balance inflation/deflation. 
              It mitigates database race conditions that occur when multiple concurrent requests attempt to modify the same wallet resource.
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
          A multi-layered request flow implementing security authentication filters, service validation rules, transactional limits, and relational locks before writing records to PostgreSQL.
        </p>

        <div className="architecture-flow">
          <div className="architecture-node">
            <div className="architecture-box">
              Client Application <span>Mobile / Web</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              REST Controller <span>API Entry</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              Spring Security <span>Filter / JWT</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              Wallet Service <span>Core Logic</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              JPA Repositories <span>Optimistic Lock</span>
            </div>
            <div className="architecture-arrow">↓</div>
          </div>
          <div className="architecture-node">
            <div className="architecture-box">
              PostgreSQL <span>Ledger DB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section aria-labelledby="features-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="features-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>Core Backend Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Double-Entry Ledger</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Guarantees financial consistency. Every money transfer logs matching credit and debit entries, ensuring the net change across the ledger equals zero.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Idempotent Transfers</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Enforces safety on network retries. Transfer endpoints require a unique idempotency key header, returning cached responses for identical duplicate payloads.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Optimistic Concurrency</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Uses JPA version checks on wallet balances to reject concurrent, overlapping transactions that would otherwise cause double-spending or dirty reads.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Role-Based Access (RBAC)</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Enforces authorization tiers, protecting administrative endpoints (like account block/unblock) from standard client wallet roles.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section aria-labelledby="challenges-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="challenges-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Technical Challenges</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '820px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>1. Managing High-Concurrency Wallet Updates</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              During rapid P2P requests, multiple processes may query the same wallet balance, leading to lost updates. 
              Instead of using heavy database pessimistic locks that choke transaction throughput, I applied optimistic locking using `@Version` fields. 
              This rejects outdated writes, throwing specific exceptions that the API catches and translates into client retry requests.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>2. Balancing Audit Logging vs. Transaction Speed</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Logging every ledger activity synchronously increases request latency. To maintain throughput, I decoupled core transactional ledger saving from general audit logs. 
              Ledger records are written synchronously in the same transaction block to maintain database integrity, while visual and debug audit logs are dispatched to application filters to optimize execution paths.
            </p>
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section aria-labelledby="code-title" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '48px' }}>
        <h2 id="code-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Core Transfer Implementation</h2>
        <div className="code-snippet-container">
          <div className="code-snippet-title">WalletService.java (Factual Transaction Handler)</div>
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
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>PostgreSQL (Relational Ledger)</p>
          </div>
          <div>
            <h4 className="meta-label" style={{ color: 'var(--accent)' }}>Tools & Testing</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text)' }}>Docker, Maven, JUnit 5, Mockito, Postman</p>
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
          <a className="button button-primary" href="https://github.com/yuneshbyte01/digital-wallet-api" target="_blank" rel="noreferrer">
            github.com/yuneshbyte01/digital-wallet-api <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
