'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award } from 'lucide-react';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification standards for all products and services.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous R&D investment in cutting-edge medical technologies and treatments.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class healthcare professionals with decades of combined experience.',
    },
    {
      icon: Award,
      title: 'Trusted Partner',
      description: 'Recognized industry leader with prestigious awards and certifications.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Why <span className="text-[#4F9DF8]">Choose Us</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-leading excellence across healthcare and pharmaceutical services
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex gap-6 p-8 rounded-2xl bg-white border border-blue-100 shadow-lg hover:shadow-xl transition-all hover:border-blue-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F9DF8] to-[#BAE6FD] flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all">
            Experience the Difference
          </button>
        </motion.div>
      </div>
    </section>
  );
}
