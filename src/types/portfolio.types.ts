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
  phone?: string;
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

export interface ProjectSpecs {
  systemType: string;
  role: string;
  targetUsers: string;
  highlight: string;
}

export interface ArchitectureNode {
  id: string;
  tier: 'client' | 'gateway' | 'service' | 'database' | 'realtime' | 'worker';
  title: string;
  tech: string;
  description: string;
  role: string;
}

export interface ArchitectureFlowStep {
  stepNumber: number;
  title: string;
  description: string;
  protocol?: string;
  fromNodeId: string;
  toNodeId: string;
  codeHint?: string;
}

export interface SystemArchitectureDiagram {
  title: string;
  subtitle: string;
  nodes: ArchitectureNode[];
  flowSteps: ArchitectureFlowStep[];
}

export interface ProjectDeepDive {
  overview: string;
  flowTitle?: string;
  flowSteps?: string[];
  systemDiagram?: SystemArchitectureDiagram;
  codeSnippet?: CodeSnippet;
  databaseDesign: string[];
  securityPractices: string[];
  engineeringPillars?: {
    title: string;
    description: string;
  }[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail: string;
  accent?: 'emerald' | 'cyan' | 'amber';
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  thumbnailUrl: string;
  screenshots?: string[];
  specs?: ProjectSpecs;
  coreFeatures?: string[];
  metrics?: ProjectMetric[];
  problemStatement: string;
  architectureHighlights: string[];
  businessImpact: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  demoCredentials?: DemoCredentials;
  deepDive: ProjectDeepDive;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export interface ArchitecturePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  implementedIn?: string;
  accent?: 'emerald' | 'cyan' | 'amber' | 'indigo' | 'purple';
  tools: string[];
  codeSnippet?: CodeSnippet;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: string[];
}

export interface ExperienceMedia {
  thumbnailUrl: string;
  caption: string;
  category?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'work' | 'education' | 'award' | 'leadership' | 'academic' | 'mentor';
  categoryGroup?: string;
  badge?: string;
  highlights: string[];
  technologies: string[];
  media?: ExperienceMedia[];
}
