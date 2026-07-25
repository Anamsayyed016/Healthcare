import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin/auth'
import AdminShell from '@/components/admin/admin-shell'

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')
  return <AdminShell userName={session.name}>{children}</AdminShell>
}
