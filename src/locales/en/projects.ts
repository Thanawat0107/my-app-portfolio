import { ProjectsSectionTranslations } from '../types';
import { projectsData } from '@/data/projects.data';

export const projectsEn: ProjectsSectionTranslations = {
  badge: 'Engineering Case Studies',
  title: 'Featured Production Projects',
  subtitle:
    'Real-world systems built with clean separation of concerns, relational database integrity, and production deployment.',
  viewAllBtn: 'View All Projects',
  catalogBadge: 'Portfolio Catalog',
  catalogTitle: 'All Engineering Projects & Case Studies',
  catalogSubtitle:
    'Complete breakdown of business problem statements, architectural decisions, and production metrics.',
  problemLabel: '1. The Business Problem',
  architectureLabel: '2. System Architecture & Implementation',
  outcomeLabel: '3. Key Outcome & Engineering Impact',
  credentialsLabel: 'Live Demo Credentials',
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
