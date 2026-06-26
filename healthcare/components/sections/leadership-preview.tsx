'use client';

import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

export default function LeadershipPreviewSection() {
  const leaders = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Founder & Managing Director',
      bio: 'Visionary healthcare entrepreneur with 25+ years in pharmaceutical innovation.',
      education: 'MD, MBBS, MBA (Healthcare)',
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Chief Medical Officer',
      bio: 'Leading clinical research and medical excellence across all departments.',
      education: 'MD, PhD (Medical Sciences)',
    },
    {
      name: 'Arjun Mehta',
      title: 'Chief Business Officer',
      bio: 'Strategic business development and market expansion expert.',
      education: 'MBA (IIM), B.Tech (Engineering)',
    },
    {
      name: 'Dr. Aisha Patel',
      title: 'Chief Research Officer',
      bio: 'Pioneering pharmaceutical research and product development initiatives.',
      education: 'PhD (Chemistry), MBBS',
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
            Executive <span className="text-[#4F9DF8]">Leadership</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet our world-class leadership team driving innovation and excellence
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-blue-300">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#4F9DF8]/20 to-[#4ADE80]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-[#4F9DF8]/30">
                    {leader.name.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Name */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {leader.name}
                    </h3>
                    <p className="text-sm text-[#4F9DF8] font-semibold">
                      {leader.title}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Education */}
                  <div className="text-xs text-slate-700 space-y-1 pt-4 border-t border-slate-200">
                    <p className="font-semibold text-slate-900">Education</p>
                    <p>{leader.education}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-[#4F9DF8] rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold">
                      <Mail size={16} />
                      <span className="hidden sm:inline">Contact</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors text-sm font-semibold">
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all">
            View Full Leadership Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
