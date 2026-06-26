'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Pill, Stethoscope } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900/50 to-slate-900 py-20 sm:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Pill Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm">
              <Pill size={16} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">
                Next Generation Healthcare
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Premium Healthcare
            <span className="block bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence Reimagined
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Experience world-class medical excellence with cutting-edge technology, compassionate care, and innovative pharmaceutical solutions designed for your wellbeing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-[#4F9DF8] to-[#4F9DF8]/80 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Schedule Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white border-2 border-blue-200 text-[#4F9DF8] font-semibold hover:bg-blue-50 transition-all">
              Explore Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            {[
              { number: '25+', label: 'Years Excellence' },
              { number: '50K+', label: 'Patients Served' },
              { number: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image/Illustration Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-linear-to-r from-[#4F9DF8]/10 to-[#4ADE80]/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-linear-to-br from-blue-100 to-emerald-100 rounded-3xl p-12 border border-white/80 shadow-2xl">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#4F9DF8] to-[#BAE6FD] flex items-center justify-center shadow-lg">
                    <Stethoscope className="text-white" size={32} />
                  </div>
                  <p className="text-sm font-semibold text-white">Advanced Diagnostics</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <Pill className="text-white" size={32} />
                  </div>
                  <p className="text-sm font-semibold text-white">Pharma Solutions</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                    <Stethoscope className="text-white" size={32} />
                  </div>
                  <p className="text-sm font-semibold text-white">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
