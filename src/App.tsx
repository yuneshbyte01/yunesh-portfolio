import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhasePage } from './pages/PhasePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="projects" element={<ProjectsPage />} />
    <Route path="experience" element={<ExperiencePage />} />
    <Route path="skills" element={<PhasePage eyebrow="SKILLS / PHASE 2" title="Skills" description="Backend technologies organized by practical experience and engineering context." />} />
    <Route path="about" element={<PhasePage eyebrow="ABOUT / PHASE 2" title="About" description="Education, engineering values, and the path behind my backend work." />} />
    <Route path="contact" element={<PhasePage eyebrow="CONTACT / PHASE 2" title="Contact" description="Ways to discuss backend engineering roles, project work, and collaboration." />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes></BrowserRouter>;
}
