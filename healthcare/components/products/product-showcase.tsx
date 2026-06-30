'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/data/products';
import { getProductImage, optimizeProductImageUrl } from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type ProductShowcaseProps = {
  product: Product;
  variant?: 'card' | 'detail';
  href?: string;
  className?: string;
  priority?: boolean;
};

const variantHeights = {
  card: 'h-full min-h-[250px] sm:min-h-[270px]',
  detail: 'h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[600px]',
};

export default function ProductShowcase({
  product,
  variant = 'card',
  href,
  className = '',
  priority = false,
}: ProductShowcaseProps) {
  const Icon = productIconMap[product.icon];
  const imageSrc = getProductImage(product);
  const optimizedSrc = imageSrc ? optimizeProductImageUrl(imageSrc) : undefined;

  const showcase = (
    <div
      className={`relative w-full overflow-hidden ${variantHeights[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#F8FBFF] via-white to-[#F0F7FF]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_65%)]" />

      <div className="relative z-10 flex h-full w-full items-center justify-center p-2 sm:p-3">
        {optimizedSrc ? (
          <div
            className={`relative flex h-[92%] w-[92%] items-center justify-center transition-all duration-300 ease-out ${
              href ? 'group-hover/image:scale-[1.03] group-hover/image:drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)]' : ''
            }`}
          >
            <div className="absolute inset-[8%] rounded-2xl bg-white/60 shadow-[0_12px_40px_rgba(59,130,246,0.08)] blur-sm" />
            <Image
              src={optimizedSrc}
              alt={product.name}
              fill
              sizes={
                variant === 'detail'
                  ? '(max-width: 1024px) 100vw, 50vw'
                  : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              }
              priority={priority}
              className="relative z-10 object-contain drop-shadow-[0_8px_24px_rgba(15,23,42,0.1)]"
            />
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-center gap-4 transition-transform duration-300 ease-out ${
              href ? 'group-hover/image:scale-[1.03]' : ''
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#3B82F6]/10 blur-xl scale-110" />
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(59,130,246,0.12)]">
                <Icon className="text-[#3B82F6]" size={44} strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
              {product.category}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group/image block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
        aria-label={`View ${product.name} details`}
      >
        {showcase}
      </Link>
    );
  }

  return showcase;
}
