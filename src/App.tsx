import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { HamroPaisaPage } from './pages/HamroPaisaPage';
import { HamroChalchitragharPage } from './pages/HamroChalchitragharPage';
import { SpringAuthTemplatePage } from './pages/SpringAuthTemplatePage';
import { OpeningLoader } from './components/common/OpeningLoader';

export default function App() {
  return (
    <BrowserRouter>
      <OpeningLoader />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/hamropaisa" element={<HamroPaisaPage />} />
          <Route path="projects/hamro-chalchitraghar" element={<HamroChalchitragharPage />} />
          <Route path="projects/spring-auth-template" element={<SpringAuthTemplatePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
