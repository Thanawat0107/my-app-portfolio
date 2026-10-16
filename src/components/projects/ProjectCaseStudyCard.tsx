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
            title={project.title}
            category={project.category}
          />

          <ProjectDemoCredentialsBox credentials={project.demoCredentials} />

          <div className="flex flex-wrap gap-2.5 pt-1">
            {project.liveDemoUrl && (
              <Button href={project.liveDemoUrl} variant="primary" size="sm" external>
                <ExternalLink className="w-3.5 h-3.5" />
                {t.common.liveDemo}
              </Button>
            )}
            <Button href={project.githubUrl} variant="secondary" size="sm" external>
              <Github className="w-3.5 h-3.5" />
              {t.common.sourceCode}
            </Button>
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
              {t.projects.problemLabel}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {t.projects.architectureLabel}
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
