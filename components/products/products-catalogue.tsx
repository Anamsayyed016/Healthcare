'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { products, productCategories } from '@/lib/data/products';
import CatalogueProductCard from '@/components/products/catalogue-product-card';

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

  const hasActiveFilters = category !== 'All' || search.trim().length > 0;

  const clearFilters = () => {
    setSearch('');
    setCategory('All');
  };

  return (
    <section id="product-catalogue" className="scroll-mt-20 bg-[#F8FBFF] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-6">
          <div>
            <label htmlFor="product-search" className="mb-2 block text-sm font-semibold text-[#0F172A]">
              Search Products
            </label>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                size={18}
              />
              <input
                id="product-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by product name or category..."
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FBFF] py-3 pl-11 pr-4 text-sm text-[#0F172A] transition-all focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-[#0F172A]">Categories</p>
            <div className="flex flex-wrap gap-2">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    category === cat
                      ? 'border-[#3B82F6] bg-[#3B82F6] text-white shadow-[0_2px_8px_rgba(27,90,174,0.3)]'
                      : 'border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#CBD5E1]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#E2E8F0] pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#64748B]">
              Showing{' '}
              <span className="font-semibold text-[#0F172A]">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'Product' : 'Products'}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#2563EB]"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center text-[#64748B]"
            >
              No products match your search. Try adjusting your filters.
            </motion.p>
          ) : (
            <motion.div
              key={`${category}-${search}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {filtered.map((product, index) => (
                <CatalogueProductCard key={product.slug} product={product} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
