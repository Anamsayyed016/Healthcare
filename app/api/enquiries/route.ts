import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateEnquiry } from '@/lib/validation/enquiry'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON body' },
        { status: 400 },
      )
    }

    const result = validateEnquiry(body)
    if (!result.ok) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: result.errors },
        { status: 400 },
      )
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        fullName: result.data.fullName,
        company: result.data.company ?? null,
        email: result.data.email,
        phone: result.data.phone,
        subject: result.data.subject,
        service: result.data.service,
        message: result.data.message,
      },
      select: {
        id: true,
        status: true,
        source: true,
        createdAt: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry submitted successfully',
        data: enquiry,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('[api/enquiries] POST failed:', error)
    const message =
      error instanceof Error && /P1001|P1017|ECONNREFUSED|DATABASE_URL/i.test(error.message)
        ? 'Database connection failed. Please try again later.'
        : error instanceof Error && /P2021|does not exist|column/i.test(error.message)
          ? 'Database schema is not ready. Please try again later.'
          : 'Unable to save enquiry. Please try again.'
    return NextResponse.json({ success: false, message }, { status: 500 })
  }
}
