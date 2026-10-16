'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';

export const EmailCopyBox: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
      <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-slate-200">
        <Mail className="w-4 h-4 text-emerald-400" />
        <span>{siteConfig.email}</span>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="ml-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          title={copied ? t.contact.copied : t.contact.copyEmail}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      <Button href={`mailto:${siteConfig.email}`} variant="primary" external>
        {t.contact.sendEmailDirectly}
      </Button>
    </div>
  );
};
