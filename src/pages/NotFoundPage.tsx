import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | Yunesh Timsina';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'The page you requested does not exist in this portfolio.');
    }
  }, []);

  return (
    <section className="container min-h-[calc(100vh-300px)] py-[clamp(100px,14vw,180px)]">
      <p className="eyebrow">ERROR / 404</p>
      <h1>Page not found.</h1>
      <p>The route you requested does not exist in this portfolio.</p>
      <Link className="button button-primary" to="/">Return home</Link>
    </section>
  );
}
