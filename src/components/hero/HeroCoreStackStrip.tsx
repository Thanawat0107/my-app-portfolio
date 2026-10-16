'use client';

import React from 'react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';

export const HeroCoreStackStrip: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-4 border-t border-slate-900">
      <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
        {t.hero.coreStackLabel}
      </p>
      <div className="flex flex-wrap gap-2">
        {siteConfig.coreStack.map((tech) => (
          <Badge key={tech} variant="emerald">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
