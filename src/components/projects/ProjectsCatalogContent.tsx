'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCaseStudyCard } from '@/components/projects/ProjectCaseStudyCard';

export const ProjectsCatalogContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16">
      <SectionHeader
        badgeText={t.projects.catalogBadge}
        title={t.projects.catalogTitle}
        subtitle={t.projects.catalogSubtitle}
      />

      <div className="space-y-8">
        {t.projects.items.map((project) => (
          <ProjectCaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};
