'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/data/products';
import { getProductGallery, optimizeProductImageUrl } from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type ProductDetailGalleryProps = {
  product: Product;
};

export default function ProductDetailGallery({ product }: ProductDetailGalleryProps) {
  const gallery = getProductGallery(product);
  const [selected, setSelected] = useState(0);
  const Icon = productIconMap[product.icon];
  const activeSrc = gallery[selected];

  return (
    <div className="space-y-4">
      <div className="group relative overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(15,23,42,0.06)]">
        <div className="absolute inset-0 bg-linear-to-b from-[#F8FBFF] via-white to-[#F0F7FF]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />

        <div className="relative flex min-h-[420px] items-center justify-center p-4 sm:min-h-[500px] lg:min-h-[600px] sm:p-6">
          {activeSrc ? (
            <div className="relative h-[380px] w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-[460px] lg:h-[540px]">
              <div className="absolute inset-[10%] rounded-3xl bg-white/50 shadow-[0_16px_48px_rgba(59,130,246,0.1)] blur-sm" />
              <Image
                src={optimizeProductImageUrl(activeSrc)}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="z-10 object-contain drop-shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5 py-16">
              <div className="relative">
                <div className="absolute inset-0 scale-125 rounded-full bg-[#3B82F6]/10 blur-2xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-[#E2E8F0] bg-white shadow-lg">
                  <Icon className="text-[#3B82F6]" size={56} strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-[#94A3B8]">
                {product.category}
              </p>
            </div>
          )}
        </div>
      </div>

      {gallery.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                selected === index
                  ? 'border-[#3B82F6] shadow-[0_4px_12px_rgba(59,130,246,0.2)]'
                  : 'border-[#E2E8F0] hover:border-[#93C5FD]'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={optimizeProductImageUrl(src)}
                alt={`${product.name} view ${index + 1}`}
                fill
                sizes="80px"
                className="object-contain bg-[#F8FBFF] p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
