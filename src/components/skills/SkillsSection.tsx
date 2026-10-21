'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillCategoryCard } from './SkillCategoryCard';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const primaryCategories = t.skills.items.slice(0, 2);
  const secondaryCategories = t.skills.items.slice(2);

  return (
    <section id="skills" className="py-20 border-b border-slate-900 scroll-mt-16">
      <SectionHeader
        badgeText={t.skills.badge}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="space-y-6">
        {/* Tier 1: Core Backend & Frontend Development (2 Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {primaryCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} isPrimary={true} />
          ))}
        </div>

        {/* Tier 2: Database, Tools & Environment, and Workflow & QA (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} isPrimary={false} />
          ))}
        </div>
      </div>
    </section>
  );
};
