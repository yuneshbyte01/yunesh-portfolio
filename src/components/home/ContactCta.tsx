import { Link } from 'react-router-dom';

export function ContactCta() {
  return <section className="section container"><div className="contact-cta"><p className="eyebrow">CONTACT / 05</p><h2>Let's build reliable backend systems.</h2><p>I'm interested in backend engineering opportunities where I can contribute to secure APIs, database-driven applications, and maintainable software systems.</p><div className="button-row"><Link className="button button-primary" to="/contact">Contact Me</Link><a className="text-link" href="mailto:yuneshtimsina@gmail.com">Email</a><a className="text-link" href="https://www.linkedin.com/in/yunesh-timsina-898775346/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div></section>;
}
