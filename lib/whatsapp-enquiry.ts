import type { EnquiryInput } from '@/lib/validation/enquiry'
import { WHATSAPP_ENQUIRY_NUMBER } from '@/lib/contact'

/** Prefill text for wa.me — keep in sync with contact form fields. */
export function buildEnquiryWhatsAppMessage(
  data: EnquiryInput,
  serviceLabel: string,
): string {
  const company = data.company?.trim() || '—'

  return [
    '🏥 *New Website Enquiry*',
    '',
    '👤 Name:',
    data.fullName,
    '',
    '🏢 Company:',
    company,
    '',
    '📧 Email:',
    data.email,
    '',
    '📱 Phone:',
    data.phone,
    '',
    '📌 Subject:',
    data.subject,
    '',
    '💊 Service Interested:',
    serviceLabel,
    '',
    '📝 Message:',
    data.message,
    '',
    '🌐 Website:',
    'https://pharmefc.com',
  ].join('\n')
}

export function buildEnquiryWhatsAppUrl(
  data: EnquiryInput,
  serviceLabel: string,
): string {
  const text = buildEnquiryWhatsAppMessage(data, serviceLabel)
  return `https://wa.me/${WHATSAPP_ENQUIRY_NUMBER}?text=${encodeURIComponent(text)}`
}
