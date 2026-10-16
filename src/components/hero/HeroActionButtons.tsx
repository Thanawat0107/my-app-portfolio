'use client';

import React from 'react';
import { FileDown, Github, Linkedin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';

export const HeroActionButtons: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <Button href={siteConfig.resumeUrl} variant="primary" external>
        <FileDown className="w-4 h-4" />
        {t.common.downloadResume}
      </Button>
      <Button href="/projects" variant="secondary">
        {t.common.exploreCaseStudies}
        <ArrowRight className="w-4 h-4" />
      </Button>
      <Button href={siteConfig.socials.github} variant="outline" external>
        <Github className="w-4 h-4" />
        GitHub
      </Button>
      <Button href={siteConfig.socials.linkedin} variant="outline" external>
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>
    </div>
  );
};
