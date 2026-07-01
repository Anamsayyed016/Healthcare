'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

export default function AboutPreviewSection() {
  return (
    <section className="section-shell section-bg-soft-gray relative overflow-hidden" id="about">
      <div className="pharm-glow-blue -left-20 top-0 h-64 w-64" />
      <div className="section-container-narrow relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          <h2 className="section-title">
            About <span className="section-title-accent">PharmEFC</span>
          </h2>
          <p className="section-desc mx-auto line-clamp-3">
            {aboutContent.storyPreview}
          </p>
          <Link href="/about" className="btn-pharm-secondary">
            Learn More
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
