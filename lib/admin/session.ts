import { jwtVerify } from 'jose'

/** Edge-safe admin session helpers — no Node fs/bcrypt. Used by middleware. */

export const ADMIN_SESSION_COOKIE = 'pharmefc_admin_session'

export type AdminSessionPayload = {
  sub: string
  email: string
  name: string
  role: string
}

function getSecretKeyFromEnv() {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 16) {
    return null
  }
  return new TextEncoder().encode(secret)
}

export async function verifySessionToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const key = getSecretKeyFromEnv()
    if (!key) return null
    const { payload } = await jwtVerify(token, key)
    if (!payload.sub || typeof payload.email !== 'string') return null
    return {
      sub: payload.sub,
      email: payload.email,
      name: typeof payload.name === 'string' ? payload.name : 'Admin',
      role: typeof payload.role === 'string' ? payload.role : 'Admin',
    }
  } catch {
    return null
  }
}
