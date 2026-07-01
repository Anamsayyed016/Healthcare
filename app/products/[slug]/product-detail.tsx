'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FlaskConical,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import ContactForm from '@/components/contact-form';
import ProductCard from '@/components/product-card';
import ProductDetailGallery from '@/components/products/product-detail-gallery';
import QualityBadges from '@/components/products/quality-badges';
import type { Product } from '@/lib/data/products';
import {
  getCategoryBadge,
  getProductBrochure,
  getRelatedProducts,
  MANUFACTURING_STATEMENT,
} from '@/lib/data/products';

export default function ProductDetailContent({ product }: { product: Product }) {
  const related = getRelatedProducts(product.slug, 4);
  const categoryBadge = getCategoryBadge(product);
  const brochureUrl = getProductBrochure(product);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={categoryBadge}
        title={product.name}
        description={product.description}
        align="left"
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductDetailGallery product={product} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 lg:pt-4"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#3B82F6] bg-[#EFF6FF] border border-[#BFDBFE]/60">
                {categoryBadge}
              </span>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-3">
                  {product.name}
                </h2>
                <p className="text-[#64748B] leading-relaxed">{product.description}</p>
              </div>

              <QualityBadges size="md" />

              <div className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FBFF] p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-3">
                    Composition
                  </h3>
                  <ul className="space-y-2">
                    {product.composition.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#475569] font-medium"
                      >
                        <FlaskConical size={14} className="text-[#3B82F6] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <CheckCircle2 size={15} className="text-[#D62839] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {product.indications && product.indications.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-3">
                      Indications
                    </h3>
                    <ul className="space-y-2">
                      {product.indications.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#64748B]">
                          <Sparkles size={14} className="text-[#3B82F6] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors shadow-[0_4px_14px_rgba(27,90,174,0.25)]"
                >
                  Product Enquiry
                  <ArrowRight size={18} />
                </Link>
                {brochureUrl && (
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] border border-[#E2E8F0] text-[#0F172A] font-semibold hover:bg-[#F8FBFF] transition-colors"
                  >
                    <Download size={18} />
                    Download Brochure
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">About Product</h2>
          <p className="text-[#64748B] leading-relaxed max-w-4xl text-base sm:text-lg">
            {product.overview}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Composition</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.composition.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[16px] border border-[#E2E8F0] bg-[#F8FBFF] p-5 hover:border-[#93C5FD]/50 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                  <FlaskConical className="text-[#3B82F6]" size={18} />
                </div>
                <p className="font-semibold text-[#0F172A]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 rounded-[16px] border border-[#E2E8F0] bg-white p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]/60 flex items-center justify-center">
                  <CheckCircle2 className="text-[#D62839]" size={20} />
                </div>
                <p className="text-[#64748B] leading-relaxed pt-1.5">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {product.suitableFor && product.suitableFor.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Recommended For</h2>
            <div className="flex flex-wrap gap-3">
              {product.suitableFor.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2.5 rounded-full bg-[#F8FBFF] border border-[#E2E8F0] text-sm font-medium text-[#475569]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 bg-[#F8FBFF] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5 rounded-[20px] border border-[#E2E8F0] bg-white p-8 sm:p-10">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE]/40 flex items-center justify-center">
              <ShieldCheck className="text-[#3B82F6]" size={28} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
                Manufacturing Quality
              </h2>
              <p className="text-[#64748B] leading-relaxed">{MANUFACTURING_STATEMENT}</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-[#0F172A]">Related Products</h2>
              <Link
                href="/products"
                className="text-sm font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors"
              >
                View All Products
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((item, index) => (
                <ProductCard key={item.slug} product={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24 bg-[#F8FBFF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2 text-center">Product Enquiry</h2>
          <p className="text-[#64748B] text-center mb-8">
            Submit an enquiry about {product.name} and our team will respond during business hours.
          </p>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
