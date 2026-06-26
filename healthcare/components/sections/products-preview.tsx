'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/product-card';

export default function ProductsPreviewSection() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-4">
            Pharmaceutical Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4">
            Featured Products
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Explore a selection from our pharmaceutical portfolio — manufactured through reputed
            WHO-GMP partners under stringent quality standards.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1E6FD9] text-[#1E6FD9] font-semibold hover:bg-[#F8FBFF] transition-colors"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
