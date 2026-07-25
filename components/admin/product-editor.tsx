'use client'

import { FormEvent, useEffect, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ChevronDown,
  ExternalLink,
  Globe,
  Package,
  Pill,
  Settings2,
} from 'lucide-react'
import { toast } from '@/components/ui/toast'
import ImageUploader from '@/components/admin/image-uploader'
import CatalogueProductCard from '@/components/products/catalogue-product-card'
import {
  ADMIN_PRODUCT_PREVIEW_KEY,
  mapAdminFormToPublicProduct,
} from '@/lib/admin/map-product-form'

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

const inputClass =
  'admin-login-input h-12 w-full rounded-xl border px-3.5 text-sm outline-none transition-shadow'
const textareaClass =
  'admin-login-input w-full rounded-xl border px-3.5 py-3 text-sm outline-none transition-shadow'
const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

function linesToText(values?: string[] | null) {
  return (values || []).join('\n')
}

function SectionCard({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactNode
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="mb-6 flex items-start gap-3 border-b border-slate-100 pb-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <p className="mt-0.5 text-sm text-slate-500">{description}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

function statusBadgeClass(status: string) {
  if (status === 'Published') return 'bg-emerald-50 text-emerald-700 ring-emerald-200'
  if (status === 'Inactive') return 'bg-slate-100 text-slate-600 ring-slate-200'
  return 'bg-amber-50 text-amber-700 ring-amber-200'
}

function isActiveCategory(status: string) {
  return status.trim().toLowerCase() === 'active'
}

export default function ProductEditor({ productId }: { productId?: string }) {
  const router = useRouter()
  const [form, setForm] = useState<ProductFormState>(empty)
  const [categories, setCategories] = useState<Category[]>([])
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [categoriesError, setCategoriesError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(Boolean(productId))
  const [advancedOpen, setAdvancedOpen] = useState(Boolean(productId))

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      setCategoriesLoading(true)
      setCategoriesError(null)
      try {
        const catRes = await fetch('/api/admin/categories')
        const catJson = await catRes.json().catch(() => ({}))
        if (!catRes.ok || !catJson.success) {
          if (!cancelled) {
            setCategories([])
            setCategoriesError(catJson.message || 'Failed to load categories')
            toast(catJson.message || 'Failed to load categories', 'error')
          }
        } else {
          const items = Array.isArray(catJson.items) ? (catJson.items as Category[]) : []
          // Prefer Active, but never hide all rows if status casing differs.
          const active = items.filter((c) => isActiveCategory(c.status))
          if (!cancelled) {
            setCategories(active.length > 0 ? active : items)
            if (items.length === 0) {
              setCategoriesError('No categories yet — create one under Categories.')
            }
          }
        }
      } catch {
        if (!cancelled) {
          setCategories([])
          setCategoriesError('Failed to load categories')
          toast('Failed to load categories', 'error')
        }
      } finally {
        if (!cancelled) setCategoriesLoading(false)
      }

      if (!productId) return
      const res = await fetch(`/api/admin/products/${productId}`)
      const json = await res.json()
      if (cancelled) return
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

    return () => {
      cancelled = true
    }
  }, [productId])

  const setField = <K extends keyof ProductFormState>(key: K, value: ProductFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const saveProduct = async (statusOverride?: string) => {
    setSaving(true)
    try {
      const nextStatus = statusOverride || form.status
      const payload = {
        ...form,
        status: nextStatus,
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
      setForm((prev) => ({ ...prev, status: nextStatus, slug: json.item?.slug || prev.slug }))
      toast(
        nextStatus === 'Published'
          ? 'Product published'
          : productId
            ? 'Product updated'
            : 'Draft saved',
        'success',
      )
      if (!productId && json.item?.id) {
        router.replace(`/admin/products/${json.item.id}`)
        router.refresh()
        return
      }
      router.refresh()
    } catch {
      toast('Save failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await saveProduct()
  }

  if (loading) return <p className="text-sm text-slate-500">Loading product…</p>

  const selectedCategory =
    categories.find((c) => c.id === form.categoryId)?.name ||
    form.categoryName ||
    form.categoryBadge ||
    'Uncategorized'

  const livePreviewProduct = mapAdminFormToPublicProduct(form, selectedCategory)

  const openPreview = () => {
    const previewProduct = mapAdminFormToPublicProduct(form, selectedCategory)
    try {
      // localStorage is shared across tabs; sessionStorage is NOT (window.open = empty).
      localStorage.setItem(ADMIN_PRODUCT_PREVIEW_KEY, JSON.stringify(previewProduct))
    } catch {
      toast('Could not open preview', 'error')
      return
    }
    window.open('/admin/preview/product', '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={onSubmit} className="pb-28">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {productId ? 'Edit product' : 'Create product'}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Fill the basics to publish quickly. Open advanced settings for full product details.
          </p>
        </div>
        <Link
          href="/admin/products"
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Back to list
        </Link>
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          <SectionCard
            icon={<Package size={20} />}
            title="Basic Product Information"
            description="Everything you need to publish a simple product."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className={labelClass}>
                  Product Name <span className="text-[#C62828]">*</span>
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Bone EFC Tablet"
                />
              </label>

              <label>
                <span className={labelClass}>Brand Name</span>
                <input
                  value={form.brandName}
                  onChange={(e) => setField('brandName', e.target.value)}
                  className={inputClass}
                  placeholder="PharmEFC"
                />
              </label>

              <label>
                <span className={labelClass}>Category</span>
                <select
                  value={form.categoryId}
                  disabled={categoriesLoading}
                  onChange={(e) => {
                    const cat = categories.find((c) => c.id === e.target.value)
                    setForm((prev) => ({
                      ...prev,
                      categoryId: e.target.value,
                      categoryName: cat?.name || prev.categoryName,
                      categoryBadge: cat?.name || prev.categoryBadge,
                    }))
                  }}
                  className={inputClass}
                >
                  <option value="">
                    {categoriesLoading ? 'Loading categories…' : 'Select category…'}
                  </option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                      {!isActiveCategory(c.status) ? ' (Inactive)' : ''}
                    </option>
                  ))}
                </select>
                {categoriesError && (
                  <p className="mt-1.5 text-xs text-amber-700">
                    {categoriesError}{' '}
                    <Link href="/admin/categories" className="font-semibold underline">
                      Manage categories
                    </Link>
                  </p>
                )}
                {!categoriesLoading && !categoriesError && categories.length === 0 && (
                  <p className="mt-1.5 text-xs text-slate-500">
                    No categories in the database yet.{' '}
                    <Link href="/admin/categories" className="font-semibold text-[#C62828] underline">
                      Create a category
                    </Link>
                  </p>
                )}
              </label>

              <label>
                <span className={labelClass}>Status</span>
                <select
                  value={form.status}
                  onChange={(e) => setField('status', e.target.value)}
                  className={inputClass}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className={labelClass}>
                  Short Description <span className="text-[#C62828]">*</span>
                </span>
                <textarea
                  required
                  rows={3}
                  value={form.shortDescription}
                  onChange={(e) => setField('shortDescription', e.target.value)}
                  className={textareaClass}
                  placeholder="Brief product summary shown on cards and listings"
                />
              </label>

              <div className="sm:col-span-2">
                <p className={labelClass}>Main Product Image</p>
                <ImageUploader
                  size="large"
                  folder="pharmefc/products"
                  label="Drag main product image here"
                  value={form.mainImage || undefined}
                  onUploaded={(url) => setField('mainImage', url)}
                  onClear={() => setField('mainImage', '')}
                />
                <input
                  value={form.mainImage}
                  onChange={(e) => setField('mainImage', e.target.value)}
                  placeholder="Or paste image URL"
                  className={`${inputClass} mt-3`}
                />
              </div>

              <div className="sm:col-span-2">
                <p className={labelClass}>Gallery Images</p>
                <ImageUploader
                  folder="pharmefc/products"
                  label="Add gallery image"
                  onUploaded={(url) => setField('gallery', [...form.gallery, url])}
                />
                {form.gallery.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {form.gallery.map((url, index) => (
                      <div
                        key={`${url}-${index}`}
                        className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={url} alt="" className="aspect-square w-full object-cover" />
                        <div className="flex items-center justify-between gap-1 border-t border-slate-100 px-2 py-1.5">
                          <div className="flex gap-1">
                            <button
                              type="button"
                              className="rounded px-1.5 text-xs text-slate-500 hover:bg-slate-100"
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
                              className="rounded px-1.5 text-xs text-slate-500 hover:bg-slate-100"
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
                          <button
                            type="button"
                            className="rounded px-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                            onClick={() =>
                              setField(
                                'gallery',
                                form.gallery.filter((_, i) => i !== index),
                              )
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SectionCard>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_-8px_rgba(15,23,42,0.08)]">
            <button
              type="button"
              onClick={() => setAdvancedOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left sm:px-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
                  <Settings2 size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Advanced Product Settings</p>
                  <p className="text-sm text-slate-500">
                    Details, SEO, brochure, featured, related products, and more
                  </p>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`shrink-0 text-slate-400 transition-transform ${advancedOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {advancedOpen && (
              <div className="space-y-8 border-t border-slate-100 px-6 pb-8 pt-8 sm:px-8">
                <SectionCard
                  icon={<Pill size={20} />}
                  title="Product Details"
                  description="Composition, usage guidance, and packaging information."
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Composition (one per line)</span>
                      <textarea
                        rows={4}
                        value={form.composition}
                        onChange={(e) => setField('composition', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Benefits (one per line)</span>
                      <textarea
                        rows={4}
                        value={form.benefits}
                        onChange={(e) => setField('benefits', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Indications (one per line)</span>
                      <textarea
                        rows={4}
                        value={form.indications}
                        onChange={(e) => setField('indications', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Suitable For (one per line)</span>
                      <textarea
                        rows={3}
                        value={form.suitableFor}
                        onChange={(e) => setField('suitableFor', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Dosage</span>
                      <input
                        value={form.dosage}
                        onChange={(e) => setField('dosage', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Storage</span>
                      <input
                        value={form.storage}
                        onChange={(e) => setField('storage', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Pack Size</span>
                      <input
                        value={form.packSize}
                        onChange={(e) => setField('packSize', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Prescription type</span>
                      <input
                        value={form.prescriptionType}
                        onChange={(e) => setField('prescriptionType', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Manufacturing</span>
                      <textarea
                        rows={3}
                        value={form.manufacturing}
                        onChange={(e) => setField('manufacturing', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Long description</span>
                      <textarea
                        rows={4}
                        value={form.longDescription}
                        onChange={(e) => setField('longDescription', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Card highlights (one per line)</span>
                      <textarea
                        rows={3}
                        value={form.cardHighlights}
                        onChange={(e) => setField('cardHighlights', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Quality standards</span>
                      <textarea
                        rows={3}
                        value={form.qualityStandards}
                        onChange={(e) => setField('qualityStandards', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                  </div>
                </SectionCard>

                <SectionCard
                  icon={<Globe size={20} />}
                  title="SEO"
                  description="Search visibility and product URL slug."
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Slug</span>
                      <input
                        value={form.slug}
                        onChange={(e) => setField('slug', e.target.value)}
                        className={inputClass}
                        placeholder="auto-generated from name if empty"
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Meta Title</span>
                      <input
                        value={form.metaTitle}
                        onChange={(e) => setField('metaTitle', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Meta Description</span>
                      <textarea
                        rows={3}
                        value={form.metaDescription}
                        onChange={(e) => setField('metaDescription', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Meta Keywords</span>
                      <input
                        value={form.metaKeywords}
                        onChange={(e) => setField('metaKeywords', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                  </div>
                </SectionCard>

                <SectionCard
                  icon={<Settings2 size={20} />}
                  title="Additional"
                  description="Brochure, featured flag, ordering, and related products."
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Brochure URL</span>
                      <input
                        value={form.brochure}
                        onChange={(e) => setField('brochure', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Sort Order</span>
                      <input
                        type="number"
                        value={form.sortOrder}
                        onChange={(e) => setField('sortOrder', Number(e.target.value))}
                        className={inputClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Icon</span>
                      <select
                        value={form.icon}
                        onChange={(e) => setField('icon', e.target.value)}
                        className={inputClass}
                      >
                        <option value="pill">pill</option>
                        <option value="tablets">tablets</option>
                        <option value="flask">flask</option>
                      </select>
                    </label>
                    <label>
                      <span className={labelClass}>Category name (fallback)</span>
                      <input
                        value={form.categoryName}
                        onChange={(e) => setField('categoryName', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label>
                      <span className={labelClass}>Category badge</span>
                      <input
                        value={form.categoryBadge}
                        onChange={(e) => setField('categoryBadge', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>Related Products (slugs, one per line)</span>
                      <textarea
                        rows={3}
                        value={form.relatedSlugs}
                        onChange={(e) => setField('relatedSlugs', e.target.value)}
                        className={textareaClass}
                      />
                    </label>
                    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                      <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(e) => setField('featured', e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-[#C62828]"
                      />
                      <span className="text-sm font-medium text-slate-700">Featured Product</span>
                    </label>
                  </div>
                </SectionCard>
              </div>
            )}
          </div>
        </div>

        <aside className="xl:sticky xl:top-6 xl:self-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.08)]">
            <div className="mb-4 flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Live preview
              </p>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${statusBadgeClass(form.status)}`}
              >
                {form.status}
              </span>
            </div>
            <div className="pointer-events-none origin-top scale-[0.92] sm:scale-100">
              <CatalogueProductCard product={livePreviewProduct} index={0} />
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Uses the same product card as /products. Updates as you type or upload images.
            </p>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            Status:{' '}
            <span className="font-semibold text-slate-800">{form.status}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={saving}
              onClick={() => void saveProduct('Draft')}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={openPreview}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <ExternalLink size={15} />
              Preview
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => void saveProduct('Published')}
              className="rounded-xl bg-[#C62828] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B71C1C] disabled:opacity-60"
            >
              {saving ? 'Saving…' : 'Publish Product'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
