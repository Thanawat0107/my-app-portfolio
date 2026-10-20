import React from 'react';
import { TechIcon } from './TechIcon';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'emerald' | 'outline';
  showTechIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  showTechIcon = false,
  icon,
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-slate-800/90 text-slate-200 border border-slate-700/80',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
    outline: 'bg-transparent text-slate-400 border border-slate-800',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {showTechIcon && typeof children === 'string' && (
        <TechIcon name={children} className="w-3.5 h-3.5 shrink-0" />
      )}
      <span>{children}</span>
    </span>
  );
};
