/**
 * Script สร้างโปรเจกต์ thanawat-fullstack-portfolio (Next.js App Router)
 * โครงสร้างแบบ Granular Modular แยก Config, Data และ Component ย่อยอย่างชัดเจน
 * วิธีรัน:
 *   1. node setup-clean-portfolio.mjs
 *   2. npm install
 *   3. npm run dev
 */
import fs from 'fs';
import path from 'path';

const files = {
    // ============================================================================
    // 1. ROOT SYSTEM CONFIGURATIONS
    // ============================================================================
    'package.json': JSON.stringify({
        name: 'thanawat-fullstack-portfolio',
        version: '1.0.0',
        private: true,
        scripts: {
            dev: 'next dev',
            build: 'next build',
            start: 'next start',
            lint: 'next lint'
        },
        dependencies: {
            'lucide-react': '^0.454.0',
            'next': '14.2.15',
            'react': '^18.3.1',
            'react-dom': '^18.3.1'
        },
        devDependencies: {
            '@types/node': '^20.17.0',
            '@types/react': '^18.3.12',
            '@types/react-dom': '^18.3.1',
            'autoprefixer': '^10.4.20',
            'postcss': '^8.4.47',
            'tailwindcss': '^3.4.14',
            'typescript': '^5.6.3'
        }
    }, null, 2),

    'tsconfig.json': JSON.stringify({
        compilerOptions: {
            target: 'es5',
            lib: ['dom', 'dom.iterable', 'esnext'],
            allowJs: true,
            skipLibCheck: true,
            strict: true,
            noEmit: true,
            esModuleInterop: true,
            module: 'esnext',
            moduleResolution: 'bundler',
            resolveJsonModule: true,
            isolatedModules: true,
            jsx: 'preserve',
            incremental: true,
            plugins: [{ name: 'next' }],
            paths: {
                '@/*': ['./src/*']
            }
        },
        include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
        exclude: ['node_modules']
    }, null, 2),

    'next.config.mjs': `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
`,

    'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

    'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
};
`,

    // ============================================================================
    // 2. TYPES (src/types/portfolio.types.ts)
    // ============================================================================
    'src/types/portfolio.types.ts': `export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  fullName: string;
  brandLogo: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  avatarUrl: string;
  availabilityText: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
  };
  coreStack: string[];
}

export interface SeoConfig {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
}

export interface DemoCredentials {
  role: string;
  username: string;
  password?: string;
}

export interface ProjectDeepDive {
  overview: string;
  databaseDesign: string[];
  securityPractices: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  thumbnailUrl: string;
  problemStatement: string;
  architectureHighlights: string[];
  businessImpact: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  demoCredentials?: DemoCredentials;
  deepDive: ProjectDeepDive;
}

export interface ArchitecturePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'work' | 'education';
  highlights: string[];
  technologies: string[];
}
`,

    // ============================================================================
    // 3. CONFIG LAYER (src/config/)
    // ============================================================================
    'src/config/site.config.ts': `import { SiteConfig } from '@/types/portfolio.types';

