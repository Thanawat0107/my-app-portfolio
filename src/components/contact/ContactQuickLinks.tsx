'use client';

import React from 'react';
import { FileText, Github, Phone, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';

export const ContactQuickLinks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
      <a
        href={`tel:${siteConfig.phone || '0924527470'}`}
        className="hover:text-emerald-400 flex items-center gap-1.5 text-slate-300 transition-colors"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span>{siteConfig.phone || '092-452-7470'}</span>
      </a>
      <a
        href={siteConfig.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        <FileText className="w-4 h-4" />
        {t.contact.resumePdf}
      </a>
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        <Github className="w-4 h-4" />
        {t.contact.githubProfile}
      </a>
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
        {t.contact.linkedinProfile}
      </a>
    </div>
  );
};
