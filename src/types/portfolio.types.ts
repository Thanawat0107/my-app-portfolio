export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  fullName: string;
  brandLogo: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  avatarUrl: string;
  availabilityText: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
  };
  coreStack: string[];
}

export interface SeoConfig {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
}

export interface DemoCredentials {
  role: string;
  username: string;
  password?: string;
}

export interface ProjectDeepDive {
  overview: string;
  databaseDesign: string[];
  securityPractices: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  thumbnailUrl: string;
  problemStatement: string;
  architectureHighlights: string[];
  businessImpact: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  demoCredentials?: DemoCredentials;
  deepDive: ProjectDeepDive;
}

export interface ArchitecturePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'work' | 'education';
  highlights: string[];
  technologies: string[];
}
