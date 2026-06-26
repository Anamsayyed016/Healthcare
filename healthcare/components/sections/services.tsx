'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Award, Heart, Brain, Stethoscope } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Telemedicine',
      description: 'Connect with doctors from home for convenient, accessible healthcare consultation.',
      icon: Users,
      benefits: ['24/7 Availability', 'Expert Doctors', 'Prescription Online'],
    },
    {
      title: 'Emergency Care',
      description: 'Rapid response emergency medical services for critical health situations.',
      icon: Zap,
      benefits: ['Rapid Response', 'ICU Ready', 'Trauma Center'],
    },
    {
      title: 'Preventive Health',
      description: 'Comprehensive wellness programs designed to prevent diseases and maintain health.',
      icon: Award,
      benefits: ['Health Screening', 'Wellness Plans', 'Nutrition Guide'],
    },
    {
      title: 'Cardiac Care',
      description: 'Specialized cardiovascular services with advanced diagnostic equipment.',
      icon: Heart,
      benefits: ['ECG Service', 'Stress Test', 'Cardiology Consult'],
    },
    {
      title: 'Neurology',
      description: 'Expert neurological services for brain and nervous system disorders.',
      icon: Brain,
      benefits: ['Brain Imaging', 'Neurology Consultation', 'Rehabilitation'],
    },
    {
      title: 'General Medicine',
      description: 'Comprehensive medical care covering diverse health conditions and wellness.',
      icon: Stethoscope,
      benefits: ['OPD Services', 'Lab Tests', 'Follow-up Care'],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Healthcare <span className="text-[#4F9DF8]">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive medical services for every health need
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full rounded-3xl border border-blue-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all hover:border-blue-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F9DF8] to-[#BAE6FD] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Benefits */}
          <div className="space-y-2 mb-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-6 w-full px-4 py-2 rounded-lg bg-blue-50 text-[#4F9DF8] font-semibold hover:bg-blue-100 transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
