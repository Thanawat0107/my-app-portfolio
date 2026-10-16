'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectItem } from '@/types/portfolio.types';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import { ProjectDeepDiveSections } from './ProjectDeepDiveSections';

interface ProjectDetailContentProps {
  slug: string;
  initialProject?: ProjectItem;
}

export const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ slug, initialProject }) => {
  const { t } = useLanguage();
  const project = t.projects.items.find((p) => p.slug === slug) || initialProject;

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 space-y-10">
      <ProjectDetailHeader project={project} />
      <ProjectDeepDiveSections project={project} />
    </div>
  );
};
