import React from 'react';

interface SectionHeaderProps {
  badgeText: string;
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {badgeText}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};
