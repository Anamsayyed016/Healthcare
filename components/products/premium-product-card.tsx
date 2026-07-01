'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { getCardHighlights, getCategoryBadge } from '@/lib/data/products';
import ProductShowcase from '@/components/products/product-showcase';
import QualityBadges from '@/components/products/quality-badges';

type PremiumProductCardProps = {
  product: Product;
  index?: number;
  variant?: 'catalogue' | 'compact';
};

const variantConfig = {
  catalogue: {
    hoverY: -3,
    delayFactor: (index: number) => (index % 3) * 0.06,
    article:
      'rounded-[22px] border border-[#e2eaf3] shadow-[0_4px_20px_-8px_rgba(27,90,174,0.1)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_52px_-14px_rgba(27,90,174,0.17)] hover:border-[#c5d9f0]',
    imageSection: 'h-[250px] sm:h-[270px]',
    content: 'px-6 pb-7 pt-5',
    title: 'text-lg font-medium',
    learnMore:
      'rounded-[12px] bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF]',
    enquiry:
      'rounded-[12px] bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB]',
  },
  compact: {
    hoverY: -3,
    delayFactor: (index: number) => index * 0.05,
    article:
      'rounded-[20px] border border-[#e2eaf3] shadow-[0_4px_16px_-8px_rgba(27,90,174,0.08)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_-12px_rgba(27,90,174,0.15)] hover:border-[#c5d9f0]',
    imageSection: 'h-[230px] sm:h-[250px]',
    content: 'px-5 sm:px-6 pb-6 sm:pb-7 pt-4',
    title: 'text-lg font-medium',
    learnMore:
      'rounded-lg bg-white text-[#0F172A] text-sm font-medium border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF]',
    enquiry: 'rounded-lg bg-[#1B5AAE] text-white text-sm font-medium hover:bg-[#144785]',
  },
};

export default function PremiumProductCard({
  product,
  index = 0,
  variant = 'catalogue',
}: PremiumProductCardProps) {
  const config = variantConfig[variant];
  const categoryBadge = getCategoryBadge(product);
  const highlights = getCardHighlights(product).slice(0, 4);
  const productHref = `/products/${product.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: config.delayFactor(index) }}
      whileHover={{ y: config.hoverY }}
      className={`group flex flex-col h-full min-h-[480px] bg-white overflow-hidden transition-all duration-300 ${config.article}`}
    >
      <div className={`relative ${config.imageSection} shrink-0`}>
        <span className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#64748B] bg-white/90 border border-[#E2E8F0] backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#EFF6FF] group-hover:border-[#93C5FD]/50 group-hover:text-[#3B82F6]">
          {categoryBadge}
        </span>

        <ProductShowcase product={product} variant="card" href={productHref} className="h-full" />
      </div>

      <div className={`flex flex-col flex-1 ${config.content}`}>
        <h3 className={`card-title mb-2`}>{product.name}</h3>
        <p className="body-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <QualityBadges className="mb-4" />

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
                <Check size={11} className="text-pharm-red-soft shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
          <Link
            href={productHref}
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
