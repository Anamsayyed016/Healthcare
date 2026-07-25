'use client'

import { FormEvent, useEffect, useState } from 'react'
import { toast } from '@/components/ui/toast'
import ImageUploader from '@/components/admin/image-uploader'

type SettingsForm = {
  companyName: string
  logoUrl: string
  faviconUrl: string
  addressLine1: string
  addressLine2: string
  addressLine3: string
  email: string
  phone: string
  whatsappNumber: string
  mapEmbedUrl: string
  mapLinkUrl: string
  facebookUrl: string
  linkedinUrl: string
  instagramUrl: string
  twitterUrl: string
  footerText: string
  businessHoursDays: string
  businessHoursTime: string
  websiteUrl: string
}

const empty: SettingsForm = {
  companyName: '',
  logoUrl: '',
  faviconUrl: '',
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  email: '',
  phone: '',
  whatsappNumber: '',
  mapEmbedUrl: '',
  mapLinkUrl: '',
  facebookUrl: '',
  linkedinUrl: '',
  instagramUrl: '',
  twitterUrl: '',
  footerText: '',
  businessHoursDays: '',
  businessHoursTime: '',
  websiteUrl: '',
}

export default function AdminSettingsPage() {
  const [form, setForm] = useState<SettingsForm>(empty)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/admin/settings')
        const json = await res.json()
        if (!res.ok || !json.success) {
          toast(json.message || 'Failed to load settings', 'error')
          return
        }
        const item = json.item
        setForm({
          companyName: item.companyName || '',
          logoUrl: item.logoUrl || '',
          faviconUrl: item.faviconUrl || '',
          addressLine1: item.addressLine1 || '',
          addressLine2: item.addressLine2 || '',
          addressLine3: item.addressLine3 || '',
          email: item.email || '',
          phone: item.phone || '',
          whatsappNumber: item.whatsappNumber || '',
          mapEmbedUrl: item.mapEmbedUrl || '',
          mapLinkUrl: item.mapLinkUrl || '',
          facebookUrl: item.facebookUrl || '',
          linkedinUrl: item.linkedinUrl || '',
          instagramUrl: item.instagramUrl || '',
          twitterUrl: item.twitterUrl || '',
          footerText: item.footerText || '',
          businessHoursDays: item.businessHoursDays || '',
          businessHoursTime: item.businessHoursTime || '',
          websiteUrl: item.websiteUrl || '',
        })
      } catch {
        toast('Failed to load settings', 'error')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Save failed', 'error')
        return
      }
      toast('Settings saved', 'success')
    } catch {
      toast('Save failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-sm text-slate-500">Loading settings…</p>

  const input = (label: string, key: keyof SettingsForm) => (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-slate-700">{label}</span>
      <input
        value={form[key]}
        onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
        className="w-full rounded-xl border px-3 py-2"
      />
    </label>
  )

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Website Settings</h1>
        <p className="text-sm text-slate-500">
          Company contact details. Public site falls back to static constants until saved here.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl border bg-white p-5 lg:grid-cols-2">
        {input('Company name', 'companyName')}
        {input('Website URL', 'websiteUrl')}
        {input('Email', 'email')}
        {input('Phone', 'phone')}
        {input('WhatsApp number (digits, e.g. 919243018530)', 'whatsappNumber')}
        {input('Address line 1', 'addressLine1')}
        {input('Address line 2', 'addressLine2')}
        {input('Address line 3', 'addressLine3')}
        {input('Business hours days', 'businessHoursDays')}
        {input('Business hours time', 'businessHoursTime')}
        {input('Map embed URL', 'mapEmbedUrl')}
        {input('Map link URL', 'mapLinkUrl')}
        {input('Facebook', 'facebookUrl')}
        {input('LinkedIn', 'linkedinUrl')}
        {input('Instagram', 'instagramUrl')}
        {input('Twitter / X', 'twitterUrl')}
        <label className="block text-sm lg:col-span-2">
          <span className="mb-1.5 block font-medium text-slate-700">Footer text</span>
          <textarea
            value={form.footerText}
            onChange={(e) => setForm((prev) => ({ ...prev, footerText: e.target.value }))}
            rows={3}
            className="w-full rounded-xl border px-3 py-2"
          />
        </label>
      </div>

      <div className="grid gap-4 rounded-2xl border bg-white p-5 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium">Logo</p>
          <ImageUploader folder="pharmefc/branding" onUploaded={(url) => setForm((p) => ({ ...p, logoUrl: url }))} />
          <input
            value={form.logoUrl}
            onChange={(e) => setForm((p) => ({ ...p, logoUrl: e.target.value }))}
            className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
            placeholder="Logo URL"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Favicon</p>
          <ImageUploader
            folder="pharmefc/branding"
            onUploaded={(url) => setForm((p) => ({ ...p, faviconUrl: url }))}
          />
          <input
            value={form.faviconUrl}
            onChange={(e) => setForm((p) => ({ ...p, faviconUrl: e.target.value }))}
            className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
            placeholder="Favicon URL"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-[#C62828] px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
      >
        {saving ? 'Saving…' : 'Save settings'}
      </button>
    </form>
  )
}
