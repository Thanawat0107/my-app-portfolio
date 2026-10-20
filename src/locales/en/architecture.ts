import { ArchitectureSectionTranslations } from '../types';
import { architecturePillarsData } from '@/data/architecture.data';

export const architectureEn: ArchitectureSectionTranslations = {
  badge: 'System Design & Standards',
  title: 'System Architecture & Code Standards',
  subtitle:
    'Architectural foundations emphasizing clean layering, transactional database consistency (ACID), background workers, and production code resilience.',
  viewCodeLabel: 'View Production Code',
  hideCodeLabel: 'Hide Code Snippet',
  items: architecturePillarsData,
};
