import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, slugify, unauthorized } from '@/lib/admin/http'
import { destroyCloudinaryUrls } from '@/lib/cloudinary/upload'

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

function revalidateProductPages(slug?: string | null) {
  revalidatePath('/products')
  revalidatePath('/')
  if (slug) revalidatePath(`/products/${slug}`)
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
    const existing = await prisma.product.findUnique({ where: { id } })
    if (!existing) return jsonError('Product not found', 404)

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

    // Explicit null/empty clears mainImage (must not omit the field)
    if (body.mainImage === null) {
      data.mainImage = null
    } else if (typeof body.mainImage === 'string') {
      data.mainImage = body.mainImage.trim() || null
    }

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

    const nextMain =
      data.mainImage !== undefined ? (data.mainImage as string | null) : existing.mainImage
    const nextGallery =
      data.gallery !== undefined ? (data.gallery as string[]) : existing.gallery
    const removedUrls = [
      ...(existing.mainImage && existing.mainImage !== nextMain ? [existing.mainImage] : []),
      ...existing.gallery.filter((url) => !nextGallery.includes(url)),
    ]
    if (removedUrls.length > 0) {
      await destroyCloudinaryUrls(removedUrls)
    }

    const item = await prisma.product.update({ where: { id }, data })
    revalidateProductPages(item.slug)
    if (existing.slug !== item.slug) revalidateProductPages(existing.slug)
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
    const existing = await prisma.product.findUnique({ where: { id } })
    if (!existing) return jsonError('Product not found', 404)

    await destroyCloudinaryUrls([existing.mainImage, ...existing.gallery])
    await prisma.product.delete({ where: { id } })
    revalidateProductPages(existing.slug)
    return jsonOk({ message: 'Deleted' })
  } catch (error) {
    console.error('[admin/products DELETE]', error)
    return jsonError('Failed to delete product', 500)
  }
}
