import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink className="brand" to="/" onClick={() => setIsOpen(false)} aria-label="Yunesh Timsina, home">
          Yunesh Timsina
        </NavLink>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span aria-hidden="true">{isOpen ? 'Close' : 'Menu'}</span>
          <span className="sr-only">{isOpen ? 'Close navigation' : 'Open navigation'}</span>
        </button>
        <nav id="primary-navigation" className={isOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </NavLink>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: '12px' }}>
            <a className="button button-small" href="/Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <a className="icon-link" href="https://github.com/yuneshbyte01" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><Github /></a>
            <a className="icon-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><Linkedin /></a>
            <a className="icon-link" href="mailto:yuneshtimsina@gmail.com" aria-label="Email" data-tooltip="Email"><Mail /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
