import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin/session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isAdminPage = pathname.startsWith('/admin')
  const isAdminApi = pathname.startsWith('/api/admin')
  const isLoginPage = pathname === '/admin/login'
  const isAuthApi =
    pathname.startsWith('/api/admin/auth/login') ||
    pathname.startsWith('/api/admin/auth/logout')

  if (!isAdminPage && !isAdminApi) {
    return NextResponse.next()
  }

  if (isLoginPage || isAuthApi) {
    if (isLoginPage) {
      const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value
      const session = token ? await verifySessionToken(token) : null
      if (session) {
        return NextResponse.redirect(new URL('/admin', request.url))
      }
    }
    return NextResponse.next()
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  if (!session) {
    if (isAdminApi) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
