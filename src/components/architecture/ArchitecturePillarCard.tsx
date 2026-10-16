import React from 'react';
import { Cpu } from 'lucide-react';
import { ArchitecturePillar } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ArchitecturePillarCardProps {
  pillar: ArchitecturePillar;
}

export const ArchitecturePillarCard: React.FC<ArchitecturePillarCardProps> = ({ pillar }) => {
  return (
    <Card className="p-6 flex flex-col justify-between space-y-4">
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
