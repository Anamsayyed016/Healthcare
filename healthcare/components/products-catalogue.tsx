'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, ArrowRight } from 'lucide-react';
import { products, productCategories, WHO_GMP_MESSAGE } from '@/lib/data/products';
import ProductCard from '@/components/product-card';

export default function ProductsCatalogue() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="relative max-w-md w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                size={18}
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FBFF] text-[#0F172A] text-sm focus:outline-none focus:border-[#1E6FD9] transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    category === cat
                      ? 'bg-[#1E6FD9] text-white border-[#1E6FD9]'
                      : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#CBD5E1]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-[#64748B] py-16">No products match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((product, index) => (
                <ProductCard key={product.slug} product={product} index={index} />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 lg:mt-24"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 rounded-[20px] border border-[#E2E8F0] bg-[#F8FBFF] px-7 py-8 sm:px-10 sm:py-9">
              <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center">
                <ShieldCheck className="text-[#1E6FD9]" size={22} strokeWidth={1.75} />
              </div>
              <div className="grow">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-2">
                  Manufactured to Global Quality Standards
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">{WHO_GMP_MESSAGE}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1E6FD9] text-white font-semibold hover:bg-[#1a63c4] transition-colors"
            >
              Product Enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
