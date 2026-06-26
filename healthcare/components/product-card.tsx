'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const Icon = productIconMap[product.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="group flex flex-col h-full bg-white border border-[#E5E7EB] rounded-[20px] p-7 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:border-[#CBD5E1] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="w-11 h-11 rounded-full bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center shrink-0">
          <Icon className="text-[#1E6FD9]" size={20} strokeWidth={1.75} />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-wider text-[#64748B] pt-1">
          {product.category}
        </span>
      </div>

      <div className="grow mb-8">
        <h3 className="text-xl font-semibold text-[#0F172A] leading-snug mb-3">{product.name}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed">{product.description}</p>
      </div>

      <div className="mt-auto pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 px-4 py-2.5 rounded-lg bg-white text-[#0F172A] text-sm font-medium border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF] transition-colors duration-200 text-center"
        >
          Learn More
        </Link>
        <Link
          href="/contact"
          className="flex-1 px-4 py-2.5 rounded-lg bg-[#1E6FD9] text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1a63c4] transition-colors duration-200 group/btn"
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
