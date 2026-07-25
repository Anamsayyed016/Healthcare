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
    return jsonError('Login failed', 500)
  }
}
