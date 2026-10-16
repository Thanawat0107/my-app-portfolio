'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-lg bg-slate-900/90 border border-slate-800/80 backdrop-blur-sm text-xs font-mono ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5 shrink-0" />

      <button
        type="button"
        onClick={() => setLanguage('th')}
        aria-pressed={language === 'th'}
        className={`px-2 py-0.5 rounded-md transition-all duration-200 ${
          language === 'th'
            ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40 shadow-sm'
            : 'text-slate-400 hover:text-slate-200 border border-transparent'
        }`}
      >
        TH
      </button>

      <span className="text-slate-700 select-none">/</span>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2 py-0.5 rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40 shadow-sm'
            : 'text-slate-400 hover:text-slate-200 border border-transparent'
        }`}
      >
        EN
      </button>
    </div>
  );
};
