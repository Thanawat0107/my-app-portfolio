'use client';

import React, { useState } from 'react';
import {
  Layers,
  Database,
  RefreshCw,
  Zap,
  Code2,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Cpu,
} from 'lucide-react';
import { ArchitecturePillar } from '@/types/portfolio.types';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';

interface ArchitecturePillarCardProps {
  pillar: ArchitecturePillar;
}

export const ArchitecturePillarCard: React.FC<ArchitecturePillarCardProps> = ({ pillar }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t, language: locale } = useLanguage();

  const viewCodeText = t.architecture.viewCodeLabel || (locale === 'th' ? 'ดูตัวอย่างโค้ด Production' : 'View Production Code');
  const hideCodeText = t.architecture.hideCodeLabel || (locale === 'th' ? 'ซ่อนโค้ดตัวอย่าง' : 'Hide Code Snippet');

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pillar.codeSnippet?.code) {
      await navigator.clipboard.writeText(pillar.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Determine icon & color themes based on pillar id or accent
  const getPillarIcon = () => {
    switch (pillar.id) {
      case 'clean-backend':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'database-integrity':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'resilience-automation':
        return <RefreshCw className="w-5 h-5 text-amber-400" />;
      case 'realtime-security':
        return <Zap className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-400" />;
    }
  };

  const getAccentStyles = () => {
    switch (pillar.accent) {
      case 'cyan':
        return {
          glow: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]',
          badgeText: 'text-cyan-400',
          iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
          dot: 'bg-cyan-400',
          buttonHover: 'hover:text-cyan-300',
        };
      case 'amber':
        return {
          glow: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]',
          badgeText: 'text-amber-400',
          iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
          dot: 'bg-amber-400',
          buttonHover: 'hover:text-amber-300',
        };
      case 'indigo':
        return {
          glow: 'hover:border-indigo-500/40 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]',
          badgeText: 'text-indigo-400',
          iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
          dot: 'bg-indigo-400',
          buttonHover: 'hover:text-indigo-300',
        };
      case 'emerald':
      default:
        return {
          glow: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]',
          badgeText: 'text-emerald-400',
          iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
          dot: 'bg-emerald-400',
          buttonHover: 'hover:text-emerald-300',
        };
    }
  };

  const styles = getAccentStyles();

  return (
    <div
      className={`rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 shadow-xl ${styles.glow}`}
    >
      <div className="space-y-4">
        {/* Header row: Icon, Category Subtitle, and Source Project Tag */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${styles.iconBg} shadow-sm`}>
              {getPillarIcon()}
            </div>
            <div>
              <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider ${styles.badgeText}`}>
                {pillar.subtitle}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">
                {pillar.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Implemented In Tag */}
        {pillar.implementedIn && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-950/80 border border-slate-800/90">
            <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} animate-pulse`} />
            <span className="text-slate-400 font-sans">
              {locale === 'th' ? 'นำไปใช้งานจริงใน:' : 'Implemented in:'}
            </span>
            <span className="font-semibold text-slate-200">{pillar.implementedIn}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-slate-300/90 leading-relaxed font-sans">
          {pillar.description}
        </p>
      </div>

      {/* Code Snippet Drawer */}
      {pillar.codeSnippet && (
        <div className="pt-2 border-t border-slate-800/60">
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className={`inline-flex items-center gap-2 text-xs font-mono font-medium ${styles.badgeText} ${styles.buttonHover} transition-colors py-1 focus:outline-none`}
          >
            <Code2 className="w-4 h-4" />
            <span>{showCode ? hideCodeText : viewCodeText}</span>
            {showCode ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showCode && (
            <div className="mt-3 rounded-xl bg-[#141822] border border-slate-800 shadow-2xl overflow-hidden animate-fadeIn">
              {/* VS Code Mac Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0f131a] border-b border-slate-800/80 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-mono text-slate-300 font-medium">
                    {pillar.codeSnippet.filename}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-400 border border-slate-700/60">
                    {pillar.codeSnippet.language}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors p-1 rounded hover:bg-slate-800"
                    title={locale === 'th' ? 'คัดลอกโค้ด' : 'Copy code'}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">
                          {locale === 'th' ? 'คัดลอกแล้ว' : 'Copied'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px] hidden sm:inline">
                          {locale === 'th' ? 'คัดลอก' : 'Copy'}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Pre Block */}
              <div className="p-4 overflow-x-auto bg-[#0a0d14]">
                <pre className="text-slate-200 font-mono text-[12px] leading-relaxed selection:bg-emerald-500/30 selection:text-emerald-200">
                  <code>{pillar.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tools & Tech Badges */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
        {pillar.tools.map((tool) => (
          <Badge key={tool} variant="outline" className="text-[11px] px-2.5 py-1">
            {tool}
          </Badge>
        ))}
      </div>
    </div>
  );
};
