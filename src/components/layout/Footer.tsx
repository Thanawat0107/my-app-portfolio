'use client';

import React from 'react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="font-mono">
          {siteConfig.brandLogo} — {t.common.footerTagline}
        </div>
        <div>
          © {currentYear} {siteConfig.fullName}. {t.common.rightsReserved}
        </div>
      </Container>
    </footer>
  );
};
