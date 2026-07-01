'use client';

import { motion } from 'framer-motion';

export default function HighlightsSection() {
  const highlights = [
    {
      number: '25+',
      label: 'Years of Excellence',
      color: 'from-[#1B5AAE] to-[#3B82F6]',
    },
    {
      number: '500K+',
      label: 'Lives Impacted',
      color: 'from-[#2563EB] to-[#60A5FA]',
    },
    {
      number: '50+',
      label: 'Healthcare Products',
      color: 'from-[#144785] to-[#1B5AAE]',
    },
    {
      number: '98%',
      label: 'Patient Satisfaction',
      color: 'from-[#D62839] to-[#EF4444]',
    },
  ];

  return (
    <section className="section-shell section-bg-muted-blue relative overflow-hidden">
      <div className="pharm-glow-blue left-1/2 top-0 h-48 w-96 -translate-x-1/2" />
      <div className="section-container relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="premium-card p-6 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`mb-3 text-4xl font-bold sm:text-5xl bg-linear-to-r ${highlight.color} bg-clip-text text-transparent`}
              >
                {highlight.number}
              </motion.div>
              <p className="text-sm font-semibold text-[#475569] sm:text-base">
                {highlight.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
