import {
  COMPANY_NAME,
  EMAIL,
  PHONE,
  WHATSAPP_ENQUIRY_NUMBER,
  WEBSITE,
  OFFICE_ADDRESS,
  BUSINESS_HOURS,
  MAP_EMBED_URL,
  MAP_LINK_URL,
} from '@/lib/contact'
import { prisma } from '@/lib/prisma'

export type PublicSiteSettings = {
  companyName: string
  logoUrl?: string
  faviconUrl?: string
  addressLine1?: string
  addressLine2?: string
  addressLine3?: string
  email?: string
  phone?: string
  whatsappNumber?: string
  mapEmbedUrl?: string
  mapLinkUrl?: string
  facebookUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  footerText?: string
  businessHoursDays?: string
  businessHoursTime?: string
  websiteUrl?: string
}

const staticSettings: PublicSiteSettings = {
  companyName: COMPANY_NAME,
  addressLine1: OFFICE_ADDRESS.line1,
  addressLine2: OFFICE_ADDRESS.line2,
  addressLine3: OFFICE_ADDRESS.line3,
  email: EMAIL,
  phone: PHONE,
  whatsappNumber: WHATSAPP_ENQUIRY_NUMBER,
  mapEmbedUrl: MAP_EMBED_URL,
  mapLinkUrl: MAP_LINK_URL,
  businessHoursDays: BUSINESS_HOURS.days,
  businessHoursTime: BUSINESS_HOURS.time,
  websiteUrl: WEBSITE,
}

/**
 * Site settings: DB row if present, else static `lib/contact` constants.
 */
export async function getSiteSettings(): Promise<PublicSiteSettings> {
  try {
    const row = await prisma.siteSettings.findFirst({ orderBy: { createdAt: 'asc' } })
    if (!row) return staticSettings
    return {
      companyName: row.companyName || staticSettings.companyName,
      logoUrl: row.logoUrl || undefined,
      faviconUrl: row.faviconUrl || undefined,
      addressLine1: row.addressLine1 || staticSettings.addressLine1,
      addressLine2: row.addressLine2 || staticSettings.addressLine2,
      addressLine3: row.addressLine3 || staticSettings.addressLine3,
      email: row.email || staticSettings.email,
      phone: row.phone || staticSettings.phone,
      whatsappNumber: row.whatsappNumber || staticSettings.whatsappNumber,
      mapEmbedUrl: row.mapEmbedUrl || staticSettings.mapEmbedUrl,
      mapLinkUrl: row.mapLinkUrl || staticSettings.mapLinkUrl,
      facebookUrl: row.facebookUrl || undefined,
      linkedinUrl: row.linkedinUrl || undefined,
      instagramUrl: row.instagramUrl || undefined,
      twitterUrl: row.twitterUrl || undefined,
      footerText: row.footerText || undefined,
      businessHoursDays: row.businessHoursDays || staticSettings.businessHoursDays,
      businessHoursTime: row.businessHoursTime || staticSettings.businessHoursTime,
      websiteUrl: row.websiteUrl || staticSettings.websiteUrl,
    }
  } catch {
    return staticSettings
  }
}

export async function ensureSiteSettingsRow() {
  const existing = await prisma.siteSettings.findFirst({ orderBy: { createdAt: 'asc' } })
  if (existing) return existing
  return prisma.siteSettings.create({
    data: {
      companyName: COMPANY_NAME,
      addressLine1: OFFICE_ADDRESS.line1,
      addressLine2: OFFICE_ADDRESS.line2,
      addressLine3: OFFICE_ADDRESS.line3,
      email: EMAIL,
      phone: PHONE,
      whatsappNumber: WHATSAPP_ENQUIRY_NUMBER,
      mapEmbedUrl: MAP_EMBED_URL,
      mapLinkUrl: MAP_LINK_URL,
      businessHoursDays: BUSINESS_HOURS.days,
      businessHoursTime: BUSINESS_HOURS.time,
      websiteUrl: WEBSITE,
    },
  })
}
