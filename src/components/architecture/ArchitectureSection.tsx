'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArchitecturePillarCard } from './ArchitecturePillarCard';

export const ArchitectureSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-20 border-b border-slate-900">
      <SectionHeader
        badgeText={t.architecture.badge}
        title={t.architecture.title}
        subtitle={t.architecture.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.architecture.items.map((pillar) => (
          <ArchitecturePillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
};
