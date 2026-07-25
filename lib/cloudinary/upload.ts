import { v2 as cloudinary } from 'cloudinary'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { cloudinaryUrl } from '@/lib/images'

let configured = false

/**
 * Standalone/PM2 often omits CLOUDINARY_* from process.env.
 * Mirror lib/prisma.ts — load from release .env when missing.
 */
function ensureCloudinaryEnvFromFile() {
  const needed = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'] as const
  if (needed.every((key) => Boolean(process.env[key]))) return

  for (const file of ['.env', '.env.production']) {
    const path = resolve(/*turbopackIgnore: true*/ process.cwd(), file)
    if (!existsSync(path)) continue
    const text = readFileSync(path, 'utf8')
    for (const line of text.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      if (!(needed as readonly string[]).includes(key)) continue
      if (process.env[key]) continue
      let value = trimmed.slice(eq + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      if (value) process.env[key] = value
    }
  }
}

function ensureCloudinaryConfig() {
  if (configured) return
  ensureCloudinaryEnvFromFile()
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      'Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.',
    )
  }
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  })
  configured = true
}

export type UploadedAsset = {
  url: string
  publicId: string
  width?: number
  height?: number
  format?: string
  bytes?: number
}

/**
 * Single Cloudinary upload entry-point for the admin CMS.
 * Reuses delivery transforms via `cloudinaryUrl` where helpful.
 */
export async function uploadImageBuffer(
  buffer: Buffer,
  options?: { folder?: string; filename?: string },
): Promise<UploadedAsset> {
  ensureCloudinaryConfig()
  const folder = options?.folder || 'pharmefc/admin'

  const result = await new Promise<{
    secure_url: string
    public_id: string
    width?: number
    height?: number
    format?: string
    bytes?: number
  }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'image',
        use_filename: Boolean(options?.filename),
        unique_filename: true,
        overwrite: false,
      },
      (error, uploaded) => {
        if (error || !uploaded) {
          reject(error || new Error('Cloudinary upload failed'))
          return
        }
        resolve(uploaded as {
          secure_url: string
          public_id: string
          width?: number
          height?: number
          format?: string
          bytes?: number
        })
      },
    )
    stream.end(buffer)
  })

  return {
    url: cloudinaryUrl(result.secure_url),
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    format: result.format,
    bytes: result.bytes,
  }
}

export async function destroyCloudinaryAsset(publicId: string) {
  ensureCloudinaryConfig()
  await cloudinary.uploader.destroy(publicId)
}
