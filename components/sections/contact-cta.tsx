'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactCtaSection() {
  return (
    <section className="section-shell-compact section-bg-tint-red pharm-divider relative overflow-hidden">
      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4"
        >
          <h2 className="section-title-sm">Ready to connect?</h2>
          <p className="section-desc mx-auto">
            Reach out for products, consultancy, or partnership enquiries.
          </p>
          <Link href="/contact" className="btn-pharm-accent">
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
