'use client';

import { motion } from 'framer-motion';

export default function HighlightsSection() {
  const highlights = [
    {
      number: '25+',
      label: 'Years of Excellence',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '500K+',
      label: 'Lives Impacted',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      number: '50+',
      label: 'Healthcare Products',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '98%',
      label: 'Patient Satisfaction',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-4xl sm:text-5xl font-bold bg-linear-to-r ${highlight.color} bg-clip-text text-transparent mb-3`}
              >
                {highlight.number}
              </motion.div>
              <p className="text-sm sm:text-base font-semibold text-slate-700">
                {highlight.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
