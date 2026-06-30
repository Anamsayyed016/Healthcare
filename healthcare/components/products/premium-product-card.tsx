'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import {
  DEFAULT_QUALITY_BADGES,
  getCardHighlights,
  getCategoryBadge,
  getProductImage,
} from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type PremiumProductCardProps = {
  product: Product;
  index?: number;
  variant?: 'catalogue' | 'compact';
};

const variantConfig = {
  catalogue: {
    hoverY: -4,
    delayFactor: (index: number) => (index % 3) * 0.06,
    article:
      'rounded-[22px] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-[#93C5FD]/60',
    imageHeight: 'h-[220px] sm:h-[230px]',
    content: 'px-6 pb-7 pt-5',
    title: 'text-xl font-bold',
    learnMore:
      'rounded-[12px] bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF]',
    enquiry:
      'rounded-[12px] bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB]',
  },
  compact: {
    hoverY: -3,
    delayFactor: (index: number) => index * 0.05,
    article:
      'rounded-[20px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:border-[#CBD5E1]',
    imageHeight: 'h-[200px] sm:h-[210px]',
    content: 'px-5 sm:px-6 pb-6 sm:pb-7 pt-4',
    title: 'text-xl font-semibold',
    learnMore:
      'rounded-lg bg-white text-[#0F172A] text-sm font-medium border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF]',
    enquiry: 'rounded-lg bg-[#1E6FD9] text-white text-sm font-medium hover:bg-[#1a63c4]',
  },
};

export default function PremiumProductCard({
  product,
  index = 0,
  variant = 'catalogue',
}: PremiumProductCardProps) {
  const config = variantConfig[variant];
  const Icon = productIconMap[product.icon];
  const imageSrc = getProductImage(product);
  const categoryBadge = getCategoryBadge(product);
  const highlights = getCardHighlights(product).slice(0, 4);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: config.delayFactor(index) }}
      whileHover={{ y: config.hoverY }}
      className={`group flex flex-col h-full min-h-[480px] bg-white overflow-hidden transition-all duration-300 ${config.article}`}
    >
      <div
        className={`relative ${config.imageHeight} bg-linear-to-b from-[#F8FBFF] to-white flex items-center justify-center overflow-hidden`}
      >
        <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#64748B] bg-white/90 border border-[#E2E8F0] backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#EFF6FF] group-hover:border-[#93C5FD]/50 group-hover:text-[#3B82F6]">
          {categoryBadge}
        </span>

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="max-h-[88%] max-w-[88%] w-auto h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-out group-hover:scale-[1.03]">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center">
              <Icon className="text-[#3B82F6]" size={40} strokeWidth={1.5} />
            </div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-[#94A3B8]">
              {product.category}
            </p>
          </div>
        )}
      </div>

      <div className={`flex flex-col flex-1 ${config.content}`}>
        <h3 className={`${config.title} text-[#0F172A] leading-snug mb-2`}>{product.name}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3 mb-4">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {DEFAULT_QUALITY_BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F0FDF4] border border-[#BBF7D0]/60 text-[10px] font-semibold text-[#059669]"
            >
              <ShieldCheck size={11} className="shrink-0" />
              {badge}
            </span>
          ))}
        </div>

        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
            Key Highlights
          </p>
          <div className="flex flex-wrap gap-1.5">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F8FBFF] border border-[#E2E8F0] text-[11px] font-medium text-[#475569]"
              >
                <Check size={11} className="text-[#34D399] shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
          <Link
            href={`/products/${product.slug}`}
            className={`flex-1 px-4 py-3 transition-colors text-center ${config.learnMore}`}
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 transition-colors group/btn ${config.enquiry}`}
          >
            Enquiry
            <ArrowRight
              size={15}
              className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
