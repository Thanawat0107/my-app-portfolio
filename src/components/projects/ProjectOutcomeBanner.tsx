'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectOutcomeBannerProps {
  impactText: string;
}

export const ProjectOutcomeBanner: React.FC<ProjectOutcomeBannerProps> = ({ impactText }) => {
  const { t } = useLanguage();

  return (
    <div className="p-3.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-1">
        <TrendingUp className="w-3.5 h-3.5" />
        {t.projects.outcomeLabel}
      </h4>
      <p className="text-sm text-slate-200">{impactText}</p>
    </div>
  );
};
