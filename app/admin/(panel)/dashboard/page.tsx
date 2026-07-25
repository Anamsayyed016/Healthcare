import { redirect } from 'next/navigation'

/** Alias route — the dashboard lives at /admin. */
export default function AdminDashboardAlias() {
  redirect('/admin')
}
