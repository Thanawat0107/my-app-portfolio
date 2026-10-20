import { ProjectsSectionTranslations } from '../types';
import { projectsData } from '@/data/projects.data';

export const projectsEn: ProjectsSectionTranslations = {
  badge: 'Engineering Case Studies',
  title: 'Featured Projects & Case Studies',
  subtitle:
    'Real-world production systems demonstrating business problem analysis, architectural decisions, and measurable outcomes.',
  viewAllBtn: 'View All Projects',
  catalogBadge: 'Portfolio Catalog',
  catalogTitle: 'All Engineering Projects & Case Studies',
  catalogSubtitle:
    'Complete breakdown of business problem statements, architectural decisions, and production metrics.',
  problemLabel: 'The Business Problem & Challenges',
  architectureLabel: 'System Architecture & Implementation',
  outcomeLabel: 'Key Outcome & Business Impact',
  metricsLabel: 'Key Engineering & Performance Metrics',
  credentialsLabel: 'Live Demo Credentials',
  specsLabels: {
    systemType: 'System Type',
    role: 'Role',
    targetUsers: 'Target Users',
    highlight: 'Key Highlights',
  },
  deepDiveLabels: {
    overviewTitle: 'System Overview & Business Context',
    architectureTitle: 'Core Architectural Decisions',
    databaseTitle: 'Database Schema & Data Integrity',
    securityTitle: 'Security & Deployment Standards',
    envStatus: 'Environment Status:',
    envReady: 'Production Ready',
    sourceCode: 'Source Code:',
    quickLinks: 'Quick Links',
  },
  items: projectsData,
};
