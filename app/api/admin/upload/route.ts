import { NextRequest } from 'next/server'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, unauthorized } from '@/lib/admin/http'
import { uploadImageBuffer } from '@/lib/cloudinary/upload'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const form = await request.formData()
    const file = form.get('file')
    const folder = String(form.get('folder') || 'pharmefc/products')

    if (!(file instanceof File)) {
      return jsonError('file is required', 400)
    }

    if (!file.type.startsWith('image/')) {
      return jsonError('Only image uploads are allowed', 400)
    }

    if (file.size > 8 * 1024 * 1024) {
      return jsonError('Image must be under 8MB', 400)
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const uploaded = await uploadImageBuffer(buffer, {
      folder,
      filename: file.name,
    })

    return jsonOk({ asset: uploaded })
  } catch (error) {
    console.error('[admin/upload]', error)
    const message =
      error instanceof Error ? error.message : 'Upload failed. Check Cloudinary credentials.'
    return jsonError(message, 500)
  }
}
