import { ProjectItem, ArchitecturePillar, SkillCategory, ExperienceItem, NavItem } from '@/types/portfolio.types';

export type Language = 'th' | 'en';

export interface CommonTranslations {
  productionReady: string;
  sourceCode: string;
  liveDemo: string;
  architectureDeepDive: string;
  downloadResume: string;
  exploreCaseStudies: string;
  viewAllProjects: string;
  backToAllProjects: string;
  openLiveDemo: string;
  viewGitHubRepo: string;
  quickLinks: string;
  envStatus: string;
  envStatusValue: string;
  sourceCodeLabel: string;
  rightsReserved: string;
  footerTagline: string;
}

export interface NavTranslations {
  items: NavItem[];
}

export interface HeroTranslations {
  availability: string;
  greeting: string;
  fullName: string;
  role: string;
  location: string;
  tagline: string;
  terminalTitle: string;
  mindset: string;
  framework: string;
  coreStackLabel: string;
}

export interface ProjectDeepDiveLabels {
  overviewTitle: string;
  architectureTitle: string;
  databaseTitle: string;
  securityTitle: string;
  envStatus: string;
  envReady: string;
  sourceCode: string;
  quickLinks: string;
}

export interface ProjectsSectionTranslations {
  badge: string;
  title: string;
  subtitle: string;
  viewAllBtn: string;
  catalogBadge: string;
  catalogTitle: string;
  catalogSubtitle: string;
  problemLabel: string;
  architectureLabel: string;
  outcomeLabel: string;
  metricsLabel?: string;
  credentialsLabel: string;
  specsLabels?: {
    systemType: string;
    role: string;
    targetUsers: string;
    highlight: string;
  };
  deepDiveLabels: ProjectDeepDiveLabels;
  items: ProjectItem[];
}

export interface ArchitectureSectionTranslations {
  badge: string;
  title: string;
  subtitle: string;
  viewCodeLabel?: string;
  hideCodeLabel?: string;
  items: ArchitecturePillar[];
}

export interface SkillsSectionTranslations {
  badge: string;
  title: string;
  subtitle: string;
  items: SkillCategory[];
}

export interface ExperienceSectionTranslations {
  badge: string;
  title: string;
  subtitle: string;
  evidenceLabel?: string;
  items: ExperienceItem[];
}

export interface ContactSectionTranslations {
  badge: string;
  title: string;
  description: string;
  copyEmail: string;
  copied: string;
  sendEmailDirectly: string;
  resumePdf: string;
  githubProfile: string;
  linkedinProfile: string;
}

export interface TranslationDictionary {
  common: CommonTranslations;
  nav: NavTranslations;
  hero: HeroTranslations;
  projects: ProjectsSectionTranslations;
  architecture: ArchitectureSectionTranslations;
  skills: SkillsSectionTranslations;
  experience: ExperienceSectionTranslations;
  contact: ContactSectionTranslations;
}
