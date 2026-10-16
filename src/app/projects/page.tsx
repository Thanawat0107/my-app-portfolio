import React from 'react';
import type { Metadata } from 'next';
import { ProjectsCatalogContent } from '@/components/projects/ProjectsCatalogContent';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | Thanawat Butseree',
  description: 'Detailed software engineering case studies, system architecture, and production deliverables.',
};

export default function ProjectsCatalogPage() {
  return <ProjectsCatalogContent />;
}
