import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface ProjectThumbnailBoxProps {
  thumbnailUrl: string;
  title: string;
  category: string;
}

export const ProjectThumbnailBox: React.FC<ProjectThumbnailBoxProps> = ({
  thumbnailUrl,
  title,
  category,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3 left-3">
        <Badge variant="emerald">{category}</Badge>
      </div>
    </div>
  );
};
