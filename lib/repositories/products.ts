import type { Product as DbProduct } from '@prisma/client'
import type { Product, ProductIcon } from '@/lib/data/products'
import {
  products as staticProducts,
  productCategories as staticProductCategories,
  getProductBySlug as getStaticProductBySlug,
  getRelatedProducts as getStaticRelatedProducts,
} from '@/lib/data/products'
import { prisma } from '@/lib/prisma'

const VALID_ICONS: ProductIcon[] = ['pill', 'tablets', 'flask']

function toIcon(value: string | null | undefined): ProductIcon {
  if (value && VALID_ICONS.includes(value as ProductIcon)) {
    return value as ProductIcon
  }
  return 'pill'
}

/** Map a DB product row to the public Product shape used by existing UI. */
export function mapDbProductToPublic(row: DbProduct): Product {
  const gallery = row.gallery?.length ? row.gallery : undefined
  const main = row.mainImage || gallery?.[0] || undefined
  return {
    slug: row.slug,
    name: row.name,
    category: row.categoryName,
    categoryBadge: row.categoryBadge || undefined,
    icon: toIcon(row.icon),
    image: main,
    gallery,
    brochure: row.brochure || undefined,
    description: row.shortDescription,
    overview: row.longDescription || row.shortDescription,
    composition: row.composition || [],
    benefits: row.benefits || [],
    cardHighlights: row.cardHighlights?.length ? row.cardHighlights : undefined,
    suitableFor: row.suitableFor?.length ? row.suitableFor : undefined,
    indications: row.indications?.length ? row.indications : undefined,
    packSize: row.packSize || undefined,
    relatedProducts: row.relatedSlugs?.length ? row.relatedSlugs : undefined,
    manufacturing: row.manufacturing || '',
    qualityStandards: row.qualityStandards || row.manufacturing || '',
  }
}

/**
 * Merge static catalogue with published CMS rows.
 * - Static products never disappear when a CMS product is published.
 * - Matching slug → CMS row wins (admin override).
 * - CMS-only products (new slugs) are appended.
 */
function mergeStaticWithCms(staticList: Product[], cmsRows: DbProduct[]): Product[] {
  if (cmsRows.length === 0) return staticList

  const cmsMapped = cmsRows.map(mapDbProductToPublic)
  const cmsBySlug = new Map(cmsMapped.map((p) => [p.slug, p]))
  const used = new Set<string>()
  const merged: Product[] = []

  for (const product of staticList) {
    const override = cmsBySlug.get(product.slug)
    if (override) {
      merged.push(override)
      used.add(product.slug)
    } else {
      merged.push(product)
    }
  }

  for (const product of cmsMapped) {
    if (!used.has(product.slug)) merged.push(product)
  }

  return merged
}

async function fetchPublishedDbProducts(): Promise<DbProduct[]> {
  try {
    return await prisma.product.findMany({
      where: { status: 'Published' },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    })
  } catch {
    return []
  }
}

/**
 * Public catalogue:
 * Always keep static products, overlay/add published CMS products by slug.
 */
export async function getPublishedProducts(): Promise<Product[]> {
  const rows = await fetchPublishedDbProducts()
  return mergeStaticWithCms(staticProducts, rows)
}

export async function getPublishedProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    const row = await prisma.product.findFirst({
      where: { slug, status: 'Published' },
    })
    if (row) return mapDbProductToPublic(row)
  } catch {
    // fall through to static
  }
  return getStaticProductBySlug(slug)
}

export async function getPublishedProductCategories(): Promise<string[]> {
  const products = await getPublishedProducts()
  const names = Array.from(new Set(products.map((p) => p.category).filter(Boolean))).sort()
  if (names.length === 0) return staticProductCategories
  return ['All', ...names]
}

export async function getRelatedPublishedProducts(slug: string, limit = 4): Promise<Product[]> {
  try {
    const all = await getPublishedProducts()
    const current = all.find((p) => p.slug === slug)
    if (!current) return all.slice(0, limit)

    if (current.relatedProducts?.length) {
      const explicit = current.relatedProducts
        .map((relatedSlug) => all.find((p) => p.slug === relatedSlug))
        .filter((p): p is Product => !!p)
      if (explicit.length > 0) return explicit.slice(0, limit)
    }

    const sameCategory = all.filter((p) => p.slug !== slug && p.category === current.category)
    if (sameCategory.length >= limit) return sameCategory.slice(0, limit)
    const others = all.filter((p) => p.slug !== slug && p.category !== current.category)
    return [...sameCategory, ...others].slice(0, limit)
  } catch {
    return getStaticRelatedProducts(slug, limit)
  }
}

export async function getFeaturedPublishedProducts(limit = 3): Promise<Product[]> {
  try {
    const featured = await prisma.product.findMany({
      where: { status: 'Published', featured: true },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      take: limit,
    })
    if (featured.length > 0) return featured.map(mapDbProductToPublic)

    // Prefer CMS published if any; otherwise static homepage preview
    const published = await fetchPublishedDbProducts()
    if (published.length > 0) {
      return mergeStaticWithCms(staticProducts, published).slice(0, limit)
    }
  } catch {
    // fall through
  }
  return staticProducts.slice(0, limit)
}
