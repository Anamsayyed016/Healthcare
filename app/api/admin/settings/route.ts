import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, unauthorized } from '@/lib/admin/http'
import { ensureSiteSettingsRow } from '@/lib/repositories/settings'

export const runtime = 'nodejs'

export async function GET() {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const item = await ensureSiteSettingsRow()
    return jsonOk({ item })
  } catch (error) {
    console.error('[admin/settings GET]', error)
    return jsonError('Failed to load settings', 500)
  }
}

export async function PUT(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const body = (await request.json()) as Record<string, unknown>
    const current = await ensureSiteSettingsRow()

    const str = (key: string) => {
      if (typeof body[key] !== 'string') return undefined
      const value = body[key].trim()
      return value || null
    }

    const item = await prisma.siteSettings.update({
      where: { id: current.id },
      data: {
        companyName: str('companyName') || current.companyName,
        logoUrl: str('logoUrl'),
        faviconUrl: str('faviconUrl'),
        addressLine1: str('addressLine1'),
        addressLine2: str('addressLine2'),
        addressLine3: str('addressLine3'),
        email: str('email'),
        phone: str('phone'),
        whatsappNumber: str('whatsappNumber'),
        mapEmbedUrl: str('mapEmbedUrl'),
        mapLinkUrl: str('mapLinkUrl'),
        facebookUrl: str('facebookUrl'),
        linkedinUrl: str('linkedinUrl'),
        instagramUrl: str('instagramUrl'),
        twitterUrl: str('twitterUrl'),
        footerText: str('footerText'),
        businessHoursDays: str('businessHoursDays'),
        businessHoursTime: str('businessHoursTime'),
        websiteUrl: str('websiteUrl'),
      },
    })

    return jsonOk({ item })
  } catch (error) {
    console.error('[admin/settings PUT]', error)
    return jsonError('Failed to save settings', 500)
  }
}
