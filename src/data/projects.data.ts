import { ProjectItem } from '@/types/portfolio.types';

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
