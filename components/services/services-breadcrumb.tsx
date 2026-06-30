'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServicesBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <ol className="flex items-center gap-2 text-sm text-[#64748B]">
        <li>
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight size={14} className="text-[#CBD5E1]" />
        </li>
        <li className="font-medium text-[#0F172A]">Services</li>
      </ol>
    </nav>
  );
}
