import { ExperienceItem } from '@/types/portfolio.types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-fullstack-dev',
    period: '2025 - Present',
    role: 'Full-Stack Software Developer (Project-Based)',
    organization: 'Client & Academic Production Systems',
    type: 'work',
    highlights: [
      'Designed, developed, and deployed a full-stack Restaurant Management & POS Web Application using ASP.NET Core, React, TypeScript, and SQL Server.',
      'Managed the complete software engineering lifecycle from requirement analysis and ER-Diagram modeling to Windows VPS (IIS) production launch.',
      'Authored a peer-reviewed academic journal manuscript presenting the system architecture and operational efficiency results.'
    ],
    technologies: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Redux Toolkit', 'SQL Server', 'IIS']
  },
  {
    id: 'exp-computer-science',
    period: '2022 - 2026',
    role: 'B.Sc. in Computer Science',
    organization: 'Kanchanaburi Rajabhat University',
    type: 'education',
    highlights: [
      'Core focus on Software Engineering, Relational Database Management Systems, Object-Oriented Programming, and System Analysis.',
      'Completed senior graduation research project and prepared research article for academic journal publication.'
    ],
    technologies: ['Computer Science', 'Software Engineering', 'Database Systems', 'OOP']
  }
];
