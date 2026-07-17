import { useEffect, useRef, useState } from 'react';

export function useHeroGradient() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });
  const animationFrameId = useRef<number | null>(null);
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
    const isReduced = mediaQuery?.matches;

    const container = containerRef.current;
    if (!container) return;

    const primaryRest = { x: 0.42, y: 0.28 };
    const secondaryRest = { x: 0.72, y: 0.42 };

    container.style.setProperty('--gradient-x', `${primaryRest.x * 100}%`);
    container.style.setProperty('--gradient-y', `${primaryRest.y * 100}%`);
    container.style.setProperty('--gradient-x-secondary', `${secondaryRest.x * 100}%`);
    container.style.setProperty('--gradient-y-secondary', `${secondaryRest.y * 100}%`);

    if (isReduced || isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      targetRef.current = { x, y };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0.5, y: 0.5 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const updateGradient = () => {
      const ease = 0.05;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease;

      const pX = primaryRest.x + (currentRef.current.x - 0.5) * 0.4;
      const pY = primaryRest.y + (currentRef.current.y - 0.5) * 0.3;

      const sX = secondaryRest.x + (currentRef.current.x - 0.5) * 0.4;
      const sY = secondaryRest.y + (currentRef.current.y - 0.5) * 0.4;

      container.style.setProperty('--gradient-x', `${pX * 100}%`);
      container.style.setProperty('--gradient-y', `${pY * 100}%`);
      container.style.setProperty('--gradient-x-secondary', `${sX * 100}%`);
      container.style.setProperty('--gradient-y-secondary', `${sY * 100}%`);

      animationFrameId.current = requestAnimationFrame(updateGradient);
    };

    animationFrameId.current = requestAnimationFrame(updateGradient);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isTouchDevice]);

  return { containerRef };
}
