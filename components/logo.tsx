import Image from 'next/image';

import { cloudinaryUrl } from '@/lib/images';

export const PHARMEFC_LOGO_URL = cloudinaryUrl(
  'https://res.cloudinary.com/wslwkiwr/image/upload/e_trim/v1782886719/pharmefc_17_vaevjb.png',
  400,
);

/** Trimmed Cloudinary asset dimensions (2178×693) — do not use the raw 2520×2520 square file. */
export const PHARMEFC_LOGO_WIDTH = 2178;
export const PHARMEFC_LOGO_HEIGHT = 693;

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({
  className = 'h-8 w-auto object-contain sm:h-10',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={PHARMEFC_LOGO_URL}
      alt="PharmEFC"
      width={PHARMEFC_LOGO_WIDTH}
      height={PHARMEFC_LOGO_HEIGHT}
      className={className}
      priority={priority}
    />
  );
}
