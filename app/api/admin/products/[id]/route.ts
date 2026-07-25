import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, slugify, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

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

export async function GET(_request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    const item = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    })
    if (!item) return jsonError('Product not found', 404)
    return jsonOk({ item })
  } catch (error) {
    console.error('[admin/products GET id]', error)
    return jsonError('Failed to load product', 500)
  }
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    const body = (await request.json()) as Record<string, unknown>
    const data: Record<string, unknown> = {}

    if (typeof body.name === 'string' && body.name.trim()) data.name = body.name.trim()
    if (typeof body.brandName === 'string') data.brandName = body.brandName.trim() || null
    if (typeof body.slug === 'string' && body.slug.trim()) data.slug = slugify(body.slug)
    if (typeof body.shortDescription === 'string' && body.shortDescription.trim()) {
      data.shortDescription = body.shortDescription.trim()
    }
    if (typeof body.longDescription === 'string') {
      data.longDescription = body.longDescription.trim() || null
    }
    if (typeof body.categoryBadge === 'string') {
      data.categoryBadge = body.categoryBadge.trim() || null
    }
    if (typeof body.icon === 'string') data.icon = body.icon
    if (body.composition !== undefined) data.composition = asStringArray(body.composition)
    if (body.benefits !== undefined) data.benefits = asStringArray(body.benefits)
    if (body.indications !== undefined) data.indications = asStringArray(body.indications)
    if (body.suitableFor !== undefined) data.suitableFor = asStringArray(body.suitableFor)
    if (body.cardHighlights !== undefined) data.cardHighlights = asStringArray(body.cardHighlights)
    if (typeof body.packSize === 'string') data.packSize = body.packSize.trim() || null
    if (typeof body.dosage === 'string') data.dosage = body.dosage.trim() || null
    if (typeof body.storage === 'string') data.storage = body.storage.trim() || null
    if (typeof body.prescriptionType === 'string') {
      data.prescriptionType = body.prescriptionType.trim() || null
    }
    if (typeof body.manufacturing === 'string') {
      data.manufacturing = body.manufacturing.trim() || null
    }
    if (typeof body.qualityStandards === 'string') {
      data.qualityStandards = body.qualityStandards.trim() || null
    }
    if (body.relatedSlugs !== undefined) data.relatedSlugs = asStringArray(body.relatedSlugs)
    if (typeof body.mainImage === 'string') data.mainImage = body.mainImage.trim() || null
    if (body.gallery !== undefined) data.gallery = asStringArray(body.gallery)
    if (typeof body.brochure === 'string') data.brochure = body.brochure.trim() || null
    if (typeof body.featured === 'boolean') data.featured = body.featured
    if (body.status === 'Published' || body.status === 'Inactive' || body.status === 'Draft') {
      data.status = body.status
    }
    if (typeof body.metaTitle === 'string') data.metaTitle = body.metaTitle.trim() || null
    if (typeof body.metaDescription === 'string') {
      data.metaDescription = body.metaDescription.trim() || null
    }
    if (typeof body.metaKeywords === 'string') {
      data.metaKeywords = body.metaKeywords.trim() || null
    }
    if (Number.isFinite(Number(body.sortOrder))) data.sortOrder = Number(body.sortOrder)

    if (typeof body.categoryId === 'string') {
      if (!body.categoryId) {
        data.categoryId = null
      } else {
        const cat = await prisma.category.findUnique({ where: { id: body.categoryId } })
        if (!cat) return jsonError('Category not found', 400)
        data.categoryId = cat.id
        data.categoryName = cat.name
      }
    } else if (typeof body.categoryName === 'string' && body.categoryName.trim()) {
      data.categoryName = body.categoryName.trim()
    }

    const item = await prisma.product.update({ where: { id }, data })
    return jsonOk({ item })
  } catch (error) {
    console.error('[admin/products PATCH]', error)
    return jsonError('Failed to update product', 500)
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    await prisma.product.delete({ where: { id } })
    return jsonOk({ message: 'Deleted' })
  } catch (error) {
    console.error('[admin/products DELETE]', error)
    return jsonError('Failed to delete product', 500)
  }
}
