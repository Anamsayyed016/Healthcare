import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import type { NextRequest } from 'next/server'

export const ADMIN_SESSION_COOKIE = 'pharmefc_admin_session'
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days

export type AdminSessionPayload = {
  sub: string
  email: string
  name: string
  role: string
}

function getSecretKey() {
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

export async function verifySessionToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const key = getSecretKey()
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
