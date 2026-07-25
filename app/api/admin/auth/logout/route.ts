import { clearAdminSessionCookie } from '@/lib/admin/auth'
import { jsonOk } from '@/lib/admin/http'

export const runtime = 'nodejs'

export async function POST() {
  await clearAdminSessionCookie()
  return jsonOk({ message: 'Logged out' })
}
