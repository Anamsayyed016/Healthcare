'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/product-card';

export default function ProductsPreviewSection() {
  const featured = products.slice(0, 3);

  return (
    <section className="section-shell section-bg-white relative overflow-hidden" id="products">
      <div className="pharm-glow-blue right-0 top-0 h-80 w-80" />
      <div className="section-container relative">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">
            Pharmaceutical Products
          </p>
          <h2 className="section-title mb-4">Featured Products</h2>
          <p className="section-desc">
            A selection from our pharmaceutical range — including Bone EFC™, Nerve EFC™, Itracient™,
            Lulicient™, Terbicient™, and Levocient™ — manufactured through reputed WHO-GMP partners.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {featured.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products" className="btn-pharm-secondary">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
