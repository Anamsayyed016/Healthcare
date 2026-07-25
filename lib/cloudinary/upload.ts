import { v2 as cloudinary } from 'cloudinary'
import { cloudinaryUrl } from '@/lib/images'

let configured = false

function ensureCloudinaryConfig() {
  if (configured) return
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
