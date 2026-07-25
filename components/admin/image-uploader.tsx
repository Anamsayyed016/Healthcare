'use client'

import { useRef, useState } from 'react'
import { ImagePlus, Replace, Trash2, Upload } from 'lucide-react'
import { toast } from '@/components/ui/toast'

type Props = {
  label?: string
  folder?: string
  onUploaded: (url: string) => void
  /** Current image URL — when set, shows preview with Replace / Remove */
  value?: string
  onClear?: () => void
  /** Larger drop zone for main product image */
  size?: 'default' | 'large'
}

export default function ImageUploader({
  label = 'Upload image',
  folder,
  onUploaded,
  value,
  onClear,
  size = 'default',
}: Props) {
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

  const openPicker = () => inputRef.current?.click()

  const fileInput = (
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
  )

  if (value) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className={`relative bg-slate-50 ${size === 'large' ? 'aspect-[4/3]' : 'aspect-video'}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" className="h-full w-full object-contain p-3" />
        </div>
        <div className="flex flex-wrap gap-2 border-t border-slate-100 p-3">
          <button
            type="button"
            disabled={uploading}
            onClick={openPicker}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            <Replace size={14} />
            {uploading ? 'Uploading…' : 'Replace'}
          </button>
          {onClear && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
            >
              <Trash2 size={14} />
              Remove
            </button>
          )}
        </div>
        {fileInput}
      </div>
    )
  }

  const padding = size === 'large' ? 'p-10 sm:p-14' : 'p-6'

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
      className={`rounded-2xl border-2 border-dashed text-center transition-colors ${padding} ${
        dragOver ? 'border-[#C62828] bg-red-50' : 'border-slate-300 bg-slate-50'
      }`}
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
        <ImagePlus className="text-slate-400" size={22} />
      </div>
      <p className="font-semibold text-slate-800">{label}</p>
      <p className="mt-1 text-sm text-slate-500">Drag image here</p>
      <p className="mt-0.5 text-xs text-slate-400">or</p>
      <button
        type="button"
        disabled={uploading}
        onClick={openPicker}
        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 disabled:opacity-60"
      >
        <Upload size={16} />
        {uploading ? 'Uploading…' : 'Choose Image'}
      </button>
      <p className="mt-3 text-xs text-slate-400">PNG, JPG, WEBP · max 8MB</p>
      {fileInput}
    </div>
  )
}
