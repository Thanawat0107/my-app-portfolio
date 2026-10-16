'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ProjectCaseStudyCard } from './ProjectCaseStudyCard';

export const FeaturedProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const featured = t.projects.items.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 border-b border-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
        <SectionHeader
          badgeText={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <div className="mb-10">
          <Button href="/projects" variant="secondary" size="sm">
            {t.projects.viewAllBtn}
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
