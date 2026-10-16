'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavMenu } from './MobileNavMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <Container className="h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-slate-100 hover:text-emerald-400 transition-colors"
        >
          {siteConfig.brandLogo}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {t.nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume.pdf
          </a>
          <div className="pl-1 border-l border-slate-800">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
