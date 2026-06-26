'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Pill, TestTube, Activity } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'CardioGuard Pro',
      category: 'Cardiovascular',
      description: 'Advanced cardiac medication for comprehensive heart health management and optimal cardiovascular function.',
      icon: Activity,
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 2,
      name: 'RespiCare Plus',
      category: 'Respiratory',
      description: 'Innovative respiratory therapy solution for enhanced lung function and breathing optimization.',
      icon: Pill,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      name: 'NeuroBalance',
      category: 'Neurology',
      description: 'Cutting-edge neurological treatment for neurological disorders and optimal brain health.',
      icon: TestTube,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 4,
      name: 'ImmuneShield',
      category: 'Immunology',
      description: 'Revolutionary immune support formula designed to strengthen and optimize immune system function.',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      name: 'OsteoBuild',
      category: 'Orthopedics',
      description: 'Premium bone health supplement for stronger skeletal system and improved joint mobility.',
      icon: Pill,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      name: 'DermaRevive',
      category: 'Dermatology',
      description: 'Advanced skin treatment line combining cutting-edge dermatology with natural ingredients.',
      icon: TestTube,
      color: 'from-pink-500 to-rose-500',
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
    <section className="py-20 sm:py-32 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
          Our <span className="text-[#4F9DF8]">Products</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Premium pharmaceutical and healthcare solutions for optimal wellness
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-slate-300 flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Category Badge */}
                  <span className="inline-flex w-fit px-3 py-1 rounded-full bg-blue-50 text-xs font-semibold text-[#4F9DF8] mb-4">
                    {product.category}
                  </span>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200">
                    <button className="flex-1 px-4 py-2 rounded-lg bg-blue-50 text-[#4F9DF8] font-semibold hover:bg-blue-100 transition-colors text-sm">
                      Learn More
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 group/btn">
                      Enquiry
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
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
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto group">
            View All Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
