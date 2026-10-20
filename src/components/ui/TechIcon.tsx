'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiLinux,
  SiUbuntu,
  SiPostman,
  SiGit,
  SiGithub,
  SiVite,
  SiStripe,
  SiExpo,
  SiDotnet,
  SiGooglemaps,
  SiPostgresql,
  SiDbeaver,
  SiSonar,
  SiGithubactions,
  SiGithubcopilot,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import {
  Database,
  Server,
  Radio,
  Layers,
  ShieldCheck,
  Cpu,
  Code2,
  FileText,
  Lock,
  Workflow,
  Sparkles,
  FlaskConical,
  GitPullRequest,
  CheckCircle2,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-3.5 h-3.5' }) => {
  const normalized = name.toLowerCase().trim();

  // C#
  if (normalized === 'c#' || normalized.includes('csharp')) {
    return <TbBrandCSharp className={`${className} text-purple-400`} />;
  }

  // .NET & ASP.NET & Blazor
  if (
    normalized.includes('asp.net') ||
    normalized.includes('.net') ||
    normalized.includes('blazor') ||
    normalized.includes('entity framework') ||
    normalized === 'ef core'
  ) {
    return <SiDotnet className={`${className} text-violet-400`} />;
  }

  // React & React Native
  if (normalized.includes('react native')) {
    return <SiReact className={`${className} text-cyan-400`} />;
  }
  if (normalized.includes('react')) {
    return <SiReact className={`${className} text-cyan-400`} />;
  }

  // Next.js
  if (normalized.includes('next.js') || normalized.includes('nextjs')) {
    return <SiNextdotjs className={`${className} text-white`} />;
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return <SiTypescript className={`${className} text-blue-400`} />;
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return <SiJavascript className={`${className} text-amber-400`} />;
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return <SiTailwindcss className={`${className} text-cyan-400`} />;
  }

  // Redux Toolkit
  if (normalized.includes('redux') || normalized.includes('rtk')) {
    return <SiRedux className={`${className} text-purple-400`} />;
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return <SiPostgresql className={`${className} text-sky-400`} />;
  }

  // DBeaver
  if (normalized.includes('dbeaver')) {
    return <SiDbeaver className={`${className} text-amber-500`} />;
  }

  // SQL Server / Database
  if (
    normalized.includes('sql server') ||
    normalized.includes('sql') ||
    normalized.includes('database') ||
    normalized.includes('eager loading') ||
    normalized.includes('indexing')
  ) {
    return <DiMsqlServer className={`${className} text-rose-400`} />;
  }

  // Docker
  if (normalized.includes('docker')) {
    return <SiDocker className={`${className} text-blue-400`} />;
  }

  // Linux / Ubuntu
  if (normalized.includes('ubuntu')) {
    return <SiUbuntu className={`${className} text-orange-400`} />;
  }
  if (normalized.includes('linux')) {
    return <SiLinux className={`${className} text-amber-300`} />;
  }

  // CI/CD & GitHub Actions
  if (normalized.includes('github actions') || normalized.includes('ci/cd') || normalized.includes('cicd')) {
    return <SiGithubactions className={`${className} text-blue-400`} />;
  }

  // Git / GitHub
  if (normalized.includes('github')) {
    return <SiGithub className={`${className} text-slate-200`} />;
  }
  if (normalized.includes('git')) {
    return <SiGit className={`${className} text-orange-500`} />;
  }

  // Postman
  if (normalized.includes('postman')) {
    return <SiPostman className={`${className} text-orange-400`} />;
  }

  // AI Coding Assistants (Copilot, Claude, ChatGPT)
  if (
    normalized.includes('ai') ||
    normalized.includes('copilot') ||
    normalized.includes('claude') ||
    normalized.includes('chatgpt')
  ) {
    return <SiGithubcopilot className={`${className} text-purple-400`} />;
  }

  // SonarQube
  if (normalized.includes('sonar')) {
    return <SiSonar className={`${className} text-sky-400`} />;
  }

  // Unit Testing / xUnit
  if (normalized.includes('unit test') || normalized.includes('xunit') || normalized.includes('test')) {
    return <FlaskConical className={`${className} text-emerald-400`} />;
  }

  // Code Review Process
  if (normalized.includes('code review') || normalized.includes('review')) {
    return <GitPullRequest className={`${className} text-violet-400`} />;
  }

  // Vite
  if (normalized.includes('vite')) {
    return <SiVite className={`${className} text-purple-400`} />;
  }

  // Stripe
  if (normalized.includes('stripe')) {
    return <SiStripe className={`${className} text-indigo-400`} />;
  }

  // Expo
  if (normalized.includes('expo')) {
    return <SiExpo className={`${className} text-white`} />;
  }

  // VS Code / Visual Studio
  if (normalized.includes('visual studio') || normalized.includes('vscode')) {
    return <VscCode className={`${className} text-blue-400`} />;
  }

  // Google Maps
  if (normalized.includes('google maps')) {
    return <SiGooglemaps className={`${className} text-emerald-400`} />;
  }

  // SignalR / Real-Time
  if (normalized.includes('signalr') || normalized.includes('real-time') || normalized.includes('realtime')) {
    return <Radio className={`${className} text-rose-400`} />;
  }

  // IIS / Server
  if (normalized.includes('iis') || normalized.includes('server')) {
    return <Server className={`${className} text-emerald-400`} />;
  }

  // Clean Architecture & Patterns
  if (normalized.includes('architecture') || normalized.includes('repository') || normalized.includes('dto')) {
    return <Layers className={`${className} text-teal-400`} />;
  }

  // Security / Auth / JWT / Lock / ACID
  if (
    normalized.includes('jwt') ||
    normalized.includes('auth') ||
    normalized.includes('security') ||
    normalized.includes('acid') ||
    normalized.includes('transaction')
  ) {
    return <ShieldCheck className={`${className} text-emerald-400`} />;
  }

  // Network / Infrastructure
  if (
    normalized.includes('network') ||
    normalized.includes('routing') ||
    normalized.includes('switching') ||
    normalized.includes('เครือข่าย')
  ) {
    return <Radio className={`${className} text-cyan-400`} />;
  }

  // Forms / Validation
  if (normalized.includes('formik') || normalized.includes('yup') || normalized.includes('validation')) {
    return <Workflow className={`${className} text-emerald-400`} />;
  }

  // Reporting / ClosedXML / iText7
  if (
    normalized.includes('closedxml') ||
    normalized.includes('itext') ||
    normalized.includes('report') ||
    normalized.includes('excel') ||
    normalized.includes('pdf')
  ) {
    return <FileText className={`${className} text-emerald-400`} />;
  }

  // Fallback icon
  return <Code2 className={`${className} text-slate-400`} />;
};
