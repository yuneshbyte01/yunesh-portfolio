import { socials } from '../../data/socials';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><strong>Yunesh Timsina</strong><span>Backend Engineer</span></div>
        <div className="footer-links" aria-label="Social links">
          {socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined}>{social.label}</a>)}
        </div>
        <p>&copy; {new Date().getFullYear()} Yunesh Timsina. Built with React and TypeScript.</p>
      </div>
    </footer>
  );
}
