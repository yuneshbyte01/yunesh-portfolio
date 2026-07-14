import { useScrollReveal } from '../../hooks/useScrollReveal';

const highlights = ['Java & Spring Boot', 'Secure REST APIs', 'JWT & Role-Based Access', 'PostgreSQL & MySQL', 'Dockerized Applications', 'Layered Architecture'];

export function Highlights() {
  const { elementRef } = useScrollReveal();

  return (
    <section ref={elementRef} id="highlights" className="highlight-strip" aria-labelledby="highlights-title">
      <div className="container">
        <p className="eyebrow" id="highlights-title">CORE / 01</p>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
