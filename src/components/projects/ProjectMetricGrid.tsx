'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import { ProjectMetric } from '@/types/portfolio.types';

interface ProjectMetricGridProps {
  metrics?: ProjectMetric[];
  label?: string;
  stepNumber?: string;
  className?: string;
}

export const ProjectMetricGrid: React.FC<ProjectMetricGridProps> = ({
  metrics,
  label = 'Key Engineering Metrics',
  stepNumber,
  className = '',
}) => {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  const getAccentStyles = (accent?: 'emerald' | 'cyan' | 'amber') => {
    switch (accent) {
      case 'cyan':
        return {
          text: 'text-cyan-400',
          borderHover: 'group-hover/metric:border-cyan-500/40',
          glow: 'from-cyan-500/20 to-transparent',
        };
      case 'amber':
        return {
          text: 'text-amber-400',
          borderHover: 'group-hover/metric:border-amber-500/40',
          glow: 'from-amber-500/20 to-transparent',
        };
      case 'emerald':
      default:
        return {
          text: 'text-emerald-400',
          borderHover: 'group-hover/metric:border-emerald-500/40',
          glow: 'from-emerald-500/20 to-transparent',
        };
    }
  };

  return (
    <div className={`space-y-2.5 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
        {stepNumber ? (
          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-[11px]">
            {stepNumber}
          </span>
        ) : (
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
        )}
        <span className="font-semibold text-slate-200">{label}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {metrics.map((metric, idx) => {
          const styles = getAccentStyles(metric.accent);
          return (
            <div
              key={idx}
              className={`relative group/metric overflow-hidden rounded-md bg-slate-950/70 p-3 sm:p-3.5 border border-slate-800/80 ${styles.borderHover} hover:bg-slate-900/50 transition-all duration-300 shadow-sm flex flex-col justify-between`}
            >
              {/* Subtle top ambient glow */}
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${styles.glow} opacity-60 group-hover/metric:opacity-100 transition-opacity`}
              />

              <div>
                <div
                  className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight ${styles.text}`}
                >
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-1 leading-snug">
                  {metric.label}
                </div>
              </div>

              <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-1.5 leading-snug line-clamp-2">
                {metric.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
