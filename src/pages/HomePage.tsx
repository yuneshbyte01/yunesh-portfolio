import { useEffect } from 'react';
import { ContactCta } from '../components/home/ContactCta';
import { ExperiencePreview } from '../components/home/ExperiencePreview';
import { Expertise } from '../components/home/Expertise';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Hero } from '../components/home/Hero';
import { Highlights } from '../components/home/Highlights';

export function HomePage() {
  useEffect(() => {
    document.title = 'Yunesh Timsina | Backend Engineer';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Portfolio of Yunesh Timsina, a Backend Engineer specializing in Java, Spring Boot, Spring Security, PostgreSQL, REST APIs, and scalable backend systems.'
      );
    }
  }, []);

  return <><Hero /><Highlights /><FeaturedProjects /><ExperiencePreview /><Expertise /><ContactCta /></>;
}
