import { SeoConfig } from '@/types/portfolio.types';
import { siteConfig } from './site.config';

export const seoConfig: SeoConfig = {
  siteTitle: `${siteConfig.fullName} | ${siteConfig.role}`,
  siteDescription: siteConfig.tagline,
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'ASP.NET Core',
    'React',
    'TypeScript',
    'SQL Server',
    'Golang',
    'Thailand',
  ],
};