export const siteConfig: SiteConfig = {
  fullName: 'Thanawat Butseree',
  brandLogo: '<Thanawat.B />',
  role: 'Full-Stack Software Developer',
  tagline: 'Building production-ready web applications with Clean Architecture, scalable backend APIs, and responsive user interfaces.',
  summary: 'Specializing in C# ASP.NET Core, Go, React, TypeScript, and Microsoft SQL Server. Focused on relational data integrity, maintainable code structure, and real-world deployment.',
  location: 'Kanchanaburi / Bangkok, Thailand',
  email: 'thanawat.dev@example.com',
  // นำรูปโปรไฟล์ของคุณมาวางที่ public/images/profile.jpg แล้วแก้เป็น '/images/profile.jpg'
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
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
`,

    'src/config/navigation.config.ts': `import { NavItem } from '@/types/portfolio.types';

export const mainNavigation: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Architecture', href: '/#architecture' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];
`,

    'src/config/seo.config.ts': `import { SeoConfig } from '@/types/portfolio.types';
import { siteConfig } from './site.config';

export const seoConfig: SeoConfig = {
  siteTitle: \`\${siteConfig.fullName} | \${siteConfig.role}\`,
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
`,

    // ============================================================================
    // 4. DATA LAYER (src/data/) - แยกไฟล์ตามหมวดหมู่ชัดเจน
    // ============================================================================
    'src/data/projects.data.ts': `import { ProjectItem } from '@/types/portfolio.types';

export const projectsData: ProjectItem[] = [
  {
    slug: 'champ-noodle-pos-system',
    title: 'Restaurant POS & Management Web Application',
    category: 'Production Full-Stack System',
    featured: true,
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    problemStatement: 'Traditional paper-based ordering and manual stock counting caused billing bottlenecks during peak hours and inaccurate daily revenue reconciliation.',
    architectureHighlights: [
      'Architected a decoupled RESTful API backend using ASP.NET Core with clear separation of Controllers, Services, and Repositories.',
      'Built a reactive POS front-end with React, TypeScript, and Redux Toolkit for real-time cart and order state synchronization.',
      'Designed normalized SQL Server database schemas with ACID transactions for simultaneous order settlement and stock deduction.',
      'Configured production deployment on a Windows VPS using IIS, SSL/HTTPS certificates, and automated database backup jobs.'
    ],
    businessImpact: 'Eliminated manual billing calculation errors, shortened table turnover time, and enabled real-time daily sales reporting.',
    techStack: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Redux Toolkit', 'SQL Server', 'IIS / Windows VPS'],
    liveDemoUrl: 'https://demo-pos.example.com',
    githubUrl: 'https://github.com/yourusername/restaurant-pos-management',
    demoCredentials: {
      role: 'Admin / Cashier Demo',
      username: 'demo_admin',
      password: 'Password123!'
    },
    deepDive: {
      overview: 'An end-to-end point-of-sale and restaurant management platform built to handle real-time table orders, kitchen queues, inventory tracking, and financial reporting.',
      databaseDesign: [
        'Normalized relational schema separating Orders, OrderDetails, MenuItems, Categories, InventoryTransactions, and Users.',
        'Applied composite indexes on OrderDate and Status columns to optimize daily and monthly revenue aggregation queries.',
        'Wrapped checkout operations in database transactions to ensure stock levels and receipts remain 100% consistent.'
      ],
      securityPractices: [
        'Implemented JWT-based Authentication and Role-Based Access Control (RBAC) separating Manager and Staff permissions.',
        'Parameterized all queries via Entity Framework Core to prevent SQL Injection vulnerabilities.',
        'Isolated production database connection strings and secrets via server environment variables.'
      ]
    }
  },
  {
    slug: 'go-react-inventory-service',
    title: 'High-Concurrency Inventory & Order API',
    category: 'Backend & API Engineering',
    featured: true,
    thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    problemStatement: 'High-frequency stock updates require low-latency API endpoints with strict concurrency control to prevent race-condition overselling.',
    architectureHighlights: [
      'Engineered lightweight RESTful API endpoints in Go (Golang) integrated with a React + TypeScript administration console.',
      'Implemented middleware for JWT validation, request logging, and structured error responses.',
      'Containerized the application and database environment using Docker Compose for reproducible one-command setup.'
    ],
    businessImpact: 'Delivered sub-30ms average API response time under concurrent load testing with zero inventory race conditions.',
    techStack: ['Go (Golang)', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT Auth', 'Tailwind CSS'],
    liveDemoUrl: 'https://demo-inventory.example.com',
    githubUrl: 'https://github.com/yourusername/go-react-inventory',
    deepDive: {
      overview: 'A performance-oriented backend service written in Go paired with a modern React dashboard to manage real-time stock reservations.',
      databaseDesign: [
        'Used row-level locking and optimistic concurrency control during stock deduction.',
        'Configured database connection pooling to sustain high-throughput concurrent requests.'
      ],
      securityPractices: [
        'Stateless JWT authentication with short-lived access tokens.',
        'Strict CORS configuration and payload schema validation on all incoming POST/PUT endpoints.'
      ]
    }
  }
];
`,

    'src/data/architecture.data.ts': `import { ArchitecturePillar } from '@/types/portfolio.types';

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
`,

    'src/data/skills.data.ts': `import { SkillCategory } from '@/types/portfolio.types';

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
`,

    'src/data/experience.data.ts': `import { ExperienceItem } from '@/types/portfolio.types';

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
`,

    // ============================================================================
    // 5. ATOMIC UI COMPONENTS (src/components/ui/)
    // ============================================================================
    'src/components/ui/Container.tsx': `import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={\`max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 \${className}\`}>
      {children}
    </div>
  );
};
`,

    'src/components/ui/Badge.tsx': `import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'emerald' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-slate-800/90 text-slate-200 border border-slate-700/80',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
    outline: 'bg-transparent text-slate-400 border border-slate-800',
  };

  return (
    <span
      className={\`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium \${variantStyles[variant]} \${className}\`}
    >
      {children}
    </span>
  );
};
`,

    'src/components/ui/Button.tsx': `import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';

  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/10',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700',
    outline: 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-slate-800 hover:border-slate-600',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-sm',
  };

  const classes = \`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};
`,

    'src/components/ui/Card.tsx': `import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={\`bg-slate-900/60 border border-slate-800/90 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-slate-700 \${className}\`}
    >
      {children}
    </div>
  );
};
`,

    'src/components/ui/SectionHeader.tsx': `import React from 'react';

interface SectionHeaderProps {
  badgeText: string;
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {badgeText}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};
`,

    // ============================================================================
    // 6. LAYOUT COMPONENTS (src/components/layout/)
    // ============================================================================
    'src/components/layout/MobileNavMenu.tsx': `import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { mainNavigation } from '@/config/navigation.config';
import { siteConfig } from '@/config/site.config';

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-3 pb-5 space-y-3">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block py-2 text-sm font-medium text-slate-200 hover:text-emerald-400"
        >
          {item.label}
        </Link>
      ))}
      <div className="pt-2 flex items-center gap-4 border-t border-slate-800">
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950"
        >
          <FileText className="w-3.5 h-3.5" />
          Download Resume
        </a>
      </div>
    </div>
  );
};
`,

    'src/components/layout/Navbar.tsx': `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { mainNavigation } from '@/config/navigation.config';
import { Container } from '@/components/ui/Container';
import { MobileNavMenu } from './MobileNavMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <Container className="h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-slate-100 hover:text-emerald-400 transition-colors"
        >
          {siteConfig.brandLogo}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume.pdf
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
`,

    'src/components/layout/Footer.tsx': `import React from 'react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="font-mono">
          {siteConfig.brandLogo} — Modular Next.js (App Router) & TypeScript Portfolio.
        </div>
        <div>
          © {currentYear} {siteConfig.fullName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
`,

    // ============================================================================
    // 7. HERO COMPONENTS (src/components/hero/) - แยกย่อย 5 ไฟล์ชัดเจน
    // ============================================================================
    'src/components/hero/HeroIntroText.tsx': `import React from 'react';
import { siteConfig } from '@/config/site.config';

export const HeroIntroText: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        {siteConfig.availabilityText}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          {siteConfig.fullName}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 pt-1">
          {siteConfig.role}
        </h2>
      </div>

      <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
        {siteConfig.tagline}
      </p>

      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
        {siteConfig.summary}
      </p>
    </div>
  );
};
`,

    'src/components/hero/HeroActionButtons.tsx': `import React from 'react';
import { FileDown, Github, Linkedin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';

export const HeroActionButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <Button href={siteConfig.resumeUrl} variant="primary" external>
        <FileDown className="w-4 h-4" />
        Download Resume (PDF)
      </Button>
      <Button href="/projects" variant="secondary">
        Explore Case Studies
        <ArrowRight className="w-4 h-4" />
      </Button>
      <Button href={siteConfig.socials.github} variant="outline" external>
        <Github className="w-4 h-4" />
        GitHub
      </Button>
      <Button href={siteConfig.socials.linkedin} variant="outline" external>
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>
    </div>
  );
};
`,

    'src/components/hero/HeroCoreStackStrip.tsx': `import React from 'react';
import { siteConfig } from '@/config/site.config';
import { Badge } from '@/components/ui/Badge';

export const HeroCoreStackStrip: React.FC = () => {
  return (
    <div className="pt-4 border-t border-slate-900">
      <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
        Core Engineering Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {siteConfig.coreStack.map((tech) => (
          <Badge key={tech} variant="emerald">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
`,

    'src/components/hero/ProfileTerminalCard.tsx': `import React from 'react';
import { MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const ProfileTerminalCard: React.FC = () => {
  return (
    <div className="relative group max-w-sm mx-auto lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/25 to-cyan-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl">
        {/* Top Terminal Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" />
            developer.profile
          </span>
        </div>

        {/* Portrait Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-800">
          <img
            src={siteConfig.avatarUrl}
            alt={siteConfig.fullName}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/80">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              {siteConfig.location}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-3 pt-2 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1.5 font-medium text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            Production-Ready Mindset
          </span>
          <span className="font-mono text-slate-500">Next.js 14</span>
        </div>
      </div>
    </div>
  );
};
`,

    'src/components/hero/HeroSection.tsx': `import React from 'react';
import { HeroIntroText } from './HeroIntroText';
import { HeroActionButtons } from './HeroActionButtons';
import { HeroCoreStackStrip } from './HeroCoreStackStrip';
import { ProfileTerminalCard } from './ProfileTerminalCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <HeroIntroText />
          <HeroActionButtons />
          <HeroCoreStackStrip />
        </div>
        <div className="lg:col-span-5">
          <ProfileTerminalCard />
        </div>
      </div>
    </section>
  );
};
`,

    // ============================================================================
    // 8. PROJECTS COMPONENTS (src/components/projects/) - แยกย่อย 7 ไฟล์ชัดเจน
    // ============================================================================
    'src/components/projects/ProjectThumbnailBox.tsx': `import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface ProjectThumbnailBoxProps {
  thumbnailUrl: string;
  title: string;
  category: string;
}

export const ProjectThumbnailBox: React.FC<ProjectThumbnailBoxProps> = ({
  thumbnailUrl,
  title,
  category,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3 left-3">
        <Badge variant="emerald">{category}</Badge>
      </div>
    </div>
  );
};
`,

    'src/components/projects/ProjectDemoCredentialsBox.tsx': `import React from 'react';
import { KeyRound } from 'lucide-react';
import { DemoCredentials } from '@/types/portfolio.types';

interface ProjectDemoCredentialsBoxProps {
  credentials?: DemoCredentials;
}

export const ProjectDemoCredentialsBox: React.FC<ProjectDemoCredentialsBoxProps> = ({
  credentials,
}) => {
  if (!credentials) return null;

  return (
    <div className="p-3.5 rounded-lg bg-slate-950/90 border border-slate-800/90 text-xs font-mono space-y-1.5">
      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
        <KeyRound className="w-3.5 h-3.5" />
        Live Demo Credentials ({credentials.role})
      </div>
      <div className="grid grid-cols-2 gap-2 text-slate-300 pt-1">
        <div>
          <span className="text-slate-500">User: </span>
          {credentials.username}
        </div>
        {credentials.password && (
          <div>
            <span className="text-slate-500">Pass: </span>
            {credentials.password}
          </div>
        )}
      </div>
    </div>
  );
};
`,

    'src/components/projects/ProjectOutcomeBanner.tsx': `import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ProjectOutcomeBannerProps {
  impactText: string;
}

export const ProjectOutcomeBanner: React.FC<ProjectOutcomeBannerProps> = ({ impactText }) => {
  return (
    <div className="p-3.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-1">
        <TrendingUp className="w-3.5 h-3.5" />
        3. Key Outcome & Engineering Impact
      </h4>
      <p className="text-sm text-slate-200">{impactText}</p>
    </div>
  );
};
`,

    'src/components/projects/ProjectCaseStudyCard.tsx': `import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, CheckCircle, Layers, BookOpen } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectThumbnailBox } from './ProjectThumbnailBox';
import { ProjectDemoCredentialsBox } from './ProjectDemoCredentialsBox';
import { ProjectOutcomeBanner } from './ProjectOutcomeBanner';

interface ProjectCaseStudyCardProps {
  project: ProjectItem;
}

export const ProjectCaseStudyCard: React.FC<ProjectCaseStudyCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Media, Credentials & Links */}
        <div className="lg:col-span-5 space-y-4">
          <ProjectThumbnailBox
            thumbnailUrl={project.thumbnailUrl}
            title={project.title}
            category={project.category}
          />

          <ProjectDemoCredentialsBox credentials={project.demoCredentials} />

          <div className="flex flex-wrap gap-2.5 pt-1">
            {project.liveDemoUrl && (
              <Button href={project.liveDemoUrl} variant="primary" size="sm" external>
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </Button>
            )}
            <Button href={project.githubUrl} variant="secondary" size="sm" external>
              <Github className="w-3.5 h-3.5" />
              Source Code
            </Button>
            <Button href={\`/projects/\${project.slug}\`} variant="outline" size="sm">
              <BookOpen className="w-3.5 h-3.5" />
              Architecture Deep Dive
            </Button>
          </div>
        </div>

        {/* Right Column: Engineering Case Study Breakdown */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-emerald-400 transition-colors">
              <Link href={\`/projects/\${project.slug}\`}>{project.title}</Link>
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              1. The Business Problem
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              2. System Architecture & Implementation
            </h4>
            <ul className="space-y-2">
              {project.architectureHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ProjectOutcomeBanner impactText={project.businessImpact} />
        </div>
      </div>
    </Card>
  );
};
`,

    'src/components/projects/FeaturedProjectsSection.tsx': `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projects.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ProjectCaseStudyCard } from './ProjectCaseStudyCard';

export const FeaturedProjectsSection: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 border-b border-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
        <SectionHeader
          badgeText="Engineering Case Studies"
          title="Featured Production Projects"
          subtitle="Real-world systems built with clean separation of concerns, relational database integrity, and production deployment."
        />
        <div className="mb-10">
          <Button href="/projects" variant="secondary" size="sm">
            View All Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {featured.map((project) => (
          <ProjectCaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
`,

    'src/components/projects/ProjectDetailHeader.tsx': `import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectDetailHeaderProps {
  project: ProjectItem;
}

export const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ project }) => {
  return (
    <div className="space-y-6 pb-8 border-b border-slate-900">
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all projects
        </Link>
      </div>

      <div className="space-y-3">
        <Badge variant="emerald">{project.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        {project.liveDemoUrl && (
          <Button href={project.liveDemoUrl} variant="primary" external>
            <ExternalLink className="w-4 h-4" />
            Open Live Production Demo
          </Button>
        )}
        <Button href={project.githubUrl} variant="secondary" external>
          <Github className="w-4 h-4" />
          View GitHub Repository
        </Button>
      </div>
    </div>
  );
};
`,

    'src/components/projects/ProjectDeepDiveSections.tsx': `import React from 'react';
import { Database, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { ProjectDemoCredentialsBox } from './ProjectDemoCredentialsBox';
import { ProjectOutcomeBanner } from './ProjectOutcomeBanner';

interface ProjectDeepDiveSectionsProps {
  project: ProjectItem;
}

export const ProjectDeepDiveSections: React.FC<ProjectDeepDiveSectionsProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Technical Breakdown (8 Cols) */}
      <div className="lg:col-span-8 space-y-6">
        <Card className="p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-bold text-white">System Overview & Business Context</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.deepDive.overview}
          </p>
        </Card>

        <Card className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            Core Architectural Decisions
          </h2>
          <ul className="space-y-2.5">
            {project.architectureHighlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-400" />
            Database Schema & Data Integrity
          </h2>
          <ul className="space-y-2.5">
            {project.deepDive.databaseDesign.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Security & Deployment Standards
          </h2>
          <ul className="space-y-2.5">
            {project.deepDive.securityPractices.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Sidebar Metadata & Demo Access (4 Cols) */}
      <div className="lg:col-span-4 space-y-6">
        <ProjectOutcomeBanner impactText={project.businessImpact} />
        <ProjectDemoCredentialsBox credentials={project.demoCredentials} />

        <Card className="p-6 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Quick Links
          </h3>
          <div className="text-xs font-mono space-y-3">
            <div>
              <span className="text-slate-500 block">Environment Status:</span>
              <span className="text-emerald-400">Production Ready</span>
            </div>
            <div>
              <span className="text-slate-500 block">Source Code:</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 underline hover:text-emerald-400"
              >
                GitHub Repository ↗
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
`,

    // ============================================================================
    // 9. ARCHITECTURE COMPONENTS (src/components/architecture/)
    // ============================================================================
    'src/components/architecture/ArchitecturePillarCard.tsx': `import React from 'react';
import { Cpu } from 'lucide-react';
import { ArchitecturePillar } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ArchitecturePillarCardProps {
  pillar: ArchitecturePillar;
}

export const ArchitecturePillarCard: React.FC<ArchitecturePillarCardProps> = ({ pillar }) => {
  return (
    <Card className="p-6 flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            {pillar.subtitle}
          </span>
          <Cpu className="w-4 h-4 text-slate-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-100">{pillar.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {pillar.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
        {pillar.tools.map((tool) => (
          <Badge key={tool} variant="outline">
            {tool}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
`,

    'src/components/architecture/ArchitectureSection.tsx': `import React from 'react';
import { architecturePillarsData } from '@/data/architecture.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArchitecturePillarCard } from './ArchitecturePillarCard';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-20 border-b border-slate-900">
      <SectionHeader
        badgeText="System Design Mindset"
        title="How I Architect & Build Software"
        subtitle="Focusing on clean code separation, relational data integrity, and operational reliability beyond basic CRUD."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {architecturePillarsData.map((pillar) => (
          <ArchitecturePillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
};
`,

    // ============================================================================
    // 10. SKILLS COMPONENTS (src/components/skills/)
    // ============================================================================
    'src/components/skills/SkillCategoryCard.tsx': `import React from 'react';
import { SkillCategory } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  return (
    <Card className="p-6 space-y-4">
      <div>
        <h3 className="text-base font-bold text-white">{category.categoryName}</h3>
        <p className="text-xs text-slate-400 mt-1">{category.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
`,

    'src/components/skills/SkillsSection.tsx': `import React from 'react';
import { skillsData } from '@/data/skills.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillCategoryCard } from './SkillCategoryCard';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-slate-900">
      <SectionHeader
        badgeText="Technical Competencies"
        title="Technology Stack & Engineering Tools"
        subtitle="Categorized by domain — practical tools and languages applied in real projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
`,

    // ============================================================================
    // 11. EXPERIENCE COMPONENTS (src/components/experience/)
    // ============================================================================
    'src/components/experience/ExperienceTimelineCard.tsx': `import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { ExperienceItem } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ExperienceTimelineCardProps {
  item: ExperienceItem;
}

export const ExperienceTimelineCard: React.FC<ExperienceTimelineCardProps> = ({ item }) => {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-0.5">
            {item.type === 'work' ? (
              <Briefcase className="w-5 h-5" />
            ) : (
              <GraduationCap className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <p className="text-sm text-slate-400">{item.organization}</p>
          </div>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full self-start sm:self-center">
          {item.period}
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
        {item.highlights.map((bullet, idx) => (
          <li key={idx} className="leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
`,

    'src/components/experience/ExperienceSection.tsx': `import React from 'react';
import { experienceData } from '@/data/experience.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceTimelineCard } from './ExperienceTimelineCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-900">
      <SectionHeader
        badgeText="Background & Milestones"
        title="Experience, Research & Education"
        subtitle="Software engineering deliverables, academic research publication, and computer science foundation."
      />

      <div className="space-y-6">
        {experienceData.map((item) => (
          <ExperienceTimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
`,

    // ============================================================================
    // 12. CONTACT COMPONENTS (src/components/contact/) - แยกย่อย 3 ไฟล์ชัดเจน
    // ============================================================================
    'src/components/contact/EmailCopyBox.tsx': `'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';

export const EmailCopyBox: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
      <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-slate-200">
        <Mail className="w-4 h-4 text-emerald-400" />
        <span>{siteConfig.email}</span>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="ml-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          title="Copy Email"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      <Button href={\`mailto:\${siteConfig.email}\`} variant="primary" external>
        Send Email Directly
      </Button>
    </div>
  );
};
`,

    'src/components/contact/ContactQuickLinks.tsx': `import React from 'react';
import { FileText, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const ContactQuickLinks: React.FC = () => {
  return (
    <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
      <a
        href={siteConfig.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        <FileText className="w-4 h-4" />
        Resume (PDF)
      </a>
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        <Github className="w-4 h-4" />
        GitHub Profile
      </a>
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn Profile
      </a>
    </div>
  );
};
`,

    'src/components/contact/ContactSection.tsx': `import React from 'react';
import { Card } from '@/components/ui/Card';
import { EmailCopyBox } from './EmailCopyBox';
import { ContactQuickLinks } from './ContactQuickLinks';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <Card className="p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-950">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase">
          Ready to Contribute
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Let&apos;s Discuss How I Can Help Your Engineering Team
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Whether you need a Full-Stack Developer experienced in ASP.NET Core, React, and SQL Server, or someone ready to build high-concurrency services in Go, feel free to reach out.
        </p>

        <EmailCopyBox />
        <ContactQuickLinks />
      </Card>
    </section>
  );
};
`,

    // ============================================================================
    // 13. NEXT.JS APP ROUTER PAGES (src/app/) - สั้น คลีน อ่านง่าย
    // ============================================================================
    'src/app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-slate-950 text-slate-100;
  }
}
`,

    'src/app/layout.tsx': `import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { seoConfig } from '@/config/seo.config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: seoConfig.siteTitle,
  description: seoConfig.siteDescription,
  keywords: seoConfig.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={\`\${inter.variable} \${jetbrainsMono.variable} scroll-smooth\`}>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
          <Navbar />
          <main className="flex-grow">
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
`,

    'src/app/page.tsx': `import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturedProjectsSection } from '@/components/projects/FeaturedProjectsSection';
import { ArchitectureSection } from '@/components/architecture/ArchitectureSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <ArchitectureSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
`,

    'src/app/projects/page.tsx': `import React from 'react';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects.data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCaseStudyCard } from '@/components/projects/ProjectCaseStudyCard';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | Thanawat Butseree',
  description: 'Detailed software engineering case studies, system architecture, and production deliverables.',
};

export default function ProjectsCatalogPage() {
  return (
    <div className="py-16">
      <SectionHeader
        badgeText="Portfolio Catalog"
        title="All Engineering Projects & Case Studies"
        subtitle="Complete breakdown of business problem statements, architectural decisions, and production metrics."
      />

      <div className="space-y-8">
        {projectsData.map((project) => (
          <ProjectCaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
`,

    'src/app/projects/[slug]/page.tsx': `import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects.data';
import { ProjectDetailHeader } from '@/components/projects/ProjectDetailHeader';
import { ProjectDeepDiveSections } from '@/components/projects/ProjectDeepDiveSections';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: \`\${project.title} | Architecture Case Study\`,
    description: project.problemStatement,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 space-y-10">
      <ProjectDetailHeader project={project} />
      <ProjectDeepDiveSections project={project} />
    </div>
  );
}
`
};

// สร้างไฟล์และโฟลเดอร์ทั้งหมด
console.log('🚀 กำลังสร้างโปรเจกต์ thanawat-fullstack-portfolio (Modular Next.js App Router)...');

for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(process.cwd(), filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('✅ สร้างสำเร็จ:', filePath);
}

fs.mkdirSync(path.join(process.cwd(), 'public', 'images'), { recursive: true });

console.log('\n🎉 สร้างโปรเจกต์เสร็จสมบูรณ์ครบทั้ง 38 ไฟล์!');
console.log('👉 ขั้นตอนการรัน:');
console.log('   1. npm install');
console.log('   2. npm run dev');
console.log('👉 เปิดดูที่: http://localhost:3000');