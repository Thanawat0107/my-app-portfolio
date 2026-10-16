'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillCategoryCard } from './SkillCategoryCard';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 border-b border-slate-900">
      <SectionHeader
        badgeText={t.skills.badge}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.skills.items.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
