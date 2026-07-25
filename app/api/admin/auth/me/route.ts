import { getAdminSession } from '@/lib/admin/auth'
import { jsonOk, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

export async function GET() {
  const session = await getAdminSession()
  if (!session) return unauthorized()
  return jsonOk({
    user: {
      id: session.sub,
      email: session.email,
      name: session.name,
      role: session.role,
    },
  })
}
