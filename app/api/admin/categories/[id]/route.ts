import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, slugify, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

type Params = { params: Promise<{ id: string }> }

export async function PATCH(request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    const body = (await request.json()) as {
      name?: string
      slug?: string
      description?: string | null
      status?: string
      sortOrder?: number
    }

    const data: Record<string, unknown> = {}
    if (typeof body.name === 'string' && body.name.trim()) data.name = body.name.trim()
    if (typeof body.slug === 'string' && body.slug.trim()) data.slug = slugify(body.slug)
    if (body.description !== undefined) data.description = body.description?.trim() || null
    if (body.status === 'Active' || body.status === 'Inactive') data.status = body.status
    if (Number.isFinite(body.sortOrder)) data.sortOrder = Number(body.sortOrder)

    const item = await prisma.category.update({ where: { id }, data })

    if (typeof data.name === 'string') {
      await prisma.product.updateMany({
        where: { categoryId: id },
        data: { categoryName: data.name as string },
      })
    }

    return jsonOk({ item })
  } catch (error) {
    console.error('[admin/categories PATCH]', error)
    return jsonError('Failed to update category', 500)
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    const linked = await prisma.product.count({ where: { categoryId: id } })
    if (linked > 0) {
      return jsonError('Cannot delete category with linked products', 400)
    }
    await prisma.category.delete({ where: { id } })
    return jsonOk({ message: 'Deleted' })
  } catch (error) {
    console.error('[admin/categories DELETE]', error)
    return jsonError('Failed to delete category', 500)
  }
}
