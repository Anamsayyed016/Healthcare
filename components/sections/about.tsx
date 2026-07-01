'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 sm:py-32 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              About <span className="text-[#1B5AAE]">HealthCare+</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leading innovation in healthcare and pharmaceutical excellence
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                HealthCare+ represents a new paradigm in healthcare delivery, combining cutting-edge medical technology with compassionate, patient-centered care. We are committed to transforming lives through innovative pharmaceutical solutions and exceptional medical services.
              </p>

              <div className="space-y-4">
                {[
                  'Pioneering pharmaceutical innovations',
                  'State-of-the-art diagnostic capabilities',
                  'Patient-centric care approach',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#1B5AAE]/20 to-[#3B82F6]/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-linear-to-br from-blue-50 to-emerald-50 rounded-3xl p-12 border border-blue-100/50 shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#1B5AAE]">25+</div>
                    <p className="text-muted-foreground mt-2">Years of Excellence</p>
                  </div>
                  <div className="h-1 bg-linear-to-r from-[#1B5AAE] to-[#3B82F6] rounded-full"></div>
                  <p className="text-center text-sm text-foreground">
                    Serving millions of patients worldwide with trust and integrity
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
