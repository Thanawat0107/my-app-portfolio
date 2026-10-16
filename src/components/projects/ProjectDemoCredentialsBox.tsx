'use client';

import React from 'react';
import { KeyRound } from 'lucide-react';
import { DemoCredentials } from '@/types/portfolio.types';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectDemoCredentialsBoxProps {
  credentials?: DemoCredentials;
}

export const ProjectDemoCredentialsBox: React.FC<ProjectDemoCredentialsBoxProps> = ({
  credentials,
}) => {
  const { t } = useLanguage();

  if (!credentials) return null;

  return (
    <div className="p-3.5 rounded-lg bg-slate-950/90 border border-slate-800/90 text-xs font-mono space-y-1.5">
      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
        <KeyRound className="w-3.5 h-3.5" />
        {t.projects.credentialsLabel} ({credentials.role})
      </div>
      <div className="grid grid-cols-2 gap-2 text-slate-300 pt-1">
        <div>
          <span className="text-slate-500">User: </span>
          {credentials.username}
        </div>
        {credentials.password && (
          <div>
            <span className="text-slate-500">Pass: </span>
            {credentials.password}
          </div>
        )}
      </div>
    </div>
  );
};
