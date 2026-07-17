import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { useHeroGradient } from '../../hooks/useHeroGradient';

export function AppLayout() {
  const { containerRef } = useHeroGradient();

  return (
    <>
      <a
        className="fixed z-[100] top-3 left-3 px-3.5 py-2.5 bg-[var(--text)] text-[var(--bg)] -translate-y-40 transition-transform duration-200 focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[var(--bg)]">
        {/* Background Gradient Layers */}
        <div className="hero-gradient-wrapper">
          <div className="hero-gradient-layer hero-layer-1" />
          <div className="hero-gradient-layer hero-layer-2" />
          <div className="hero-gradient-layer hero-layer-3" />
        </div>
        
        <main id="main-content" className="relative z-10">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
