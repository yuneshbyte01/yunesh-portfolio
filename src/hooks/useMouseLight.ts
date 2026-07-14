import { useEffect, useRef, useState } from 'react';

export function useMouseLight() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
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
    if (mediaQuery?.matches || isTouchDevice) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    container.addEventListener('mousemove', handleMouseMove);

    const updateLight = () => {
      const lerpFactor = 0.1;
      targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * lerpFactor;
      targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * lerpFactor;

      container.style.setProperty('--mouse-x', `${targetRef.current.x}px`);
      container.style.setProperty('--mouse-y', `${targetRef.current.y}px`);

      animationFrameId.current = requestAnimationFrame(updateLight);
    };

    animationFrameId.current = requestAnimationFrame(updateLight);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isTouchDevice]);

  return { containerRef, disableHoverEffect: isTouchDevice };
}
