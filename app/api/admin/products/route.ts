import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonCreated, jsonError, jsonOk, slugify, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean)
  }
  if (typeof value === 'string') {
    return value
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
  }
  return []
}

export async function GET(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const q = request.nextUrl.searchParams.get('q')?.trim() || ''
    const status = request.nextUrl.searchParams.get('status')?.trim() || ''
    const items = await prisma.product.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(q
          ? {
              OR: [
                { name: { contains: q, mode: 'insensitive' } },
                { slug: { contains: q, mode: 'insensitive' } },
                { categoryName: { contains: q, mode: 'insensitive' } },
                { brandName: { contains: q, mode: 'insensitive' } },
              ],
            }
          : {}),
      },
      orderBy: [{ sortOrder: 'asc' }, { updatedAt: 'desc' }],
      include: { category: true },
    })
    return jsonOk({ items })
  } catch (error) {
    console.error('[admin/products GET]', error)
    return jsonError('Failed to load products', 500)
  }
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const body = (await request.json()) as Record<string, unknown>
    const name = String(body.name || '').trim()
    if (!name) return jsonError('Product name is required', 400)

    const slug = slugify(String(body.slug || name))
    const shortDescription = String(body.shortDescription || '').trim()
    if (!shortDescription) return jsonError('Short description is required', 400)

    let categoryName = String(body.categoryName || '').trim()
    let categoryId: string | null =
      typeof body.categoryId === 'string' && body.categoryId ? body.categoryId : null

    if (categoryId) {
      const cat = await prisma.category.findUnique({ where: { id: categoryId } })
      if (!cat) return jsonError('Category not found', 400)
      categoryName = cat.name
    }
    if (!categoryName) return jsonError('Category is required', 400)

    const status =
      body.status === 'Published' || body.status === 'Inactive' || body.status === 'Draft'
        ? body.status
        : 'Draft'

    const item = await prisma.product.create({
      data: {
        name,
        brandName: String(body.brandName || '').trim() || null,
        slug,
        categoryId,
        categoryName,
        categoryBadge: String(body.categoryBadge || '').trim() || null,
        icon: String(body.icon || 'pill'),
        shortDescription,
        longDescription: String(body.longDescription || '').trim() || null,
        composition: asStringArray(body.composition),
        benefits: asStringArray(body.benefits),
        indications: asStringArray(body.indications),
        suitableFor: asStringArray(body.suitableFor),
        cardHighlights: asStringArray(body.cardHighlights),
        packSize: String(body.packSize || '').trim() || null,
        dosage: String(body.dosage || '').trim() || null,
        storage: String(body.storage || '').trim() || null,
        prescriptionType: String(body.prescriptionType || '').trim() || null,
        manufacturing: String(body.manufacturing || '').trim() || null,
        qualityStandards: String(body.qualityStandards || '').trim() || null,
        relatedSlugs: asStringArray(body.relatedSlugs),
        mainImage: String(body.mainImage || '').trim() || null,
        gallery: asStringArray(body.gallery),
        brochure: String(body.brochure || '').trim() || null,
        featured: Boolean(body.featured),
        status,
        metaTitle: String(body.metaTitle || '').trim() || null,
        metaDescription: String(body.metaDescription || '').trim() || null,
        metaKeywords: String(body.metaKeywords || '').trim() || null,
        sortOrder: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
      },
    })

    return jsonCreated({ item })
  } catch (error) {
    console.error('[admin/products POST]', error)
    return jsonError('Failed to create product', 500)
  }
}
