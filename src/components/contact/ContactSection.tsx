'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { EmailCopyBox } from './EmailCopyBox';
import { ContactQuickLinks } from './ContactQuickLinks';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <Card className="p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-950">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase">
          {t.contact.badge}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          {t.contact.title}
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          {t.contact.description}
        </p>

        <EmailCopyBox />
        <ContactQuickLinks />
      </Card>
    </section>
  );
};
