'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShieldCheck,
  ArrowRight,
  X,
  Factory,
  BadgeCheck,
  Award,
  Truck,
} from 'lucide-react';
import { products, productCategories, MANUFACTURING_STATEMENT } from '@/lib/data/products';
import CatalogueProductCard from '@/components/products/catalogue-product-card';

const whyChooseProducts = [
  {
    title: 'Quality Assured',
    desc: 'Products manufactured through reputed WHO-GMP partners',
    icon: Award,
  },
  {
    title: 'Trusted Manufacturing',
    desc: 'Stringent quality standards across the pharmaceutical range',
    icon: Factory,
  },
  {
    title: 'Professional Portfolio',
    desc: 'Bone EFC™, Nerve EFC™, Itracient™, Lulicient™, Terbicient™, and Levocient™',
    icon: BadgeCheck,
  },
  {
    title: 'Product Enquiries',
    desc: 'Responsive support for hospitals, partners, and clients',
    icon: Truck,
  },
];

const WHO_GMP_DETAIL = MANUFACTURING_STATEMENT;

function WhoGmpBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-1 sm:col-span-2 lg:col-span-3 my-4 sm:my-8"
    >
      <div className="rounded-[24px] border border-[#E2E8F0] bg-linear-to-r from-[#F8FBFF] via-white to-[#F0FDF4]/60 p-8 sm:p-10 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-200/30">
            <ShieldCheck className="text-white" size={28} strokeWidth={1.5} />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Manufactured Under WHO-GMP Standards
            </h3>
            <p className="text-[#64748B] leading-relaxed text-sm sm:text-base">{WHO_GMP_DETAIL}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {[
              { label: 'Quality', icon: Award },
              { label: 'Compliance', icon: BadgeCheck },
              { label: 'Manufacturing', icon: Factory },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-sm font-medium text-[#0F172A]"
              >
                <badge.icon className="text-[#3B82F6]" size={16} />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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

  const firstRow = filtered.slice(0, 3);
  const remaining = filtered.slice(3);

  const hasActiveFilters = category !== 'All' || search.trim().length > 0;

  const clearFilters = () => {
    setSearch('');
    setCategory('All');
  };

  return (
    <>
      <section id="product-catalogue" className="py-12 sm:py-16 bg-[#F8FBFF] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-white border border-[#E2E8F0] shadow-[0_8px_32px_rgba(15,23,42,0.06)] p-6 sm:p-8 space-y-6"
          >
            <div>
              <label htmlFor="product-search" className="block text-sm font-semibold text-[#0F172A] mb-3">
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
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FBFF] text-[#0F172A] text-sm focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/10 transition-all"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-3">Categories</p>
              <div className="flex flex-wrap gap-2">
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      category === cat
                        ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_2px_8px_rgba(59,130,246,0.3)]'
                        : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#CBD5E1]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-[#E2E8F0]">
              <p className="text-sm text-[#64748B]">
                Showing{' '}
                <span className="font-semibold text-[#0F172A]">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'Product' : 'Products'}
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors"
                >
                  <X size={16} />
                  Clear Filters
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-[#64748B] py-20"
              >
                No products match your search. Try adjusting your filters.
              </motion.p>
            ) : (
              <motion.div
                key={`${category}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              >
                {firstRow.map((product, index) => (
                  <CatalogueProductCard key={product.slug} product={product} index={index} />
                ))}
                {firstRow.length > 0 && <WhoGmpBanner />}
                {remaining.map((product, index) => (
                  <CatalogueProductCard
                    key={product.slug}
                    product={product}
                    index={index + 3}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F0FDF4]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
              Why Choose Our Products
            </h2>
            <p className="text-[#64748B]">
              PharmEFC products are manufactured through reputed WHO-GMP partners under stringent
              quality standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseProducts.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-[#3B82F6]" size={22} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[24px] border border-[#E2E8F0] bg-[#F8FBFF] p-8 sm:p-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                Looking for Pharmaceutical Solutions?
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                Contact PharmEFC for product enquiries about Bone EFC™, Nerve EFC™, Itracient™,
                Lulicient™, Terbicient™, Levocient™, and other pharmaceutical products.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors shadow-[0_4px_14px_rgba(59,130,246,0.25)]"
              >
                Contact Sales
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[14px] bg-white border border-[#E2E8F0] text-[#0F172A] font-semibold hover:bg-white hover:border-[#CBD5E1] transition-colors"
              >
                Request Product Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
