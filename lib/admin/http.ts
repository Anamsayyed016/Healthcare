import { NextResponse } from 'next/server'

export function jsonOk<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ success: true, ...((data as object) || {}) }, init)
}

export function jsonCreated<T>(data: T) {
  return NextResponse.json({ success: true, ...((data as object) || {}) }, { status: 201 })
}

export function jsonError(message: string, status = 400, errors?: Record<string, string>) {
  return NextResponse.json(
    { success: false, message, ...(errors ? { errors } : {}) },
    { status },
  )
}

export function unauthorized(message = 'Unauthorized') {
  return jsonError(message, 401)
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120)
}
