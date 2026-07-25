'use client'

import { useCallback, useEffect, useState } from 'react'
import { toast } from '@/components/ui/toast'

type Enquiry = {
  id: string
  fullName: string
  company: string | null
  email: string
  phone: string
  subject: string
  service: string
  message: string
  status: string
  createdAt: string
}

const STATUSES = ['New', 'Contacted', 'Interested', 'Quotation Sent', 'Closed', 'Spam']

export default function AdminEnquiriesPage() {
  const [items, setItems] = useState<Enquiry[]>([])
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Enquiry | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(page), pageSize: '20' })
      if (q) params.set('q', q)
      if (status) params.set('status', status)
      const res = await fetch(`/api/admin/enquiries?${params}`)
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Failed to load', 'error')
        return
      }
      setItems(json.items)
      setTotalPages(json.pagination.totalPages)
    } catch {
      toast('Failed to load enquiries', 'error')
    } finally {
      setLoading(false)
    }
  }, [page, q, status])

  useEffect(() => {
    void load()
  }, [load])

  const updateStatus = async (id: string, nextStatus: string) => {
    const res = await fetch(`/api/admin/enquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus }),
    })
    const json = await res.json()
    if (!res.ok || !json.success) {
      toast(json.message || 'Update failed', 'error')
      return
    }
    toast('Status updated', 'success')
    void load()
    if (selected?.id === id) setSelected(json.item)
  }

  const remove = async (id: string) => {
    if (!confirm('Delete this enquiry?')) return
    const res = await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE' })
    const json = await res.json()
    if (!res.ok || !json.success) {
      toast(json.message || 'Delete failed', 'error')
      return
    }
    toast('Enquiry deleted', 'success')
    setSelected(null)
    void load()
  }

  const exportCsv = () => {
    const params = new URLSearchParams({ export: 'csv' })
    if (q) params.set('q', q)
    if (status) params.set('status', status)
    window.open(`/api/admin/enquiries?${params}`, '_blank')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Enquiries</h1>
          <p className="text-sm text-slate-500">Website contact form submissions</p>
        </div>
        <button
          type="button"
          onClick={exportCsv}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold"
        >
          Export CSV
        </button>
      </div>

      <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-4">
        <input
          value={q}
          onChange={(e) => {
            setPage(1)
            setQ(e.target.value)
          }}
          placeholder="Search name, email, phone…"
          className="min-w-[220px] flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <select
          value={status}
          onChange={(e) => {
            setPage(1)
            setStatus(e.target.value)
          }}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
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
              {!loading &&
                items.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer border-t border-slate-100 hover:bg-slate-50"
                    onClick={() => setSelected(item)}
                  >
                    <td className="px-4 py-3 font-medium">{item.fullName}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.subject}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              {!loading && items.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-slate-500">
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="rounded-lg border px-3 py-1.5 text-sm disabled:opacity-40"
        >
          Previous
        </button>
        <span className="text-sm text-slate-500">
          Page {page} of {totalPages}
        </span>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="rounded-lg border px-3 py-1.5 text-sm disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{selected.fullName}</h2>
                <p className="text-sm text-slate-500">{selected.email}</p>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="text-slate-400">
                Close
              </button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="text-slate-500">Company:</span> {selected.company || '—'}
              </p>
              <p>
                <span className="text-slate-500">Phone:</span> {selected.phone}
              </p>
              <p>
                <span className="text-slate-500">Service:</span> {selected.service}
              </p>
              <p>
                <span className="text-slate-500">Subject:</span> {selected.subject}
              </p>
              <p className="whitespace-pre-wrap rounded-xl bg-slate-50 p-3">{selected.message}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <select
                value={selected.status}
                onChange={(e) => updateStatus(selected.id, e.target.value)}
                className="rounded-xl border px-3 py-2 text-sm"
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => remove(selected.id)}
                className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
