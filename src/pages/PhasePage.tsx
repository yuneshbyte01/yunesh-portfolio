import { Link } from 'react-router-dom';

interface PhasePageProps { eyebrow: string; title: string; description: string }

export function PhasePage({ eyebrow, title, description }: PhasePageProps) {
  return <section className="page-shell container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p><p className="phase-note">Detailed {title.toLowerCase()} content will be added in Portfolio v2 Phase 2.</p><Link className="text-link" to="/">Return home <span aria-hidden="true">→</span></Link></section>;
}
