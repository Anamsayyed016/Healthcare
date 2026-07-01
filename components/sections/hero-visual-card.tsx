'use client';

import Image from 'next/image';
import { cloudinaryUrl } from '@/lib/images';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ICON_GLASS_SM } from '@/lib/icons';
import {
  heroHeartbeatBadge,
  heroHeartbeatBadgeHoverShadow,
  heroHeartbeatBadgeShadow,
  heroHeartbeatEcg,
  heroHeartbeatIcon,
  heroHeartbeatRadialGlow,
  floatingIconMotion,
} from '@/lib/motion';

type HeroVisualCardProps = {
  backgroundImage: string;
  patternId: string;
  children: React.ReactNode;
  imageQuality?: number;
};

export function HeroVisualCard({
  backgroundImage,
  patternId,
  children,
  imageQuality,
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
            quality={imageQuality}
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

const HEART_PATH =
  'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';

const ECG_PATH = 'M3.5 12h2l2 3 2-6 2 3h7';

function PremiumHeartbeatIcon({ static: isStatic }: { static: boolean }) {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="relative z-10"
    >
      <motion.g
        style={{ transformOrigin: '12px 13px' }}
        animate={isStatic ? undefined : { scale: heroHeartbeatIcon.scale }}
        transition={isStatic ? undefined : heroHeartbeatIcon.transition}
      >
        <path d={HEART_PATH} fill="white" />
      </motion.g>
      <motion.path
        d={ECG_PATH}
        fill="none"
        stroke="white"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={
          isStatic
            ? undefined
            : {
                pathLength: heroHeartbeatEcg.pathLength,
                opacity: heroHeartbeatEcg.opacity,
              }
        }
        transition={isStatic ? undefined : heroHeartbeatEcg.transition}
      />
    </svg>
  );
}

/** Premium red medical badge — homepage hero focal point */
export function HeroHeartCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('hero-heart-badge relative z-10')}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: heroHeartbeatBadge.scale,
              boxShadow: heroHeartbeatBadgeShadow.boxShadow,
            }
      }
      transition={prefersReducedMotion ? undefined : heroHeartbeatBadge.transition}
      whileHover={
        prefersReducedMotion
          ? { y: -2, transition: { duration: 0.3 } }
          : {
              y: -3,
              boxShadow: heroHeartbeatBadgeHoverShadow,
              transition: { duration: 0.3 },
            }
      }
    >
      <motion.div
        className="hero-heart-badge-glow"
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: heroHeartbeatRadialGlow.opacity,
                scale: heroHeartbeatRadialGlow.scale,
              }
        }
        transition={prefersReducedMotion ? undefined : heroHeartbeatRadialGlow.transition}
      />
      <PremiumHeartbeatIcon static={!!prefersReducedMotion} />
    </motion.div>
  );
}

type FloatingHeroIconProps = {
  children: React.ReactNode;
  className?: string;
  glassClass?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  direction?: 'up' | 'down';
};

export function FloatingHeroIcon({
  children,
  className = '',
  glassClass = ICON_GLASS_SM,
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
      whileHover={{
        y: -2,
        scale: 1.04,
        boxShadow: '0 24px 64px rgba(15,23,42,0.12)',
        transition: { duration: 0.3 },
      }}
      className={cn('z-20', glassClass, className)}
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

export const PRODUCTS_HERO_DECOR_IMAGE = cloudinaryUrl(
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782907470/gem4_hbmle5.png',
  960,
);

export const SERVICES_HERO_DECOR_IMAGE = cloudinaryUrl(
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782908598/gem5_d5ix5g.png',
  960,
);

export const LEADERSHIP_HERO_DECOR_IMAGE = cloudinaryUrl(
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782910040/gem6_fqaom7.png',
  960,
);
