import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import {
  createSessionToken,
  setAdminSessionCookie,
  verifyPassword,
} from '@/lib/admin/auth'
import { jsonError, jsonOk } from '@/lib/admin/http'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; password?: string }
    const email = body.email?.trim().toLowerCase()
    const password = body.password || ''

    if (!email || !password) {
      return jsonError('Email and password are required', 400)
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        status: true,
        passwordHash: true,
      },
    })
    if (!user) {
      return jsonError('Invalid email or password', 401)
    }

    if (user.status !== 'ACTIVE') {
      return jsonError('Account is not active', 403)
    }

    if (user.role.toUpperCase() !== 'ADMIN') {
      return jsonError('Admin access only', 403)
    }

    const valid = await verifyPassword(password, user.passwordHash)
    if (!valid) {
      return jsonError('Invalid email or password', 401)
    }

    const token = await createSessionToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
    await setAdminSessionCookie(token)

    return jsonOk({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        status: user.status,
      },
    })
  } catch (error) {
    console.error('[admin/auth/login]', error)
    const message = error instanceof Error ? error.message : ''
    if (message.includes('ADMIN_SESSION_SECRET')) {
      return jsonError('Server auth is not configured', 503)
    }
    // Prisma known codes — do not leak schema details to clients
    const code =
      error && typeof error === 'object' && 'code' in error
        ? String((error as { code?: string }).code)
        : ''
    if (code === 'P2021' || code === 'P2022') {
      return jsonError('Admin database is not ready', 503)
    }
    if (code === 'P1001' || code === 'P1000') {
      return jsonError('Database unavailable', 503)
    }
    return jsonError('Login failed', 500)
  }
}
