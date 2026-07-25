'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductDetailContent from '@/app/products/[slug]/product-detail'
import type { Product } from '@/lib/data/products'
import { ADMIN_PRODUCT_PREVIEW_KEY } from '@/lib/admin/map-product-form'

/**
 * Authenticated admin-only detail preview.
 * Renders the exact public product detail component with draft form data.
 */
export default function AdminProductDetailPreviewPage() {
  const [product, setProduct] = useState<Product | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(ADMIN_PRODUCT_PREVIEW_KEY)
      if (!raw) {
        setMissing(true)
        return
      }
      setProduct(JSON.parse(raw) as Product)
    } catch {
      setMissing(true)
    }
  }, [])

  if (missing) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F7F8FA] px-4 text-center">
        <p className="text-sm text-slate-600">No draft preview found. Open Preview from the product editor.</p>
        <Link href="/admin/products" className="text-sm font-semibold text-[#C62828] underline">
          Back to products
        </Link>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F8FA] text-sm text-slate-500">
        Loading preview…
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs font-medium text-amber-900">
        Admin preview — this is the live product detail layout.{' '}
        <Link href="/admin/products" className="underline">
          Back to CMS
        </Link>
      </div>
      <ProductDetailContent product={product} relatedProducts={[]} />
    </div>
  )
}
