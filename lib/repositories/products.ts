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
  return {
    slug: row.slug,
    name: row.name,
    category: row.categoryName,
    categoryBadge: row.categoryBadge || undefined,
    icon: toIcon(row.icon),
    image: row.mainImage || undefined,
    gallery: row.gallery?.length ? row.gallery : undefined,
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

async function dbHasPublishedProducts(): Promise<boolean> {
  try {
    const count = await prisma.product.count({
      where: { status: 'Published' },
    })
    return count > 0
  } catch {
    // DB unavailable — fall back to static data (zero downtime)
    return false
  }
}

/**
 * Production-safe product list:
 * Database (Published) → if records exist, else static `lib/data/products`.
 */
export async function getPublishedProducts(): Promise<Product[]> {
  try {
    if (!(await dbHasPublishedProducts())) {
      return staticProducts
    }
    const rows = await prisma.product.findMany({
      where: { status: 'Published' },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    })
    return rows.map(mapDbProductToPublic)
  } catch {
    return staticProducts
  }
}

export async function getPublishedProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    if (await dbHasPublishedProducts()) {
      const row = await prisma.product.findFirst({
        where: { slug, status: 'Published' },
      })
      if (row) return mapDbProductToPublic(row)
      // Prefer DB catalogue when active; miss = not found (do not mix static orphans)
      return undefined
    }
  } catch {
    // fall through to static
  }
  return getStaticProductBySlug(slug)
}

export async function getPublishedProductCategories(): Promise<string[]> {
  try {
    if (await dbHasPublishedProducts()) {
      const rows = await prisma.product.findMany({
        where: { status: 'Published' },
        select: { categoryName: true },
        distinct: ['categoryName'],
        orderBy: { categoryName: 'asc' },
      })
      return ['All', ...rows.map((r) => r.categoryName)]
    }
  } catch {
    // fall through
  }
  return staticProductCategories
}

export async function getRelatedPublishedProducts(slug: string, limit = 4): Promise<Product[]> {
  try {
    if (await dbHasPublishedProducts()) {
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
    }
  } catch {
    // fall through
  }
  return getStaticRelatedProducts(slug, limit)
}

export async function getFeaturedPublishedProducts(limit = 3): Promise<Product[]> {
  try {
    if (await dbHasPublishedProducts()) {
      const featured = await prisma.product.findMany({
        where: { status: 'Published', featured: true },
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        take: limit,
      })
      if (featured.length > 0) return featured.map(mapDbProductToPublic)
      const fallback = await prisma.product.findMany({
        where: { status: 'Published' },
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        take: limit,
      })
      return fallback.map(mapDbProductToPublic)
    }
  } catch {
    // fall through
  }
  return staticProducts.slice(0, limit)
}
