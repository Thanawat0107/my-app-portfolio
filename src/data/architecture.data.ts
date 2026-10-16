import { ArchitecturePillar } from '@/types/portfolio.types';

export const architecturePillarsData: ArchitecturePillar[] = [
  {
    id: 'clean-backend',
    title: 'Layered & Clean Backend Design',
    subtitle: 'Maintainable Business Logic',
    description: 'Separating HTTP transport (Controllers), business rules (Services), and data persistence (Repositories) so code remains easy to read, test, and extend.',
    tools: ['ASP.NET Core Web API', 'Dependency Injection', 'DTO Pattern', 'Global Error Handling']
  },
  {
    id: 'database-integrity',
    title: 'Relational Data Modeling & Tuning',
    subtitle: 'ACID & Query Optimization',
    description: 'Designing normalized database schemas in SQL Server with proper Foreign Keys, Indexes, and Transactions to guarantee financial and stock accuracy.',
    tools: ['SQL Server', 'ER-Diagram Modeling', 'Index Tuning', 'ACID Transactions']
  },
  {
    id: 'frontend-architecture',
    title: 'Modular & Type-Safe Frontend',
    subtitle: 'Predictable UI & State',
    description: 'Structuring React and Next.js applications into granular, single-responsibility components backed by strict TypeScript interfaces and Redux Toolkit.',
    tools: ['React / Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS']
  },
  {
    id: 'production-deployment',
    title: 'Production Deployment & Operations',
    subtitle: 'Real-World Server Readiness',
    description: 'Provisioning Windows VPS with IIS Reverse Proxy, configuring SSL/HTTPS certificates, managing environment secrets, and setting up Docker containers.',
    tools: ['Windows Server / IIS', 'Docker', 'JWT / RBAC', 'HTTPS / SSL']
  }
];
