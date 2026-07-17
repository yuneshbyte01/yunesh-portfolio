import { socials } from '../../data/socials';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Footer() {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'github':   return <Github />;
      case 'linkedin': return <Linkedin />;
      case 'email':    return <Mail />;
      default:         return <FileText />;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container grid grid-cols-[1fr_auto] gap-7 items-start">
        <div>
          <strong className="block">Yunesh Timsina</strong>
          <span className="block text-[var(--muted)] text-[0.85rem] mt-1">Backend Engineer</span>
        </div>

        <div className="flex gap-5" aria-label="Social links">
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

        <p className="col-span-full pt-6 border-t border-[var(--glass-border)] text-[var(--muted)] text-[0.85rem] mt-0">
          &copy; {new Date().getFullYear()} Yunesh Timsina. Built with React and TypeScript.
        </p>
      </div>
    </footer>
  );
}
