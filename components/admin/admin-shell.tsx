'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Inbox,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { ToastHost, toast } from '@/components/ui/toast'

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/categories', label: 'Categories', icon: FolderTree },
  { href: '/admin/enquiries', label: 'Enquiries', icon: Inbox },
  { href: '/admin/settings', label: 'Website Settings', icon: Settings },
]

export default function AdminShell({
  children,
  userName,
}: {
  children: React.ReactNode
  userName: string
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const logout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    toast('Logged out', 'success')
    router.replace('/admin/login')
    router.refresh()
  }

  const NavLinks = () => (
    <nav className="space-y-1 px-3">
      {NAV.map(({ href, label, icon: Icon }) => {
        const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              active
                ? 'bg-[#C62828] text-white'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-slate-900">
      <ToastHost />
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">PharmEFC CMS</p>
          <p className="font-semibold">Admin</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-slate-200 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[#0F172A]/95 pt-16">
          <NavLinks />
          <div className="mt-6 px-6">
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm text-white"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-64 shrink-0 bg-[#0F172A] text-white lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-5 py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">PharmEFC</p>
            <h1 className="mt-1 text-lg font-semibold">Admin CMS</h1>
            <p className="mt-2 text-xs text-slate-400">{userName}</p>
          </div>
          <div className="flex-1 py-4">
            <NavLinks />
          </div>
          <div className="border-t border-white/10 p-4">
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
