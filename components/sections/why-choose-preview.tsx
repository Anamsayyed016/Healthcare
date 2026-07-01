'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { whyChooseReasons } from '@/lib/data/why-choose-us';

export default function WhyChoosePreviewSection() {
  const highlights = whyChooseReasons.slice(0, 3);

  return (
    <section className="section-shell section-bg-soft-blue relative overflow-hidden">
      <div className="pharm-glow-red -left-16 bottom-0 h-56 w-56" />
      <div className="section-container-narrow relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          <h2 className="section-title">
            Why Choose <span className="section-title-accent">PharmEFC</span>
          </h2>

          <ul className="mx-auto max-w-md space-y-4 text-left">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="premium-card flex items-start gap-3 p-4 text-[#334155]"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#D62839]" size={18} />
                <span className="text-sm font-medium sm:text-base">{item.title}</span>
              </li>
            ))}
          </ul>

          <Link href="/why-pharmefc" className="btn-pharm-primary">
            Discover Why PharmEFC
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
