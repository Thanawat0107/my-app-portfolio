import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturedProjectsSection } from '@/components/projects/FeaturedProjectsSection';
import { ArchitectureSection } from '@/components/architecture/ArchitectureSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { SectionScrollHandler } from '@/components/common/SectionScrollHandler';

export default function HomePage() {
  return (
    <>
      <SectionScrollHandler />
      <HeroSection />
      <FeaturedProjectsSection />
      <ArchitectureSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
