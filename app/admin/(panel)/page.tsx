'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from '@/components/ui/toast'

type DashboardData = {
  stats: {
    totalProducts: number
    activeProducts: number
    inactiveProducts: number
    draftProducts: number
    categories: number
    totalEnquiries: number
    todayEnquiries: number
    monthlyEnquiries: number
  }
  recentProducts: Array<{
    id: string
    name: string
    slug: string
    status: string
    categoryName: string
    createdAt: string
  }>
  recentEnquiries: Array<{
    id: string
    fullName: string
    email: string
    subject: string
    status: string
    createdAt: string
  }>
  charts: {
    monthlyEnquiries: Array<{ month: string; count: number }>
    productsByCategory: Array<{ category: string; count: number }>
  }
}

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/admin/dashboard')
        const json = await res.json()
        if (!res.ok || !json.success) {
          toast(json.message || 'Failed to load dashboard', 'error')
          return
        }
        setData(json)
      } catch {
        toast('Failed to load dashboard', 'error')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return <p className="text-sm text-slate-500">Loading dashboard…</p>
  }

  if (!data) {
    return <p className="text-sm text-red-600">Unable to load dashboard.</p>
  }

  const cards = [
    { label: 'Total Products', value: data.stats.totalProducts },
    { label: 'Active Products', value: data.stats.activeProducts },
    { label: 'Inactive Products', value: data.stats.inactiveProducts },
    { label: 'Categories', value: data.stats.categories },
    { label: 'Total Enquiries', value: data.stats.totalEnquiries },
    { label: "Today's Enquiries", value: data.stats.todayEnquiries },
    { label: 'Monthly Enquiries', value: data.stats.monthlyEnquiries },
    { label: 'Draft Products', value: data.stats.draftProducts },
  ]

  const maxMonth = Math.max(1, ...data.charts.monthlyEnquiries.map((m) => m.count))
  const maxCat = Math.max(1, ...data.charts.productsByCategory.map((c) => c.count))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">PharmEFC CMS overview</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {card.label}
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Monthly Enquiries</h2>
          <div className="mt-4 space-y-3">
            {data.charts.monthlyEnquiries.map((row) => (
              <div key={row.month}>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>{row.month}</span>
                  <span>{row.count}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-[#C62828]"
                    style={{ width: `${(row.count / maxMonth) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Products by Category</h2>
          <div className="mt-4 space-y-3">
            {data.charts.productsByCategory.length === 0 && (
              <p className="text-sm text-slate-500">No products in database yet.</p>
            )}
            {data.charts.productsByCategory.map((row) => (
              <div key={row.category}>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>{row.category}</span>
                  <span>{row.count}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-slate-800"
                    style={{ width: `${(row.count / maxCat) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/products/new"
          className="rounded-xl bg-[#C62828] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Add Product
        </Link>
        <Link
          href="/admin/enquiries"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold"
        >
          View Enquiries
        </Link>
        <Link
          href="/admin/categories"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold"
        >
          Manage Categories
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Recent Products</h2>
          <ul className="mt-4 divide-y divide-slate-100">
            {data.recentProducts.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.categoryName}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{item.status}</span>
              </li>
            ))}
            {data.recentProducts.length === 0 && (
              <li className="py-3 text-sm text-slate-500">No products yet.</li>
            )}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold">Recent Enquiries</h2>
          <ul className="mt-4 divide-y divide-slate-100">
            {data.recentEnquiries.map((item) => (
              <li key={item.id} className="py-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{item.fullName}</p>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{item.status}</span>
                </div>
                <p className="text-xs text-slate-500">{item.subject}</p>
              </li>
            ))}
            {data.recentEnquiries.length === 0 && (
              <li className="py-3 text-sm text-slate-500">No enquiries yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
