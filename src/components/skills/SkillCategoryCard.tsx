'use client';

import React from 'react';
import { SkillCategory } from '@/types/portfolio.types';
import { Badge } from '@/components/ui/Badge';
import { Server, Layout, Database, Terminal, GitBranch, Cpu } from 'lucide-react';

interface SkillCategoryCardProps {
  category: SkillCategory;
  isPrimary?: boolean;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, isPrimary = false }) => {
  const getCategoryDetails = () => {
    switch (category.id) {
      case 'backend':
        return {
          icon: <Server className="w-5 h-5 text-emerald-400" />,
          iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
          hoverBorder: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)]',
        };
      case 'frontend':
        return {
          icon: <Layout className="w-5 h-5 text-cyan-400" />,
          iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
          hoverBorder: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)]',
        };
      case 'database':
        return {
          icon: <Database className="w-5 h-5 text-rose-400" />,
          iconBg: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
          hoverBorder: 'hover:border-rose-500/40 hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.15)]',
        };
      case 'tools-env':
        return {
          icon: <Terminal className="w-5 h-5 text-amber-400" />,
          iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
          hoverBorder: 'hover:border-amber-500/40 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)]',
        };
      case 'workflow-qa':
        return {
          icon: <GitBranch className="w-5 h-5 text-blue-400" />,
          iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
          hoverBorder: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.15)]',
        };
      default:
        return {
          icon: <Cpu className="w-5 h-5 text-slate-400" />,
          iconBg: 'bg-slate-800/80 border-slate-700/60 text-slate-400',
          hoverBorder: 'hover:border-slate-700',
        };
    }
  };

  const { icon, iconBg, hoverBorder } = getCategoryDetails();

  return (
    <div
      className={`rounded-md border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 shadow-xl ${hoverBorder}`}
    >
      <div className="space-y-3">
        {/* Header: Icon + Title + Count */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md border ${iconBg} shadow-sm`}>
              {icon}
            </div>
            <div>
              <h3 className={`font-bold text-slate-100 tracking-tight ${isPrimary ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
                {category.categoryName}
              </h3>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-md">
            {category.skills.length} stacks
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          {category.description}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="default" showTechIcon={true} className="text-xs py-1 px-3">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
