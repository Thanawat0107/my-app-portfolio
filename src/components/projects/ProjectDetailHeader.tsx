'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio.types';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMetricGrid } from './ProjectMetricGrid';

interface ProjectDetailHeaderProps {
  project: ProjectItem;
}

export const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 pb-8 border-b border-slate-900">
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.common.backToAllProjects}
        </Link>
      </div>

      <div className="space-y-3">
        <Badge variant="emerald">{project.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default" showTechIcon={true}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        {project.liveDemoUrl && (
          <Button href={project.liveDemoUrl} variant="primary" external>
            <ExternalLink className="w-4 h-4" />
            {t.common.openLiveDemo}
          </Button>
        )}
        {project.githubFrontendUrl ? (
          <>
            <Button href={project.githubFrontendUrl} variant="secondary" external>
              <Github className="w-4 h-4" />
              Frontend Code
            </Button>
            {project.githubBackendUrl && (
              <Button href={project.githubBackendUrl} variant="secondary" external>
                <Github className="w-4 h-4" />
                Backend Code
              </Button>
            )}
          </>
        ) : (
          <Button href={project.githubUrl} variant="secondary" external>
            <Github className="w-4 h-4" />
            {t.common.viewGitHubRepo}
          </Button>
        )}
      </div>

      {project.metrics && (
        <div className="pt-2">
          <ProjectMetricGrid
            metrics={project.metrics}
            label={t.projects.metricsLabel}
          />
        </div>
      )}
    </div>
  );
};
