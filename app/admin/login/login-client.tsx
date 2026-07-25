'use client'

import { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ToastHost, toast } from '@/components/ui/toast'

export default function AdminLoginClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        toast(result.message || 'Login failed', 'error')
        return
      }
      toast('Welcome back', 'success')
      const next = searchParams.get('next') || '/admin'
      router.replace(next.startsWith('/admin') ? next : '/admin')
      router.refresh()
    } catch {
      toast('Login failed', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-4">
      <ToastHost />
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">PharmEFC</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">Admin Login</h1>
        <p className="mt-1 text-sm text-slate-500">Secure access to the PharmEFC CMS</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#C62828]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#C62828]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#C62828] px-4 py-3 text-sm font-semibold text-white hover:bg-[#B71C1C] disabled:opacity-70"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          <button
            type="button"
            className="underline"
            onClick={() => toast('Contact your administrator to reset access', 'error')}
          >
            Forgot password?
          </button>
        </p>
      </div>
    </div>
  )
}
