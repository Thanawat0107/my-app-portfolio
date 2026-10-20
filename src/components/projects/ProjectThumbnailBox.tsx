'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface ProjectThumbnailBoxProps {
  thumbnailUrl: string;
  screenshots?: string[];
  title: string;
  category: string;
}

export const ProjectThumbnailBox: React.FC<ProjectThumbnailBoxProps> = ({
  thumbnailUrl,
  screenshots,
  title,
  category,
}) => {
  const images = screenshots && screenshots.length > 0 ? screenshots : [thumbnailUrl];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/10] shadow-xl">
      {/* Current Slide Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${title} - Preview ${currentIndex + 1}`}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 500px"
          className="object-cover object-center transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top Category Badge & Slide Counter */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <Badge variant="emerald">{category}</Badge>
        {images.length > 1 && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-700/80">
            <Layers className="w-3 h-3 text-emerald-400" />
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>

      {/* Left/Right Carousel Controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white border border-slate-700/80 hover:bg-emerald-500 hover:border-emerald-400 transition-all opacity-80 group-hover:opacity-100 shadow-lg focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white border border-slate-700/80 hover:bg-emerald-500 hover:border-emerald-400 transition-all opacity-80 group-hover:opacity-100 shadow-lg focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-800/80">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-5 bg-emerald-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
