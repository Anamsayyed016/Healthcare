import Image from 'next/image';

export const PHARMEFC_LOGO_URL =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782886719/pharmefc_17_vaevjb.png';

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
      width={272}
      height={64}
      className={className}
      priority={priority}
      style={{ width: 'auto', maxWidth: 'none' }}
    />
  );
}
