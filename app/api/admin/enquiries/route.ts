import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

const ENQUIRY_STATUSES = [
  'New',
  'Contacted',
  'Interested',
  'Quotation Sent',
  'Closed',
  'Spam',
] as const

export async function GET(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const { searchParams } = request.nextUrl
    const q = searchParams.get('q')?.trim() || ''
    const status = searchParams.get('status')?.trim() || ''
    const page = Math.max(1, Number(searchParams.get('page') || 1))
    const pageSize = Math.min(100, Math.max(1, Number(searchParams.get('pageSize') || 20)))
    const exportCsv = searchParams.get('export') === 'csv'

    const where = {
      ...(status ? { status } : {}),
      ...(q
        ? {
            OR: [
              { fullName: { contains: q, mode: 'insensitive' as const } },
              { email: { contains: q, mode: 'insensitive' as const } },
              { phone: { contains: q, mode: 'insensitive' as const } },
              { company: { contains: q, mode: 'insensitive' as const } },
              { subject: { contains: q, mode: 'insensitive' as const } },
              { service: { contains: q, mode: 'insensitive' as const } },
            ],
          }
        : {}),
    }

    if (exportCsv) {
      const rows = await prisma.enquiry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      })
      const header = [
        'id',
        'fullName',
        'company',
        'email',
        'phone',
        'subject',
        'service',
        'message',
        'status',
        'source',
        'createdAt',
      ]
      const escape = (value: unknown) => {
        const text = value == null ? '' : String(value)
        return `"${text.replace(/"/g, '""')}"`
      }
      const lines = [
        header.join(','),
        ...rows.map((row) =>
          [
            row.id,
            row.fullName,
            row.company,
            row.email,
            row.phone,
            row.subject,
            row.service,
            row.message,
            row.status,
            row.source,
            row.createdAt.toISOString(),
          ]
            .map(escape)
            .join(','),
        ),
      ]
      return new Response(lines.join('\n'), {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="enquiries.csv"',
        },
      })
    }

    const [total, items] = await Promise.all([
      prisma.enquiry.count({ where }),
      prisma.enquiry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ])

    return jsonOk({
      items,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.max(1, Math.ceil(total / pageSize)),
      },
      statuses: ENQUIRY_STATUSES,
    })
  } catch (error) {
    console.error('[admin/enquiries GET]', error)
    return jsonError('Failed to load enquiries', 500)
  }
}
