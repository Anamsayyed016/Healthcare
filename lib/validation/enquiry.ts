export type EnquiryInput = {
  fullName: string
  company?: string
  email: string
  phone: string
  subject: string
  service: string
  message: string
}

export type EnquiryValidationResult =
  | { ok: true; data: EnquiryInput }
  | { ok: false; errors: Record<string, string> }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/

function trim(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateEnquiry(body: unknown): EnquiryValidationResult {
  const raw = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>
  const errors: Record<string, string> = {}

  const fullName = trim(raw.fullName)
  const company = trim(raw.company)
  const email = trim(raw.email)
  const phone = trim(raw.phone)
  const subject = trim(raw.subject)
  const service = trim(raw.service)
  const message = trim(raw.message)

  if (!fullName) errors.fullName = 'Full name is required'
  else if (fullName.length > 255) errors.fullName = 'Full name is too long'

  if (!email) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address'
  else if (email.length > 255) errors.email = 'Email is too long'

  if (!phone) errors.phone = 'Phone number is required'
  else if (!PHONE_RE.test(phone)) errors.phone = 'Enter a valid phone number'

  if (!subject) errors.subject = 'Subject is required'
  else if (subject.length > 500) errors.subject = 'Subject is too long'

  if (!service) errors.service = 'Please select a service'

  if (!message) errors.message = 'Message is required'
  else if (message.length > 5000) errors.message = 'Message is too long'

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  return {
    ok: true,
    data: {
      fullName,
      company: company || undefined,
      email,
      phone,
      subject,
      service,
      message,
    },
  }
}
