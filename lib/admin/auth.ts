import { SignJWT } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import type { NextRequest } from 'next/server'
import {
  ADMIN_SESSION_COOKIE,
  verifySessionToken,
  type AdminSessionPayload,
} from '@/lib/admin/session'

export { ADMIN_SESSION_COOKIE, verifySessionToken }
export type { AdminSessionPayload }

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days

/**
 * Standalone/PM2 often does not inject env vars. Mirror lib/prisma.ts:
 * load ADMIN_SESSION_SECRET from the release .env when missing.
 * Node-only — must not be imported by Edge middleware.
 */
function ensureAdminSessionSecret() {
  if (process.env.ADMIN_SESSION_SECRET && process.env.ADMIN_SESSION_SECRET.length >= 16) {
    return
  }

  for (const file of ['.env', '.env.production']) {
    const path = resolve(/*turbopackIgnore: true*/ process.cwd(), file)
    if (!existsSync(path)) continue
    const text = readFileSync(path, 'utf8')
    for (const line of text.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let value = trimmed.slice(eq + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      if (key === 'ADMIN_SESSION_SECRET' && value.length >= 16) {
        process.env.ADMIN_SESSION_SECRET = value
        return
      }
    }
  }
}

function getSecretKey() {
  ensureAdminSessionSecret()
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 16) {
    return null
  }
  return new TextEncoder().encode(secret)
}

function requireSecretKey() {
  const key = getSecretKey()
  if (!key) {
    throw new Error('ADMIN_SESSION_SECRET must be set (min 16 characters)')
  }
  return key
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash)
}

export async function createSessionToken(payload: AdminSessionPayload) {
  return new SignJWT({
    email: payload.email,
    name: payload.name,
    role: payload.role,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(requireSecretKey())
}

export async function setAdminSessionCookie(token: string) {
  const jar = await cookies()
  jar.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  })
}

export async function clearAdminSessionCookie() {
  const jar = await cookies()
  jar.delete(ADMIN_SESSION_COOKIE)
}

export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  ensureAdminSessionSecret()
  const jar = await cookies()
  const token = jar.get(ADMIN_SESSION_COOKIE)?.value
  if (!token) return null
  return verifySessionToken(token)
}

export async function requireAdminSession(): Promise<AdminSessionPayload> {
  const session = await getAdminSession()
  if (!session) {
    throw new Error('UNAUTHORIZED')
  }
  return session
}

export function getSessionTokenFromRequest(request: NextRequest) {
  return request.cookies.get(ADMIN_SESSION_COOKIE)?.value
}
