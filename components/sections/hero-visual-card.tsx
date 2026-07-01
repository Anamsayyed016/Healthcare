'use client';

import Image from 'next/image';
import { cloudinaryUrl } from '@/lib/images';
import { motion, useReducedMotion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import {
  heartbeatAnimation,
  heartbeatGlowAnimation,
  floatingIconMotion,
} from '@/lib/motion';

type HeroVisualCardProps = {
  backgroundImage: string;
  patternId: string;
  children: React.ReactNode;
};

export function HeroVisualCard({
  backgroundImage,
  patternId,
  children,
}: HeroVisualCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white/80 p-8 shadow-[0_28px_72px_-28px_rgba(27,90,174,0.22)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_32px_80px_-28px_rgba(27,90,174,0.26)] sm:p-10">
      <div className="absolute inset-5 z-0 overflow-hidden rounded-2xl">
        <div className="relative h-full w-full">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 512px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-5 z-[1] rounded-2xl bg-linear-to-b from-white/10 via-white/5 to-transparent" />
      <svg
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <div className="relative z-10 flex flex-col items-center gap-8">{children}</div>
    </div>
  );
}

/** Premium heartbeat focal card — brand red heart on blue gradient */
export function HeroHeartCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA] transition-shadow duration-500"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: heartbeatAnimation.scale,
              boxShadow: heartbeatGlowAnimation.boxShadow,
            }
      }
      transition={prefersReducedMotion ? undefined : heartbeatAnimation.transition}
      whileHover={{
        boxShadow:
          '0 18px 44px -8px rgba(27,90,174,0.45), 0 0 32px -4px rgba(220,38,38,0.14)',
      }}
    >
      <HeartPulse className="text-pharm-red-accent" size={44} strokeWidth={1.5} />
    </motion.div>
  );
}

type FloatingHeroIconProps = {
  children: React.ReactNode;
  className: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  direction?: 'up' | 'down';
};

export function FloatingHeroIcon({
  children,
  className,
  amplitude = 6,
  duration = 4,
  delay = 0,
  direction = 'up',
}: FloatingHeroIconProps) {
  const floatMotion = floatingIconMotion(amplitude, duration, delay, direction);
  return (
    <motion.div
      animate={floatMotion.animate}
      transition={floatMotion.transition}
      whileHover={{ scale: 1.06, transition: { duration: 0.25 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const HOME_HERO_DECOR_IMAGE = cloudinaryUrl(
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782895230/gem2_jiorf5.png',
  960,
);

export const ABOUT_HERO_DECOR_IMAGE = cloudinaryUrl(
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782898756/gem3_b55iat.png',
  960,
);
