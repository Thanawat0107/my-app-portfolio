'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectOutcomeBannerProps {
  impactText: string;
  stepNumber?: string;
  className?: string;
}

export const ProjectOutcomeBanner: React.FC<ProjectOutcomeBannerProps> = ({
  impactText,
  stepNumber,
  className = '',
}) => {
  const { t } = useLanguage();

  return (
    <div className={`p-3.5 sm:p-4 rounded-md bg-emerald-500/5 border border-emerald-500/20 space-y-1.5 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300">
        {stepNumber ? (
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-[11px]">
            {stepNumber}
          </span>
        ) : (
          <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
        )}
        <span className="font-semibold text-emerald-300">{t.projects.outcomeLabel}</span>
      </div>
      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-7 sm:pl-7">
        {impactText}
      </p>
    </div>
  );
};
