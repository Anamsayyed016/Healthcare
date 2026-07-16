'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ToastTone = 'success' | 'error'

type ToastState = {
  id: number
  message: string
  tone: ToastTone
} | null

let pushToast: ((message: string, tone: ToastTone) => void) | null = null

export function toast(message: string, tone: ToastTone = 'success') {
  pushToast?.(message, tone)
}

export function ToastHost() {
  const [toastState, setToastState] = useState<ToastState>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const show = useCallback((message: string, tone: ToastTone) => {
    const id = Date.now()
    setToastState({ id, message, tone })
    window.setTimeout(() => {
      setToastState((current) => (current?.id === id ? null : current))
    }, 4200)
  }, [])

  useEffect(() => {
    pushToast = show
    return () => {
      pushToast = null
    }
  }, [show])

  if (!mounted || !toastState) return null

  const toneClass =
    toastState.tone === 'success'
      ? 'bg-[#0F172A] text-white border-[#0F172A]'
      : 'bg-white text-[#B91C1C] border-[#FECACA]'

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[100] max-w-sm rounded-[14px] border px-4 py-3 text-sm font-medium shadow-[0_8px_24px_rgba(15,23,42,0.16)] ${toneClass}`}
    >
      {toastState.message}
    </div>,
    document.body,
  )
}
