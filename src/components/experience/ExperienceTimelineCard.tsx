import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { ExperienceItem } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ExperienceTimelineCardProps {
  item: ExperienceItem;
}

export const ExperienceTimelineCard: React.FC<ExperienceTimelineCardProps> = ({ item }) => {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-0.5">
            {item.type === 'work' ? (
              <Briefcase className="w-5 h-5" />
            ) : (
              <GraduationCap className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <p className="text-sm text-slate-400">{item.organization}</p>
          </div>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full self-start sm:self-center">
          {item.period}
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
        {item.highlights.map((bullet, idx) => (
          <li key={idx} className="leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
