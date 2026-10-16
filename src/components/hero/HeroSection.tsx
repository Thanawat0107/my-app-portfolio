import React from 'react';
import { HeroIntroText } from './HeroIntroText';
import { HeroActionButtons } from './HeroActionButtons';
import { HeroCoreStackStrip } from './HeroCoreStackStrip';
import { ProfileTerminalCard } from './ProfileTerminalCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <HeroIntroText />
          <HeroActionButtons />
          <HeroCoreStackStrip />
        </div>
        <div className="lg:col-span-5">
          <ProfileTerminalCard />
        </div>
      </div>
    </section>
  );
};
