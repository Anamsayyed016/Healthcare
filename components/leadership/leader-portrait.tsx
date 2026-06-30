'use client';

import { User } from 'lucide-react';

type LeaderPortraitProps = {
  name: string;
  large?: boolean;
  className?: string;
};

export default function LeaderPortrait({ name, large, className = '' }: LeaderPortraitProps) {
  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br from-[#F8FBFF] via-[#EFF6FF] to-[#F0FDF4]/60 border border-[#E2E8F0] ${
        large ? 'rounded-[24px] aspect-[4/5]' : 'rounded-[20px] aspect-[4/5]'
      } ${className}`}
      aria-label={`Portrait placeholder for ${name}`}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#3B82F6]/[0.06] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`rounded-full bg-white/80 border border-[#E2E8F0] flex items-center justify-center shadow-sm ${
            large ? 'w-20 h-20' : 'w-14 h-14'
          }`}
        >
          <User
            className="text-[#3B82F6]/50"
            size={large ? 36 : 26}
            strokeWidth={1.25}
          />
        </div>
      </div>
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#E2E8F0]/80 bg-white/60" />
      <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full border border-[#34D399]/30 bg-[#F0FDF4]/80" />
    </div>
  );
}
