'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const HeroIntroText: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        {t.hero.availability}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          {t.hero.fullName}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 pt-1">
          {t.hero.role}
        </h2>
      </div>

      <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
        {t.hero.tagline}
      </p>
    </div>
  );
};
