import { PrismaClient } from '@prisma/client'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

/** Load DATABASE_URL from release .env when PM2 did not inject it. */
function ensureDatabaseUrl() {
  if (process.env.DATABASE_URL) return

  for (const file of ['.env', '.env.production']) {
    const path = resolve(process.cwd(), file)
    if (!existsSync(path)) continue
    const text = readFileSync(path, 'utf8')
    for (const line of text.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let value = trimmed.slice(eq + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      if (key === 'DATABASE_URL' && value) {
        process.env.DATABASE_URL = value
        return
      }
    }
  }
}

ensureDatabaseUrl()

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
