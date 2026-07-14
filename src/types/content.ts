export interface NavigationItem { label: string; path: string }

export interface SocialLink { label: string; href: string }

export interface Project {
  slug: string;
  name: string;
  type: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  repository: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SkillGroup { title: string; skills: string[]; featured?: boolean }
