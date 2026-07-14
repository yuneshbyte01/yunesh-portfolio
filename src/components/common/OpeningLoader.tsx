import { useEffect, useState } from 'react';

export function OpeningLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('portfolio-loader-seen');
    if (hasSeen === 'true') {
      return;
    }

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

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`opening-loader-overlay ${isFadingOut ? 'fade-out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading engineering workspace"
    >
      <div className="loader-content">
        <div className="loader-logo">YT</div>
        <h1 className="loader-name">Yunesh Timsina</h1>
        <p className="loader-label eyebrow">BACKEND ENGINEER</p>
        
        <div className="loader-status">
          <span>Initializing portfolio workspace...</span>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}
