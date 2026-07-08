'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { getProductGallery, resolveProductImageSrc } from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type ProductDetailGalleryProps = {
  product: Product;
};

export default function ProductDetailGallery({ product }: ProductDetailGalleryProps) {
  const gallery = getProductGallery(product);
  const [selected, setSelected] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const Icon = productIconMap[product.icon];
  const activeSrc = gallery[selected];

  const closeFullscreen = useCallback(() => setFullscreen(false), []);

  useEffect(() => {
    if (!fullscreen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeFullscreen();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [fullscreen, closeFullscreen]);

  return (
    <div className="space-y-4">
      <div className="group relative overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(15,23,42,0.06)]">
        {/* Fixed preview frame so the image can fill the usable area consistently */}
        <div className="relative h-[420px] bg-white sm:h-[500px] lg:h-[600px]">
          {activeSrc ? (
            <button
              type="button"
              onClick={() => setFullscreen(true)}
              className="absolute inset-4 sm:inset-5 lg:inset-6 cursor-zoom-in p-0 transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              aria-label={`View full size ${product.name} image`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSrc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={resolveProductImageSrc(activeSrc, 960)}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={selected === 0}
                    className="object-contain object-center"
                  />
                </motion.div>
              </AnimatePresence>
              <span className="absolute bottom-2 right-2 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#64748B] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ZoomIn size={12} />
                Full Screen
              </span>
            </button>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 scale-125 rounded-full bg-[#3B82F6]/10 blur-2xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-[#E2E8F0] bg-white shadow-lg">
                  <Icon className="text-pharm-blue-light" size={56} strokeWidth={1.5} />
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
              key={`${src}-${index}`}
              type="button"
              onClick={() => setSelected(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-all ${
                selected === index
                  ? 'border-[#3B82F6] shadow-[0_4px_12px_rgba(27,90,174,0.2)]'
                  : 'border-[#E2E8F0] hover:border-[#93C5FD]'
              }`}
              aria-label={`View image ${index + 1}`}
              aria-current={selected === index ? 'true' : undefined}
            >
              <Image
                src={resolveProductImageSrc(src, 160)}
                alt={`${product.name} view ${index + 1}`}
                fill
                sizes="80px"
                className="object-contain object-center scale-[1.08] p-0.5"
              />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {fullscreen && activeSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} full screen preview`}
            onClick={closeFullscreen}
          >
            <button
              type="button"
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close full screen preview"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={resolveProductImageSrc(activeSrc, 1200)}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
