'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from '@/components/ui/toast'

type ProductRow = {
  id: string
  name: string
  slug: string
  categoryName: string
  status: string
  featured: boolean
  mainImage: string | null
  updatedAt: string
}

export default function AdminProductsPage() {
  const [items, setItems] = useState<ProductRow[]>([])
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (q) params.set('q', q)
      if (status) params.set('status', status)
      const res = await fetch(`/api/admin/products?${params}`)
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Failed to load', 'error')
        return
      }
      setItems(json.items)
    } catch {
      toast('Failed to load products', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void load()
  }, [])

  const remove = async (id: string, name: string) => {
    const ok = window.confirm(
      `Delete “${name}” permanently?\n\nThis removes it from the CMS catalogue. This cannot be undone.`,
    )
    if (!ok) return
    const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    const json = await res.json()
    if (!res.ok || !json.success) {
      toast(json.message || 'Delete failed', 'error')
      return
    }
    toast('Product deleted', 'success')
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const duplicate = async (id: string) => {
    const res = await fetch(`/api/admin/products/${id}`)
    const json = await res.json()
    if (!res.ok || !json.success) {
      toast('Could not duplicate', 'error')
      return
    }
    const item = json.item
    const createRes = await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...item,
        name: `${item.name} (Copy)`,
        slug: `${item.slug}-copy-${Date.now().toString().slice(-4)}`,
        status: 'Draft',
        featured: false,
      }),
    })
    const created = await createRes.json()
    if (!createRes.ok || !created.success) {
      toast(created.message || 'Duplicate failed', 'error')
      return
    }
    toast('Product duplicated as draft', 'success')
    void load()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-slate-500">Manage pharmaceutical catalogue</p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded-xl bg-[#C62828] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Add product
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 rounded-2xl border bg-white p-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products…"
          className="min-w-[200px] flex-1 rounded-xl border px-3 py-2 text-sm"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
        >
          <option value="">All statuses</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="button"
          onClick={() => void load()}
          className="rounded-xl border px-4 py-2 text-sm font-semibold"
        >
          Apply
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-slate-500">
                  Loading…
                </td>
              </tr>
            )}
            {items.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {item.mainImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.mainImage}
                        alt=""
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-lg bg-slate-100" />
                    )}
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{item.categoryName}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
                    {item.status}
                    {item.featured ? ' · Featured' : ''}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/admin/products/${item.id}`} className="text-[#C62828]">
                      Edit
                    </Link>
                    <a
                      href={`/products/${item.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600"
                    >
                      Preview
                    </a>
                    <button type="button" onClick={() => duplicate(item.id)} className="text-slate-600">
                      Duplicate
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(item.id, item.name)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!loading && items.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-slate-500">
                  No CMS products yet. The public site still shows the static catalogue; published
                  CMS products will overlay matching slugs and add new ones.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
