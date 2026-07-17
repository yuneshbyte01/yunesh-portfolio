import { useEffect, useRef, useState } from 'react';

export function useTilt() {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchCheck = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };
    touchCheck();

    const hasMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    const mediaQuery = hasMatchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    if (mediaQuery?.matches || isTouchDevice) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;
      
      const rotateY = ((x / width) - 0.5) * 4;
      const rotateX = (0.5 - (y / height)) * 4;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice]);

  return { elementRef };
}
