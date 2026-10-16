import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-3 pb-5 space-y-3">
      {t.nav.items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block py-2 text-sm font-medium text-slate-200 hover:text-emerald-400"
        >
          {item.label}
        </Link>
      ))}
      <div className="pt-2 flex items-center gap-4 border-t border-slate-800">
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950"
        >
          <FileText className="w-3.5 h-3.5" />
          {t.common.downloadResume}
        </a>
      </div>
    </div>
  );
};
