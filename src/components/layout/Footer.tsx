import { socials } from '../../data/socials';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Footer() {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'github':
        return <Github />;
      case 'linkedin':
        return <Linkedin />;
      case 'email':
        return <Mail />;
      default:
        return <FileText />;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><strong>Yunesh Timsina</strong><span>Backend Engineer</span></div>
        <div className="footer-links" aria-label="Social links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="icon-link"
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={social.label}
              data-tooltip={social.label}
            >
              {getIcon(social.label)}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            className="icon-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Download CV"
            data-tooltip="Download CV"
          >
            <FileText />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Yunesh Timsina. Built with React and TypeScript.</p>
      </div>
    </footer>
  );
}
