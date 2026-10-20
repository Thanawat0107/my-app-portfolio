'use client';

import React, { useState } from 'react';
import { Cpu, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import { ArchitecturePillar } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';

interface ArchitecturePillarCardProps {
  pillar: ArchitecturePillar;
}

export const ArchitecturePillarCard: React.FC<ArchitecturePillarCardProps> = ({ pillar }) => {
  const [showCode, setShowCode] = useState(false);
  const { t } = useLanguage();

  const viewCodeText = t.architecture.viewCodeLabel || 'ดูตัวอย่างโค้ด Production';
  const hideCodeText = t.architecture.hideCodeLabel || 'ซ่อนโค้ดตัวอย่าง';

  return (
    <Card className="p-6 flex flex-col justify-between space-y-4 transition-all">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            {pillar.subtitle}
          </span>
          <Cpu className="w-4 h-4 text-slate-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-100">{pillar.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {pillar.description}
        </p>
      </div>

      {pillar.codeSnippet && (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{showCode ? hideCodeText : viewCodeText}</span>
            {showCode ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {showCode && (
            <div className="mt-3 rounded-xl bg-slate-950 border border-slate-800/90 p-3.5 text-xs font-mono text-slate-300 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-emerald-400 font-semibold">{pillar.codeSnippet.filename}</span>
                <span className="text-slate-500">{pillar.codeSnippet.language}</span>
              </div>
              <pre className="text-slate-200 leading-relaxed font-mono text-[11.5px] whitespace-pre-wrap">
                <code>{pillar.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
        {pillar.tools.map((tool) => (
          <Badge key={tool} variant="outline">
            {tool}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
