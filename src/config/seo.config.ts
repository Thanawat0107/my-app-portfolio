import { SeoConfig } from '@/types/portfolio.types';
import { siteConfig } from './site.config';

export const seoConfig: SeoConfig = {
  siteTitle: `${siteConfig.fullName} | ${siteConfig.role}`,
  siteDescription: siteConfig.tagline,
  keywords: [
    'Backend Developer',
    'Full-Stack Developer',
    'C#',
    'ASP.NET Core',
    'React',
    'Next.js',
    'TypeScript',
    'SQL Server',
    'Entity Framework Core',
    'Docker',
    'IIS',
    'Thailand',
  ],
};
