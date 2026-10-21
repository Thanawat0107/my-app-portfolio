'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceTimelineCard } from './ExperienceTimelineCard';
import { Briefcase, Swords, GraduationCap, Users, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: language === 'th' ? 'ทั้งหมด' : 'All', icon: Layers },
    { id: 'work', label: language === 'th' ? 'ประสบการณ์ทำงาน' : 'Work', icon: Briefcase },
    { id: 'award', label: language === 'th' ? 'การแข่งขัน' : 'Competitions', icon: Swords },
    { id: 'education', label: language === 'th' ? 'การศึกษา & ผลการเรียน' : 'Education & Academics', icon: GraduationCap },
    { id: 'leadership', label: language === 'th' ? 'กิจกรรม อื่นๆ' : 'Other Activities', icon: Users },
  ];

  const filteredItems = activeTab === 'all'
    ? t.experience.items
    : t.experience.items.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 border-b border-slate-900 scroll-mt-16">
      <SectionHeader
        badgeText={t.experience.badge}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      {/* 4 Main Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
        {filterCategories.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const count = tab.id === 'all'
            ? t.experience.items.length
            : t.experience.items.filter((i) => i.type === tab.id).length;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-md text-xs font-mono transition-all duration-200 border ${isActive
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-950/30'
                : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-emerald-500/25 text-emerald-200' : 'bg-slate-800 text-slate-500'
                }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <ExperienceTimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
