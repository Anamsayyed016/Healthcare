'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Company',
      href: '#',
      submenu: [
        { label: 'About Us', href: '/about' },
        { label: 'Vision & Mission', href: '/about#vision' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Advisory Board', href: '/about#advisory' },
      ],
    },
    {
      label: 'Products',
      href: '/products',
      submenu: [
        { label: 'All Products', href: '/products' },
        { label: 'Pharmaceuticals', href: '/products?cat=pharma' },
        { label: 'Diagnostics', href: '/products?cat=diagnostics' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'All Services', href: '/services' },
        { label: 'Telemedicine', href: '/services#telemedicine' },
        { label: 'Research', href: '/services#research' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4F9DF8] to-[#4F9DF8]/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">HC</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-slate-900">HealthCare+</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 group"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 hover:opacity-100 hover:visible">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-3 text-sm text-slate-900 hover:bg-slate-50 hover:text-[#4F9DF8] transition-all rounded-lg mx-1"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-[#4F9DF8] hover:bg-blue-50 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#4F9DF8] to-[#4ADE80] text-white hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 border-t border-slate-100"
            >
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          openMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && openMenu === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-[#4F9DF8] transition-colors rounded-lg hover:bg-slate-50"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
