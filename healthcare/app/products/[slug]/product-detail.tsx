'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import ContactForm from '@/components/contact-form';
import ProductCard from '@/components/product-card';
import { productIconMap } from '@/lib/icons';
import type { Product } from '@/lib/data/products';
import { getRelatedProducts, WHO_GMP_MESSAGE } from '@/lib/data/products';
import { COMPANY_NAME } from '@/lib/contact';

export default function ProductDetailContent({ product }: { product: Product }) {
  const Icon = productIconMap[product.icon];
  const related = getRelatedProducts(product.slug);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.description}
        align="left"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FBFF] aspect-square max-h-[28rem] flex items-center justify-center"
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center mx-auto">
                  <Icon className="text-[#1E6FD9]" size={40} strokeWidth={1.5} />
                </div>
                <p className="text-sm text-[#64748B] uppercase tracking-wider">{product.category}</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Product Overview</h2>
                <p className="text-[#64748B] leading-relaxed">{product.overview}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-3">Composition</h2>
                <ul className="space-y-2">
                  {product.composition.map((item) => (
                    <li key={item} className="text-[#64748B] leading-relaxed text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-3">Key Benefits</h2>
                <ul className="space-y-2">
                  {product.benefits.map((item) => (
                    <li key={item} className="text-[#64748B] leading-relaxed text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              {product.suitableFor && product.suitableFor.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#0F172A] mb-3">Recommended For</h2>
                  <ul className="space-y-2">
                    {product.suitableFor.map((item) => (
                      <li key={item} className="text-[#64748B] leading-relaxed text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product.indications && product.indications.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#0F172A] mb-3">Indications</h2>
                  <ul className="space-y-2">
                    {product.indications.map((item) => (
                      <li key={item} className="text-[#64748B] leading-relaxed text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-3">Manufacturing Information</h2>
                <p className="text-[#64748B] leading-relaxed">{product.manufacturing}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-3">Quality Standards</h2>
                <p className="text-[#64748B] leading-relaxed">{product.qualityStandards}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1E6FD9] text-white font-semibold hover:bg-[#1a63c4] transition-colors"
                >
                  Product Enquiry
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E2E8F0] text-[#0F172A] font-semibold hover:bg-[#F8FBFF] transition-colors"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F8FBFF] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-[20px] border border-[#E2E8F0] bg-white p-8">
            <ShieldCheck className="text-[#1E6FD9] shrink-0" size={28} />
            <div>
              <h3 className="font-semibold text-[#0F172A] mb-2">
                Manufactured to Global Quality Standards
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{WHO_GMP_MESSAGE}</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-10">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
