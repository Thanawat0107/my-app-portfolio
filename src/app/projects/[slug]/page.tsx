import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects.data';
import { ProjectDetailContent } from '@/components/projects/ProjectDetailContent';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Architecture Case Study`,
    description: project.problemStatement,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent slug={params.slug} initialProject={project} />;
}
