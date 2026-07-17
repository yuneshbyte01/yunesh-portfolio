import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <>
      <a
        className="fixed z-[100] top-3 left-3 px-3.5 py-2.5 bg-[var(--text)] text-[var(--bg)] -translate-y-40 transition-transform duration-200 focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  );
}
