import { SkillCategory } from '@/types/portfolio.types';

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    categoryName: 'Backend Development',
    description: 'Building scalable APIs, business logic layers, and authentication workflows.',
    skills: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Go (Golang)', 'RESTful API Design', 'JWT / RBAC Auth']
  },
  {
    id: 'frontend',
    categoryName: 'Frontend Development',
    description: 'Creating responsive, modular, and type-safe web interfaces.',
    skills: ['React', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS']
  },
  {
    id: 'database',
    categoryName: 'Database & Data Systems',
    description: 'Relational schema design, query optimization, and transactional integrity.',
    skills: ['Microsoft SQL Server', 'PostgreSQL', 'T-SQL / Stored Procedures', 'Database Indexing', 'ER Modeling']
  },
  {
    id: 'devops-tools',
    categoryName: 'Deployment & Developer Tools',
    description: 'Version control, server configuration, and API testing utilities.',
    skills: ['Git & GitHub', 'Windows VPS & IIS', 'Docker', 'Postman / Swagger', 'Visual Studio / VS Code', 'Linux Basics']
  }
];
