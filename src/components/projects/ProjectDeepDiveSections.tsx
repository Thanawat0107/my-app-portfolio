'use client';

import React from 'react';
import { Database, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { ProjectDemoCredentialsBox } from './ProjectDemoCredentialsBox';
import { ProjectOutcomeBanner } from './ProjectOutcomeBanner';

interface ProjectDeepDiveSectionsProps {
  project: ProjectItem;
}

export const ProjectDeepDiveSections: React.FC<ProjectDeepDiveSectionsProps> = ({ project }) => {
  const { t } = useLanguage();
  const labels = t.projects.deepDiveLabels;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Technical Breakdown (8 Cols) */}
      <div className="lg:col-span-8 space-y-6">
        <Card className="p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-bold text-white">{labels.overviewTitle}</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.deepDive.overview}
          </p>
        </Card>

        <Card className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            {labels.architectureTitle}
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
            {labels.databaseTitle}
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
            {labels.securityTitle}
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
            {labels.quickLinks}
          </h3>
          <div className="text-xs font-mono space-y-3">
            <div>
              <span className="text-slate-500 block">{labels.envStatus}</span>
              <span className="text-emerald-400">{labels.envReady}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{labels.sourceCode}</span>
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
