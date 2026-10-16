import { SiteConfig } from '@/types/portfolio.types';

export const siteConfig: SiteConfig = {
  fullName: 'Thanawat Butseree',
  brandLogo: '<Thanawat.B />',
  role: 'Full-Stack Software Developer',
  tagline: 'Building production-ready web applications with Clean Architecture, scalable backend APIs, and responsive user interfaces.',
  summary: 'Specializing in C# ASP.NET Core, Go, React, TypeScript, and Microsoft SQL Server. Focused on relational data integrity, maintainable code structure, and real-world deployment.',
  location: 'Kanchanaburi / Bangkok, Thailand',
  email: 'thanawat.dev@example.com',
  // นำรูปโปรไฟล์ของคุณมาวางที่ public/images/profile.jpg แล้วแก้เป็น '/images/profile.jpg'
  avatarUrl: '/images/profilez.jpeg',
  availabilityText: 'Open for Full-Stack / Backend Developer Opportunities',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  coreStack: [
    'C#',
    'ASP.NET Core',
    'React',
    'TypeScript',
    'Redux Toolkit',
    'SQL Server',
    'Go',
    'Docker',
  ],
};
