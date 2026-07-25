'use client'

import { FormEvent, useEffect, useState } from 'react'
import { toast } from '@/components/ui/toast'

type Category = {
  id: string
  name: string
  slug: string
  description: string | null
  status: string
  sortOrder: number
  _count?: { products: number }
}

const emptyForm = {
  name: '',
  slug: '',
  description: '',
  status: 'Active',
  sortOrder: 0,
}

export default function AdminCategoriesPage() {
  const [items, setItems] = useState<Category[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/categories')
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Failed to load', 'error')
        return
      }
      setItems(json.items)
    } catch {
      toast('Failed to load categories', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void load()
  }, [])

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSaving(true)
    try {
      const url = editingId ? `/api/admin/categories/${editingId}` : '/api/admin/categories'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Save failed', 'error')
        return
      }
      toast(editingId ? 'Category updated' : 'Category created', 'success')
      setForm(emptyForm)
      setEditingId(null)
      void load()
    } catch {
      toast('Save failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  const edit = (item: Category) => {
    setEditingId(item.id)
    setForm({
      name: item.name,
      slug: item.slug,
      description: item.description || '',
      status: item.status,
      sortOrder: item.sortOrder,
    })
  }

  const remove = async (id: string) => {
    if (!confirm('Delete this category?')) return
    const res = await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' })
    const json = await res.json()
    if (!res.ok || !json.success) {
      toast(json.message || 'Delete failed', 'error')
      return
    }
    toast('Category deleted', 'success')
    void load()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Categories</h1>
        <p className="text-sm text-slate-500">Organize pharmaceutical products</p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2"
      >
        <input
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Category name"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <input
          value={form.slug}
          onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
          placeholder="Slug (optional)"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <input
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          placeholder="Description"
          className="rounded-xl border px-3 py-2 text-sm sm:col-span-2"
        />
        <select
          value={form.status}
          onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
          className="rounded-xl border px-3 py-2 text-sm"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <input
          type="number"
          value={form.sortOrder}
          onChange={(e) => setForm((f) => ({ ...f, sortOrder: Number(e.target.value) }))}
          placeholder="Sort order"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <div className="flex gap-2 sm:col-span-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-[#C62828] px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
          >
            {saving ? 'Saving…' : editingId ? 'Update category' : 'Add category'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null)
                setForm(emptyForm)
              }}
              className="rounded-xl border px-4 py-2 text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Products</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-slate-500">
                  Loading…
                </td>
              </tr>
            )}
            {items.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3 text-slate-500">{item.slug}</td>
                <td className="px-4 py-3">{item.status}</td>
                <td className="px-4 py-3">{item._count?.products ?? 0}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button type="button" onClick={() => edit(item)} className="text-[#C62828]">
                      Edit
                    </button>
                    <button type="button" onClick={() => remove(item.id)} className="text-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
