'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from '@/components/ui/toast'
import ImageUploader from '@/components/admin/image-uploader'

type Category = { id: string; name: string; status: string }

type ProductFormState = {
  name: string
  brandName: string
  slug: string
  categoryId: string
  categoryName: string
  categoryBadge: string
  icon: string
  shortDescription: string
  longDescription: string
  composition: string
  benefits: string
  indications: string
  suitableFor: string
  cardHighlights: string
  packSize: string
  dosage: string
  storage: string
  prescriptionType: string
  manufacturing: string
  qualityStandards: string
  relatedSlugs: string
  mainImage: string
  gallery: string[]
  brochure: string
  featured: boolean
  status: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  sortOrder: number
}

const empty: ProductFormState = {
  name: '',
  brandName: '',
  slug: '',
  categoryId: '',
  categoryName: '',
  categoryBadge: '',
  icon: 'pill',
  shortDescription: '',
  longDescription: '',
  composition: '',
  benefits: '',
  indications: '',
  suitableFor: '',
  cardHighlights: '',
  packSize: '',
  dosage: '',
  storage: '',
  prescriptionType: '',
  manufacturing: '',
  qualityStandards: '',
  relatedSlugs: '',
  mainImage: '',
  gallery: [],
  brochure: '',
  featured: false,
  status: 'Draft',
  metaTitle: '',
  metaDescription: '',
  metaKeywords: '',
  sortOrder: 0,
}

function linesToText(values?: string[] | null) {
  return (values || []).join('\n')
}

