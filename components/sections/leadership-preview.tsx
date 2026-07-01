'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { executiveLeaders } from '@/lib/data/leadership';

type LeadershipPreviewSectionProps = {
  limit?: number;
  compact?: boolean;
};

export default function LeadershipPreviewSection({
  limit = 2,
  compact = true,
}: LeadershipPreviewSectionProps) {
  const leaders = executiveLeaders.slice(0, limit);
  const gridClass =
    limit <= 2 ? 'sm:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4';
  const containerClass = compact ? 'max-w-4xl' : 'max-w-7xl';

  return (
    <section className="section-shell-standard section-bg-white relative overflow-hidden">
      <div className={`${containerClass} relative mx-auto px-4 sm:px-6 lg:px-8`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className={`text-center ${compact ? 'mb-8' : 'mb-12'}`}
        >
          <h2 className="section-title-sm mb-2">
            Executive <span className="section-title-accent">Leadership</span>
          </h2>
          <p className="section-desc mx-auto max-w-lg">
            Experienced leaders guiding our pharmaceutical and healthcare direction.
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 ${gridClass} gap-4 ${compact ? 'mb-8' : 'mb-10'}`}>
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="premium-card overflow-hidden"
            >
              <div
                className={`flex items-center justify-center border-b border-[#E2E8F0] bg-[#F8FBFF] ${
                  compact ? 'h-24' : 'h-32'
                }`}
              >
                <div className="text-2xl font-semibold text-[#1B5AAE]/30">
                  {leader.name.charAt(0)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="card-title">{leader.name}</h3>
                <p className="body-sm mt-0.5 font-medium text-[#1B5AAE]">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/leadership" className="btn-pharm-link">
            Meet Our Leadership
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
