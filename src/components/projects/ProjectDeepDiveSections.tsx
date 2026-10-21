'use client';

import React from 'react';
import { Database, ShieldCheck, CheckCircle2, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { ProjectDemoCredentialsBox } from './ProjectDemoCredentialsBox';
import { ProjectOutcomeBanner } from './ProjectOutcomeBanner';
import { InteractiveArchitectureDiagram } from './InteractiveArchitectureDiagram';

interface ProjectDeepDiveSectionsProps {
  project: ProjectItem;
}

export const ProjectDeepDiveSections: React.FC<ProjectDeepDiveSectionsProps> = ({ project }) => {
  const { t } = useLanguage();
  const labels = t.projects.deepDiveLabels;

  return (
    <div className="space-y-8">
      {/* 1. TOP STAGE: System Overview & Full-Width Architecture Diagram (100% Width) */}
      <div className="space-y-6">
        <Card className="p-6 sm:p-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Executive Summary
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">{labels.overviewTitle}</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
            {project.deepDive.overview}
          </p>
        </Card>

        {/* Interactive Architecture & System Flow Diagram (Full Width - 12 Cols) */}
        <InteractiveArchitectureDiagram
          diagram={project.deepDive.systemDiagram}
          fallbackFlowSteps={project.deepDive.flowSteps}
          fallbackFlowTitle={project.deepDive.flowTitle}
        />
      </div>

      {/* 2. LOWER BALANCED STAGE: Deep Engineering (7 Cols) vs Code & Proof (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 Cols): Architectural Specifications & Data Integrity */}
        <div className="lg:col-span-7 space-y-6">
          {/* Architectural Decisions */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              {labels.architectureTitle}
            </h2>
            <ul className="space-y-3">
              {project.architectureHighlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Database Schema & ACID Integrity */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-400" />
              {labels.databaseTitle}
            </h2>
            <ul className="space-y-3">
              {project.deepDive.databaseDesign.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Security & Deployment Standards */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              {labels.securityTitle}
            </h2>
            <ul className="space-y-3">
              {project.deepDive.securityPractices.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right Column (5 Cols): Implementation Proof, Engineering Pillars & Sticky Action Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dedicated Production Code Snippet */}
          {project.deepDive.codeSnippet && (
            <Card className="p-6 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-emerald-400 font-semibold ml-2">
                    {project.deepDive.codeSnippet.filename}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {project.deepDive.codeSnippet.language}
                </span>
              </div>
              <pre className="p-3.5 rounded-md bg-slate-950 border border-slate-800/90 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
                <code>{project.deepDive.codeSnippet.code}</code>
              </pre>
            </Card>
          )}

          {/* 4 Engineering Pillars for this project */}
          {project.deepDive.engineeringPillars && project.deepDive.engineeringPillars.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deepDive.engineeringPillars.map((pillar, idx) => (
                <Card key={idx} className="p-4 space-y-1.5 border-slate-800/80 bg-slate-900/60">
                  <h3 className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    <span>{pillar.title}</span>
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          )}

          {/* Sticky Action Sidebar for Outcome, Credentials & Quick Links */}
          <div className="sticky top-20 space-y-6">
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
                  <span className="text-slate-500 block mb-1">{labels.sourceCode}</span>
                  {project.githubFrontendUrl ? (
                    <div className="flex flex-col gap-1.5">
                      <a
                        href={project.githubFrontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-200 underline hover:text-emerald-400 transition-colors"
                      >
                        <span>Frontend Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {project.githubBackendUrl && (
                        <a
                          href={project.githubBackendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-200 underline hover:text-emerald-400 transition-colors"
                        >
                          <span>Backend Repo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-200 underline hover:text-emerald-400 transition-colors"
                    >
                      <span>GitHub Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
