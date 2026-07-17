import { useEffect, useState } from 'react';

export function OpeningLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('portfolio-loader-seen');
    if (hasSeen === 'true') return;

    const hasMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    const mediaQuery = hasMatchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    const isReduced = mediaQuery?.matches;

    setIsVisible(true);
    document.body.style.overflow = 'hidden';

    const duration = isReduced ? 250 : 1100;
    const fadeOutDelay = isReduced ? 100 : 200;

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      const unmountTimer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        sessionStorage.setItem('portfolio-loader-seen', 'true');
      }, fadeOutDelay);
      return () => clearTimeout(unmountTimer);
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`opening-loader-overlay ${isFadingOut ? 'fade-out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading engineering workspace"
    >
      <div className="flex flex-col items-center text-center w-full max-w-[320px] animation-[loader-fade-in_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
           style={{ animation: 'loader-fade-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        {/* Logo chip */}
        <div className="font-mono text-2xl font-bold text-[var(--accent)] border border-[var(--border)] px-4 py-2 rounded bg-[var(--surface)] mb-5 tracking-[-0.05em]">
          YT
        </div>
        <h1 className="text-[1.8rem] font-extrabold text-[var(--text)] m-0 mb-1.5 tracking-[-0.02em]">
          Yunesh Timsina
        </h1>
        <p className="text-[0.76rem] text-[var(--muted)] tracking-[0.15em] mb-8">
          BACKEND ENGINEER
        </p>
        <div className="font-mono text-[0.74rem] text-[var(--text-secondary)] mb-3">
          <span>Initializing portfolio workspace...</span>
        </div>
        {/* Progress bar */}
        <div className="w-full h-0.5 bg-[var(--border)] rounded-[1px] overflow-hidden relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-0"
            style={{ background: 'linear-gradient(90deg,var(--accent) 0%,#6da2ff 100%)', animation: 'loader-progress 1.05s cubic-bezier(0.16,1,0.3,1) forwards' }}
          />
        </div>
      </div>
    </div>
  );
}
