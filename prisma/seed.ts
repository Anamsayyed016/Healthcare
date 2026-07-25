/**
 * Seeds the initial PharmEFC CMS administrator.
 *
 * Credentials MUST come from environment variables — never hardcode passwords here.
 * Required:
 *   ADMIN_SEED_EMAIL
 *   ADMIN_SEED_PASSWORD
 * Optional:
 *   ADMIN_SEED_NAME
 *
 * Safe to re-run: upserts by unique email (no duplicate accounts).
 */
import { prisma } from '../lib/prisma'
import { hashPassword } from '../lib/admin/auth'
import { ensureSiteSettingsRow } from '../lib/repositories/settings'

async function main() {
  const email = process.env.ADMIN_SEED_EMAIL?.trim().toLowerCase()
  const password = process.env.ADMIN_SEED_PASSWORD
  const name = process.env.ADMIN_SEED_NAME?.trim() || 'PharmEFC Administrator'

  if (!email || !password) {
    throw new Error(
      'ADMIN_SEED_EMAIL and ADMIN_SEED_PASSWORD must be set in the environment before seeding.',
    )
  }

  if (password.length < 10) {
    throw new Error('ADMIN_SEED_PASSWORD must be at least 10 characters.')
  }

  const passwordHash = await hashPassword(password)

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      name,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
    create: {
      email,
      passwordHash,
      name,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      status: true,
      createdAt: true,
      // passwordHash intentionally omitted
    },
  })

  await ensureSiteSettingsRow()

  console.log('✅ Admin account ready (password hashed, not logged):')
  console.log(`   email:  ${user.email}`)
  console.log(`   role:   ${user.role}`)
  console.log(`   status: ${user.status}`)
  console.log(`   id:     ${user.id}`)
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
