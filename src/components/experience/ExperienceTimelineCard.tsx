'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Briefcase,
  GraduationCap,
  Swords,
  Users,
  Maximize2,
  X,
  Image as ImageIcon,
} from 'lucide-react';
import { ExperienceItem, ExperienceMedia } from '@/types/portfolio.types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';

interface ExperienceTimelineCardProps {
  item: ExperienceItem;
}

export const ExperienceTimelineCard: React.FC<ExperienceTimelineCardProps> = ({ item }) => {
  const [activeMedia, setActiveMedia] = useState<ExperienceMedia | null>(null);
  const { t, language } = useLanguage();

  const getIconAndStyle = () => {
    switch (item.type) {
      case 'work':
        return {
          icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
          container: 'bg-emerald-500/10 border-emerald-500/25',
          periodBadge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
          accentDot: 'bg-emerald-400',
        };
      case 'award':
        return {
          icon: <Swords className="w-5 h-5 text-amber-400" />,
          container: 'bg-amber-500/10 border-amber-500/25',
          periodBadge: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
          accentDot: 'bg-amber-400',
        };
      case 'education':
        return {
          icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
          container: 'bg-cyan-500/10 border-cyan-500/25',
          periodBadge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
          accentDot: 'bg-cyan-400',
        };
      case 'leadership':
      default:
        return {
          icon: <Users className="w-5 h-5 text-violet-400" />,
          container: 'bg-violet-500/10 border-violet-500/25',
          periodBadge: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
          accentDot: 'bg-violet-400',
        };
    }
  };

  const style = getIconAndStyle();

  return (
    <>
      <Card className="p-6 sm:p-8 transition-all hover:border-slate-700/80">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800/80">
          <div className="flex items-start gap-3.5">
            <div className={`p-2.5 rounded-md border mt-0.5 shrink-0 ${style.container}`}>
              {style.icon}
            </div>
            <div>
              {item.categoryGroup && (
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${style.accentDot}`} />
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {item.categoryGroup}
                  </span>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">{item.role}</h3>
                {item.badge && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {item.type === 'award' && <Swords className="w-3 h-3 text-amber-400 shrink-0" />}
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400 mt-1">{item.organization}</p>
            </div>
          </div>
          <span className={`text-xs font-mono px-3 py-1 rounded-full border self-start sm:self-auto shrink-0 ${style.periodBadge}`}>
            {item.period}
          </span>
        </div>

        {item.type === 'education' ? (
          item.highlights && item.highlights.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {item.highlights.map((fact, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900/90 border border-cyan-500/20 text-xs font-mono text-cyan-200/90 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          )
        ) : (
          item.highlights && item.highlights.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
              {item.highlights.map((bullet, idx) => (
                <li key={idx} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          )
        )}

        {/* Media & Certificates Showcase Grid */}
        {item.media && item.media.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-800/70">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {t.experience.evidenceLabel || (language === 'en' ? 'Supporting Evidence / Documents' : 'ภาพประกอบหลักฐาน / เกียรติบัตร / เอกสาร')} ({item.media.length} {language === 'en' ? (item.media.length > 1 ? 'items' : 'item') : 'รายการ'}):
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {item.media.map((media, mIdx) => (
                <button
                  type="button"
                  key={mIdx}
                  onClick={() => setActiveMedia(media)}
                  className="group relative text-left rounded-md overflow-hidden border border-slate-800/90 bg-slate-950/70 hover:border-emerald-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={media.thumbnailUrl}
                      alt={media.caption}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="p-2 rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30 shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 bg-slate-900/60">
                    <p className="text-xs font-medium text-slate-200 line-clamp-1 group-hover:text-emerald-400 transition-colors">
                      {media.caption}
                    </p>
                    {media.category && (
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">
                        {media.category}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="outline" showTechIcon={true}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </Card>

      {/* Lightbox Modal Viewer */}
      {activeMedia && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-md overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/60">
              <div>
                <h4 className="text-sm font-semibold text-white">{activeMedia.caption}</h4>
                {activeMedia.category && (
                  <span className="text-[11px] font-mono text-emerald-400">{activeMedia.category}</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveMedia(null)}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/10] w-full bg-slate-950 flex items-center justify-center p-2">
              <Image
                src={activeMedia.thumbnailUrl}
                alt={activeMedia.caption}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Modal Footer Note */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between text-xs text-slate-400">
              <span>สามารถคลิกภาพ หรือกดปุ่มปิดเพื่อย้อนกลับ</span>
              <a
                href={activeMedia.thumbnailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
              >
                เปิดไฟล์รูปภาพเต็ม
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
