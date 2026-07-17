import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hasMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    const mediaQuery = hasMatchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    const isReduced = mediaQuery?.matches;

    if (isReduced || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      if (elementRef.current) {
        elementRef.current.classList.add('revealed');
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const element = elementRef.current;
    if (element) {
      element.classList.add('reveal-item');
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return { elementRef };
}
