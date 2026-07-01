'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';

export default function VisionMissionSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 sm:py-32 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Vision & <span className="text-[#1B5AAE]">Mission</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our commitment to excellence and patient care
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="group"
          >
            <div className="h-full rounded-3xl border border-blue-100 bg-white p-12 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1B5AAE] to-[#BAE6FD] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be the globally recognized leader in healthcare and pharmaceutical innovation, delivering exceptional patient outcomes through advanced medical science, compassionate care, and transformative healthcare solutions that improve lives worldwide.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="h-full rounded-3xl border border-emerald-100 bg-white p-12 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-emerald-200">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#4ADE80] to-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services and pharmaceutical products through innovation, research, and excellence. We commit to enhancing quality of life, advancing medical science, and maintaining the highest ethical standards in all we do.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 pt-16 border-t border-blue-100"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', desc: 'Ethical excellence in all actions' },
              { title: 'Innovation', desc: 'Pioneering medical breakthroughs' },
              { title: 'Compassion', desc: 'Patient-centered care always' },
              { title: 'Excellence', desc: 'Quality in every detail' },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="text-center p-6 rounded-2xl bg-linear-to-br from-blue-50 to-emerald-50 border border-blue-100/50 hover:border-blue-200 transition-all"
              >
                <h4 className="font-bold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
