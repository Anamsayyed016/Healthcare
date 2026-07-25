import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

const ENQUIRY_STATUSES = new Set([
  'New',
  'Contacted',
  'Interested',
  'Quotation Sent',
  'Closed',
  'Spam',
])

type Params = { params: Promise<{ id: string }> }

export async function PATCH(request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    const body = (await request.json()) as { status?: string }
    const status = body.status?.trim()
    if (!status || !ENQUIRY_STATUSES.has(status)) {
      return jsonError('Invalid status', 400)
    }

    const updated = await prisma.enquiry.update({
      where: { id },
      data: { status },
    })
    return jsonOk({ item: updated })
  } catch (error) {
    console.error('[admin/enquiries PATCH]', error)
    return jsonError('Failed to update enquiry', 500)
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { id } = await params
    await prisma.enquiry.delete({ where: { id } })
    return jsonOk({ message: 'Deleted' })
  } catch (error) {
    console.error('[admin/enquiries DELETE]', error)
    return jsonError('Failed to delete enquiry', 500)
  }
}
