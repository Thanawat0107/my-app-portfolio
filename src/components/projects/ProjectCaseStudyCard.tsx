'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, CheckCircle, Layers, BookOpen } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectThumbnailBox } from './ProjectThumbnailBox';
import { ProjectDemoCredentialsBox } from './ProjectDemoCredentialsBox';
import { ProjectOutcomeBanner } from './ProjectOutcomeBanner';
import { ProjectMetricGrid } from './ProjectMetricGrid';

interface ProjectCaseStudyCardProps {
  project: ProjectItem;
}

export const ProjectCaseStudyCard: React.FC<ProjectCaseStudyCardProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Media, Credentials & Links */}
        <div className="lg:col-span-5 space-y-4">
          <ProjectThumbnailBox
            thumbnailUrl={project.thumbnailUrl}
            screenshots={project.screenshots}
            title={project.title}
            category={project.category}
          />

          <ProjectDemoCredentialsBox credentials={project.demoCredentials} />

          {/* Action Links */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.liveDemoUrl && (
              <Button href={project.liveDemoUrl} variant="primary" size="sm" external>
                <ExternalLink className="w-3.5 h-3.5" />
                {t.common.liveDemo}
              </Button>
            )}

            {project.githubFrontendUrl ? (
              <>
                <Button href={project.githubFrontendUrl} variant="secondary" size="sm" external>
                  <Github className="w-3.5 h-3.5" />
                  Frontend
                </Button>
                {project.githubBackendUrl && (
                  <Button href={project.githubBackendUrl} variant="secondary" size="sm" external>
                    <Github className="w-3.5 h-3.5" />
                    Backend
                  </Button>
                )}
              </>
            ) : (
              <Button href={project.githubUrl} variant="secondary" size="sm" external>
                <Github className="w-3.5 h-3.5" />
                {t.common.sourceCode}
              </Button>
            )}

            <Button href={`/projects/${project.slug}`} variant="outline" size="sm">
              <BookOpen className="w-3.5 h-3.5" />
              {t.common.architectureDeepDive}
            </Button>
          </div>
        </div>

        {/* Right Column: Engineering Case Study Breakdown */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-emerald-400 transition-colors">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>

            {/* 4 Quick Specs from PDF */}
            {project.specs && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3.5 p-3 rounded-md bg-slate-950/70 border border-slate-800/80 text-[11px] font-mono">
                <div>
                  <span className="text-slate-500 block">{t.projects.specsLabels?.systemType || 'รูปแบบระบบ'}</span>
                  <span className="text-slate-200 font-medium">{project.specs.systemType}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{t.projects.specsLabels?.role || 'หน้าที่'}</span>
                  <span className="text-emerald-400 font-medium">{project.specs.role}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{t.projects.specsLabels?.targetUsers || 'กลุ่มผู้ใช้'}</span>
                  <span className="text-slate-200 font-medium">{project.specs.targetUsers}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{t.projects.specsLabels?.highlight || 'จุดเด่น'}</span>
                  <span className="text-cyan-300 font-medium">{project.specs.highlight}</span>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default" showTechIcon={true}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* 01. Problem Statement */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-[11px]">
                01
              </span>
              <span className="font-semibold text-slate-200">{t.projects.problemLabel}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-7">
              {project.problemStatement}
            </p>
          </div>

          {/* 02. Core Features or Architecture Highlights */}
          {project.coreFeatures && project.coreFeatures.length > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-[11px]">
                  02
                </span>
                <span className="font-semibold text-slate-200">{t.projects.architectureLabel}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                {project.coreFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-md border border-slate-800/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-[11px]">
                  02
                </span>
                <span className="font-semibold text-slate-200">{t.projects.architectureLabel}</span>
              </div>
              <ul className="space-y-2 pl-7">
                {project.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 03. Key Engineering Metrics */}
          {project.metrics && (
            <div className="pt-1">
              <ProjectMetricGrid
                metrics={project.metrics}
                label={t.projects.metricsLabel}
                stepNumber="03"
              />
            </div>
          )}

          {/* 04. Key Outcome & Business Impact */}
          <ProjectOutcomeBanner
            impactText={project.businessImpact}
            stepNumber="04"
          />
        </div>
      </div>
    </Card>
  );
};
