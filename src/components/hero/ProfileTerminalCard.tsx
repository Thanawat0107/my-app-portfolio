'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';

export const ProfileTerminalCard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative group max-w-sm mx-auto lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-1 rounded-md bg-gradient-to-r from-emerald-500/25 to-cyan-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-slate-900 border border-slate-800 rounded-md p-4 shadow-2xl">
        {/* Top Terminal Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" />
            {t.hero.terminalTitle}
          </span>
        </div>

        {/* Portrait Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-slate-800">
          <Image
            src={siteConfig.avatarUrl}
            alt={t.hero.fullName}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/80">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              {t.hero.location}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-3 pt-2 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1.5 font-medium text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            {t.hero.mindset}
          </span>
          <span className="font-mono text-slate-500">{t.hero.framework}</span>
        </div>

        {/* Developer & Employment Quick Specs */}
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono space-y-1 text-slate-400">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Target Role:</span>
            <span className="text-slate-200 font-medium">Software / Full-Stack Engineer</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Employment:</span>
            <span className="text-emerald-400 font-medium">Full-Time / Contract</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Availability:</span>
            <span className="text-slate-200">Immediate Start</span>
          </div>
        </div>
      </div>
    </div>
  );
};
