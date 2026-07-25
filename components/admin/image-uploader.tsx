'use client'

import { useRef, useState } from 'react'
import { toast } from '@/components/ui/toast'

type Props = {
  label?: string
  folder?: string
  onUploaded: (url: string) => void
}

export default function ImageUploader({ label = 'Upload image', folder, onUploaded }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const uploadFile = async (file: File) => {
    setUploading(true)
    try {
      const form = new FormData()
      form.append('file', file)
      if (folder) form.append('folder', folder)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form })
      const json = await res.json()
      if (!res.ok || !json.success) {
        toast(json.message || 'Upload failed', 'error')
        return
      }
      onUploaded(json.asset.url)
      toast('Image uploaded', 'success')
    } catch {
      toast('Upload failed', 'error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        const file = e.dataTransfer.files?.[0]
        if (file) void uploadFile(file)
      }}
      className={`rounded-xl border border-dashed p-4 text-center text-sm ${
        dragOver ? 'border-[#C62828] bg-red-50' : 'border-slate-300 bg-slate-50'
      }`}
    >
      <p className="font-medium text-slate-700">{label}</p>
      <p className="mt-1 text-xs text-slate-500">Drag & drop or choose a file (max 8MB)</p>
      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="mt-3 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold border disabled:opacity-60"
      >
        {uploading ? 'Uploading…' : 'Choose file'}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) void uploadFile(file)
          e.target.value = ''
        }}
      />
    </div>
  )
}
