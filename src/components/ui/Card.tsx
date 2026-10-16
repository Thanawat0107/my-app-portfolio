import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-slate-900/60 border border-slate-800/90 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-slate-700 ${className}`}
    >
      {children}
    </div>
  );
};
