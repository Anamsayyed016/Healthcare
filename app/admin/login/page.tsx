import { Suspense } from 'react'
import AdminLoginClient from './login-client'

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F7F8FA] text-sm text-slate-500">
          Loading…
        </div>
      }
    >
      <AdminLoginClient />
    </Suspense>
  )
}
