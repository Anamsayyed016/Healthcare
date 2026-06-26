'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPreviewSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Healthcare+ Center, Medical District, Metro City',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (800) 123-4567',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@healthcare-plus.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '24/7 Emergency | 9 AM - 6 PM Consultations',
      color: 'from-orange-500 to-red-500',
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
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Get In <span className="text-[#4F9DF8]">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all hover:border-slate-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form & Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <form className="space-y-6 bg-blue-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900">Send Message</h3>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name
                    </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#4F9DF8] transition-colors"
                />
              </div>
              <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address
                    </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#4F9DF8] transition-colors"
                />
              </div>
              <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message
                    </label>
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#4F9DF8] transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all">
                Send Message
              </button>
            </div>
          </form>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-96">
            <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-semibold">Google Maps Placeholder</p>
                <p className="text-sm text-slate-500">Embedded map coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
