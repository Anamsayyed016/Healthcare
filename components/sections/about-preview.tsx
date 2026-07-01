'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutPreviewSection() {
  return (
    <section className="section-shell-compact section-bg-soft-gray relative overflow-hidden" id="about">
      <div className="section-container-narrow relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-5"
        >
          <h2 className="section-title-sm">
            About <span className="section-title-accent">PharmEFC</span>
          </h2>
          <p className="section-desc mx-auto">
            A progressive pharmaceutical and healthcare company delivering quality medicines and
            professional services.
          </p>
          <Link href="/about" className="btn-pharm-link">
            Learn More
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
