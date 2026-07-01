'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactCtaSection() {
  return (
    <section className="section-shell section-bg-tint-red pharm-divider relative overflow-hidden">
      <div className="pharm-glow-blue left-1/4 top-0 h-64 w-64 -translate-x-1/2" />
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          <h2 className="section-title">Ready to connect with PharmEFC?</h2>
          <p className="section-desc">
            Contact us for pharmaceutical products, healthcare consultancy, hospital planning,
            business partnerships, or general enquiries.
          </p>
          <Link href="/contact" className="btn-pharm-accent">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
