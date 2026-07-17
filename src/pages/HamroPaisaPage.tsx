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
    <div className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)] relative">
      <Link className="text-link inline-flex items-center gap-2 mb-8" to="/projects">
        <ArrowLeft style={{ width: '16px', height: '16px' }} /> Back to Projects
      </Link>

      {/* Case Study Header */}
      <header className="group relative overflow-hidden border border-[var(--border)] rounded-[var(--radius)] bg-[var(--surface)] p-[clamp(24px,5vw,42px)] mt-6 mb-12 shadow-[0_14px_38px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_50px_rgba(76,141,255,0.12)] hover:border-[var(--accent)]/20 transition-all duration-300">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="flex justify-between items-center mb-3 flex-wrap gap-3">
            <span className="eyebrow" style={{ margin: 0 }}>FINTECH BACKEND</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] text-[var(--success)] font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)]" /> Completed</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', margin: '8px 0 16px', letterSpacing: '-0.02em' }} className="group-hover:text-[var(--accent)] transition-colors duration-200">HamroPaisa</h1>
          <p className="text-[1.2rem] text-[var(--text-secondary)] max-w-[780px] leading-[1.6] mb-6">
            A production-style digital wallet API designed around strict transactional integrity, idempotency, and auditable accounting.
          </p>
          <div className="flex gap-4 items-center">
            <a className="button button-small" href="https://github.com/yuneshbyte01/digital-wallet-api" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Github style={{ width: '16px', height: '16px' }} /> Source <ArrowUpRight style={{ width: '14px', height: '14px' }} />
            </a>
          </div>
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mt-6" aria-label="HamroPaisa technologies">
            {['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'JWT', 'REST API'].map((t) => (
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
          A multi-layered request flow implementing security authentication filters, service validation rules, transactional limits, and relational locks before writing records to PostgreSQL.
        </p>

        <div className="flex flex-col gap-3 max-w-[600px] mt-7">
          {[
            { title: 'Client Application', label: 'Mobile / Web' },
            { title: 'REST Controller', label: 'API Entry' },
            { title: 'Spring Security', label: 'Filter / JWT' },
            { title: 'Wallet Service', label: 'Core Logic' },
            { title: 'JPA Repositories', label: 'Optimistic Lock' },
            { title: 'PostgreSQL', label: 'Ledger DB' },
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
            { title: 'Double-Entry Ledger', desc: 'Guarantees financial consistency. Every money transfer logs matching credit and debit entries, ensuring the net change across the ledger equals zero.' },
            { title: 'Idempotent Transfers', desc: 'Enforces safety on network retries. Transfer endpoints require a unique idempotency key header, returning cached responses for identical duplicate payloads.' },
            { title: 'Optimistic Concurrency', desc: 'Uses JPA version checks on wallet balances to reject concurrent, overlapping transactions that would otherwise cause double-spending or dirty reads.' },
            { title: 'Role-Based Access (RBAC)', desc: 'Enforces authorization tiers, protecting administrative endpoints (like account block/unblock) from standard client wallet roles.' },
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
            { q: '1. Managing High-Concurrency Wallet Updates', a: 'During rapid P2P requests, multiple processes may query the same wallet balance, leading to lost updates. Instead of using heavy database pessimistic locks that choke transaction throughput, I applied optimistic locking using `@Version` fields. This rejects outdated writes, throwing specific exceptions that the API catches and translates into client retry requests.' },
            { q: '2. Balancing Audit Logging vs. Transaction Speed', a: 'Logging every ledger activity synchronously increases request latency. To maintain throughput, I decoupled core transactional ledger saving from general audit logs. Ledger records are written synchronously in the same transaction block to maintain database integrity, while visual and debug audit logs are dispatched to application filters to optimize execution paths.' }
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
        <h2 id="code-title" className="meta-label" style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Core Transfer Implementation</h2>
        <div className="mt-7 group">
          <div className="px-4 py-3 bg-[var(--surface-2)] border border-[var(--border)] border-b-0 rounded-t-md font-mono text-[0.78rem] text-[var(--text-secondary)] flex justify-between items-center group-hover:border-[var(--accent)]/30 transition-all duration-300">
            <span>WalletService.java (Factual Transaction Handler)</span>
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
            { title: 'Database', items: 'PostgreSQL (Relational Ledger)' },
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
          <a className="button button-primary" href="https://github.com/yuneshbyte01/digital-wallet-api" target="_blank" rel="noreferrer">
            github.com/yuneshbyte01/digital-wallet-api <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
