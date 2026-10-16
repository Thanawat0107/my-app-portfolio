'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceTimelineCard } from './ExperienceTimelineCard';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 border-b border-slate-900">
      <SectionHeader
        badgeText={t.experience.badge}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="space-y-6">
        {t.experience.items.map((item) => (
          <ExperienceTimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
