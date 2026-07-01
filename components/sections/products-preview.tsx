'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/product-card';

export default function ProductsPreviewSection() {
  const featured = products.slice(0, 3);

  return (
    <section className="section-shell-featured section-bg-white relative overflow-hidden" id="products">
      <div className="section-container relative">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-8 max-w-xl sm:mb-10"
        >
          <p className="section-label mb-3">Pharmaceutical Products</p>
          <h2 className="section-title mb-3">Featured Products</h2>
          <p className="section-desc">
            WHO-GMP medicines including Bone EFC™, Nerve EFC™, Itracient™, and our specialty range.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="btn-pharm-primary">
            Explore Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
