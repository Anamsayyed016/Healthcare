'use client';

import Image from 'next/image';

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
    <div className="relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white/80 p-8 shadow-[0_24px_64px_-24px_rgba(27,90,174,0.18)] backdrop-blur-sm sm:p-10">
      <div className="absolute inset-5 z-0 overflow-hidden rounded-2xl">
        <div className="relative h-full w-full">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
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

export const HOME_HERO_DECOR_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782895230/gem2_jiorf5.png';

export const ABOUT_HERO_DECOR_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782898756/gem3_b55iat.png';
