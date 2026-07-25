import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonCreated, jsonError, jsonOk, slugify, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

export async function GET() {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const items = await prisma.category.findMany({
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      include: { _count: { select: { products: true } } },
    })
    return jsonOk({ items })
  } catch (error) {
    console.error('[admin/categories GET]', error)
    return jsonError('Failed to load categories', 500)
  }
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const body = (await request.json()) as {
      name?: string
      slug?: string
      description?: string
      status?: string
      sortOrder?: number
    }
    const name = body.name?.trim()
    if (!name) return jsonError('Category name is required', 400)

    const slug = slugify(body.slug?.trim() || name)
    if (!slug) return jsonError('Invalid slug', 400)

    const item = await prisma.category.create({
      data: {
        name,
        slug,
        description: body.description?.trim() || null,
        status: body.status === 'Inactive' ? 'Inactive' : 'Active',
        sortOrder: Number.isFinite(body.sortOrder) ? Number(body.sortOrder) : 0,
      },
    })
    return jsonCreated({ item })
  } catch (error) {
    console.error('[admin/categories POST]', error)
    return jsonError('Failed to create category', 500)
  }
}
