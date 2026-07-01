'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { whyChooseReasons } from '@/lib/data/why-choose-us';

export default function WhyChoosePreviewSection() {
  const highlights = whyChooseReasons.slice(0, 3);

  return (
    <section className="section-shell-featured section-bg-soft-blue relative overflow-hidden">
      <div className="section-container-narrow relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          <h2 className="section-title">
            Why Choose <span className="section-title-accent">PharmEFC</span>
          </h2>

          <ul className="mx-auto max-w-md space-y-3 text-left">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-[#e2eaf3] bg-white/80 px-4 py-3"
              >
                <CheckCircle2 className="shrink-0 text-[#D62839]" size={17} />
                <span className="text-sm font-medium text-[#334155]">{item.title}</span>
              </li>
            ))}
          </ul>

          <Link href="/why-pharmefc" className="btn-pharm-secondary">
            Discover Why PharmEFC
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