export default function ProductEditor({ productId }: { productId?: string }) {
  const router = useRouter()
  const [form, setForm] = useState<ProductFormState>(empty)
  const [categories, setCategories] = useState<Category[]>([])
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(Boolean(productId))

  useEffect(() => {
    ;(async () => {
      const catRes = await fetch('/api/admin/categories')
      const catJson = await catRes.json()
      if (catRes.ok && catJson.success) {
        setCategories(catJson.items.filter((c: Category) => c.status === 'Active'))
      }

      if (!productId) return
      const res = await fetch(`/api/admin/products/${productId}`)
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Failed to load product', 'error')
        setLoading(false)
        return
      }
      const item = json.item
      setForm({
        name: item.name || '',
        brandName: item.brandName || '',
        slug: item.slug || '',
        categoryId: item.categoryId || '',
        categoryName: item.categoryName || '',
        categoryBadge: item.categoryBadge || '',
        icon: item.icon || 'pill',
        shortDescription: item.shortDescription || '',
        longDescription: item.longDescription || '',
        composition: linesToText(item.composition),
        benefits: linesToText(item.benefits),
        indications: linesToText(item.indications),
        suitableFor: linesToText(item.suitableFor),
        cardHighlights: linesToText(item.cardHighlights),
        packSize: item.packSize || '',
        dosage: item.dosage || '',
        storage: item.storage || '',
        prescriptionType: item.prescriptionType || '',
        manufacturing: item.manufacturing || '',
        qualityStandards: item.qualityStandards || '',
        relatedSlugs: linesToText(item.relatedSlugs),
        mainImage: item.mainImage || '',
        gallery: item.gallery || [],
        brochure: item.brochure || '',
        featured: Boolean(item.featured),
        status: item.status || 'Draft',
        metaTitle: item.metaTitle || '',
        metaDescription: item.metaDescription || '',
        metaKeywords: item.metaKeywords || '',
        sortOrder: item.sortOrder || 0,
      })
      setLoading(false)
    })()
  }, [productId])

  const setField = <K extends keyof ProductFormState>(key: K, value: ProductFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSaving(true)
    try {
      const payload = {
        ...form,
        composition: form.composition,
        benefits: form.benefits,
        indications: form.indications,
        suitableFor: form.suitableFor,
        cardHighlights: form.cardHighlights,
        relatedSlugs: form.relatedSlugs,
      }
      const url = productId ? `/api/admin/products/${productId}` : '/api/admin/products'
      const method = productId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Save failed', 'error')
        return
      }
      toast(productId ? 'Product updated' : 'Product created', 'success')
      router.push('/admin/products')
      router.refresh()
    } catch {
      toast('Save failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-sm text-slate-500">Loading product…</p>

  const field = (
    label: string,
    key: keyof ProductFormState,
    opts?: { textarea?: boolean; type?: string },
  ) => (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-slate-700">{label}</span>
      {opts?.textarea ? (
        <textarea
          value={String(form[key] ?? '')}
          onChange={(e) => setField(key, e.target.value as ProductFormState[typeof key])}
          rows={4}
          className="w-full rounded-xl border px-3 py-2"
        />
      ) : (
        <input
          type={opts?.type || 'text'}
          value={String(form[key] ?? '')}
          onChange={(e) =>
            setField(
              key,
              (opts?.type === 'number' ? Number(e.target.value) : e.target.value) as ProductFormState[typeof key],
            )
          }
          className="w-full rounded-xl border px-3 py-2"
        />
      )}
    </label>
  )

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">{productId ? 'Edit product' : 'New product'}</h1>
          <p className="text-sm text-slate-500">
            Published products replace the static catalogue on the public site.
          </p>
        </div>
        <Link href="/admin/products" className="text-sm text-slate-600">
          Back to list
        </Link>
      </div>

      <div className="grid gap-4 rounded-2xl border bg-white p-5 lg:grid-cols-2">
        {field('Product name *', 'name')}
        {field('Brand name', 'brandName')}
        {field('Slug', 'slug')}
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-700">Category</span>
          <select
            value={form.categoryId}
            onChange={(e) => {
              const cat = categories.find((c) => c.id === e.target.value)
              setForm((prev) => ({
                ...prev,
                categoryId: e.target.value,
                categoryName: cat?.name || prev.categoryName,
              }))
            }}
            className="w-full rounded-xl border px-3 py-2"
          >
            <option value="">Select category…</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        {field('Category name (fallback)', 'categoryName')}
        {field('Category badge', 'categoryBadge')}
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-700">Icon</span>
          <select
            value={form.icon}
            onChange={(e) => setField('icon', e.target.value)}
            className="w-full rounded-xl border px-3 py-2"
          >
            <option value="pill">pill</option>
            <option value="tablets">tablets</option>
            <option value="flask">flask</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-700">Status</span>
          <select
            value={form.status}
            onChange={(e) => setField('status', e.target.value)}
            className="w-full rounded-xl border px-3 py-2"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        {field('Short description *', 'shortDescription', { textarea: true })}
        {field('Long description', 'longDescription', { textarea: true })}
        {field('Composition (one per line)', 'composition', { textarea: true })}
        {field('Benefits (one per line)', 'benefits', { textarea: true })}
        {field('Indications (one per line)', 'indications', { textarea: true })}
        {field('Suitable for (one per line)', 'suitableFor', { textarea: true })}
        {field('Card highlights (one per line)', 'cardHighlights', { textarea: true })}
        {field('Pack size', 'packSize')}
        {field('Dosage', 'dosage')}
        {field('Storage', 'storage')}
        {field('Prescription type', 'prescriptionType')}
        {field('Manufacturing', 'manufacturing', { textarea: true })}
        {field('Quality standards', 'qualityStandards', { textarea: true })}
        {field('Related product slugs (one per line)', 'relatedSlugs', { textarea: true })}
        {field('Brochure URL', 'brochure')}
        {field('Meta title', 'metaTitle')}
        {field('Meta description', 'metaDescription', { textarea: true })}
        {field('Meta keywords', 'metaKeywords')}
        {field('Sort order', 'sortOrder', { type: 'number' })}
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setField('featured', e.target.checked)}
          />
          Featured product
        </label>
      </div>

      <div className="grid gap-4 rounded-2xl border bg-white p-5 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium">Main image</p>
          <ImageUploader
            folder="pharmefc/products"
            onUploaded={(url) => setField('mainImage', url)}
          />
          {form.mainImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.mainImage} alt="" className="mt-3 h-32 rounded-xl object-cover" />
          )}
          <input
            value={form.mainImage}
            onChange={(e) => setField('mainImage', e.target.value)}
            placeholder="Or paste image URL"
            className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Gallery images</p>
          <ImageUploader
            folder="pharmefc/products"
            label="Add gallery image"
            onUploaded={(url) => setField('gallery', [...form.gallery, url])}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {form.gallery.map((url, index) => (
              <div key={`${url}-${index}`} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="h-20 w-20 rounded-lg object-cover" />
                <button
                  type="button"
                  className="absolute -right-1 -top-1 rounded-full bg-red-600 px-1.5 text-xs text-white"
                  onClick={() =>
                    setField(
                      'gallery',
                      form.gallery.filter((_, i) => i !== index),
                    )
                  }
                >
                  ×
                </button>
                <div className="mt-1 flex gap-1">
                  <button
                    type="button"
                    className="text-[10px] text-slate-500"
                    onClick={() => {
                      if (index === 0) return
                      const next = [...form.gallery]
                      ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
                      setField('gallery', next)
                    }}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="text-[10px] text-slate-500"
                    onClick={() => {
                      if (index >= form.gallery.length - 1) return
                      const next = [...form.gallery]
                      ;[next[index + 1], next[index]] = [next[index], next[index + 1]]
                      setField('gallery', next)
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-[#C62828] px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
      >
        {saving ? 'Saving…' : productId ? 'Update product' : 'Create product'}
      </button>
    </form>
  )
}
