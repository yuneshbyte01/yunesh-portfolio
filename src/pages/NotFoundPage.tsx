import { Link } from 'react-router-dom';

export function NotFoundPage() { return <section className="page-shell container"><p className="eyebrow">ERROR / 404</p><h1>Page not found.</h1><p>The route you requested does not exist in this portfolio.</p><Link className="button button-primary" to="/">Return home</Link></section>; }
