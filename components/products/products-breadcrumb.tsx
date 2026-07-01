import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ProductsBreadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 pb-1 pt-4 sm:px-6 lg:px-8"
    >
      <ol className="flex items-center gap-2 text-sm text-[#64748B]">
        <li>
          <Link href="/" className="transition-colors hover:text-[#3B82F6]">
            Home
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight size={14} className="text-[#CBD5E1]" />
        </li>
        <li className="font-medium text-[#0F172A]">Products</li>
      </ol>
    </nav>
  );
}
