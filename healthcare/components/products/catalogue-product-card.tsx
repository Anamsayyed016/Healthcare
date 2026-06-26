'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type CatalogueProductCardProps = {
  product: Product;
  index?: number;
};

export default function CatalogueProductCard({ product, index = 0 }: CatalogueProductCardProps) {
  const Icon = productIconMap[product.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col h-full bg-white border border-[#E2E8F0] rounded-[22px] p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-[#93C5FD]/60 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center shrink-0">
          <Icon className="text-[#3B82F6]" size={22} strokeWidth={1.75} />
        </div>
        <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#64748B] bg-[#F8FBFF] border border-[#E2E8F0]">
          {product.category}
        </span>
      </div>

      <div className="grow mb-6">
        <h3 className="text-xl font-bold text-[#0F172A] leading-snug mb-3">{product.name}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed">{product.description}</p>
      </div>

      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0]/60 text-xs font-semibold text-[#059669]">
          <ShieldCheck size={14} />
          WHO-GMP
        </span>
      </div>

      <div className="mt-auto pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 px-4 py-3 rounded-[12px] bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF] transition-colors text-center"
        >
          Learn More
        </Link>
        <Link
          href="/contact"
          className="flex-1 px-4 py-3 rounded-[12px] bg-[#3B82F6] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#2563EB] transition-colors group/btn"
        >
          Enquiry
          <ArrowRight
            size={15}
            className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.article>
  );
}
