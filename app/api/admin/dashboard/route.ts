import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin/auth'
import { jsonError, jsonOk, unauthorized } from '@/lib/admin/http'

export const runtime = 'nodejs'

export async function GET() {
  const session = await getAdminSession()
  if (!session) return unauthorized()

  try {
    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)

    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    startOfMonth.setHours(0, 0, 0, 0)

    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5)
    sixMonthsAgo.setDate(1)
    sixMonthsAgo.setHours(0, 0, 0, 0)

    const [
      totalProducts,
      activeProducts,
      inactiveProducts,
      draftProducts,
      categories,
      totalEnquiries,
      todayEnquiries,
      monthlyEnquiries,
      recentProducts,
      recentEnquiries,
      enquiriesRaw,
      productsByCategory,
    ] = await Promise.all([
      prisma.product.count(),
      prisma.product.count({ where: { status: 'Published' } }),
      prisma.product.count({ where: { status: 'Inactive' } }),
      prisma.product.count({ where: { status: 'Draft' } }),
      prisma.category.count(),
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { createdAt: { gte: startOfToday } } }),
      prisma.enquiry.count({ where: { createdAt: { gte: startOfMonth } } }),
      prisma.product.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          name: true,
          slug: true,
          status: true,
          categoryName: true,
          mainImage: true,
          createdAt: true,
        },
      }),
      prisma.enquiry.findMany({
        orderBy: { createdAt: 'desc' },
        take: 8,
        select: {
          id: true,
          fullName: true,
          email: true,
          subject: true,
          service: true,
          status: true,
          createdAt: true,
        },
      }),
      prisma.enquiry.findMany({
        where: { createdAt: { gte: sixMonthsAgo } },
        select: { createdAt: true },
      }),
      prisma.product.groupBy({
        by: ['categoryName'],
        _count: { _all: true },
        orderBy: { _count: { categoryName: 'desc' } },
      }),
    ])

    const monthKeys: string[] = []
    for (let i = 5; i >= 0; i--) {
      const d = new Date()
      d.setMonth(d.getMonth() - i)
      monthKeys.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`)
    }

    const monthlyMap = Object.fromEntries(monthKeys.map((k) => [k, 0]))
    for (const row of enquiriesRaw) {
      const key = `${row.createdAt.getFullYear()}-${String(row.createdAt.getMonth() + 1).padStart(2, '0')}`
      if (key in monthlyMap) monthlyMap[key] += 1
    }

    return jsonOk({
      stats: {
        totalProducts,
        activeProducts,
        inactiveProducts,
        draftProducts,
        categories,
        totalEnquiries,
        todayEnquiries,
        monthlyEnquiries,
      },
      recentProducts,
      recentEnquiries,
      charts: {
        monthlyEnquiries: monthKeys.map((key) => ({
          month: key,
          count: monthlyMap[key],
        })),
        productsByCategory: productsByCategory.map((row) => ({
          category: row.categoryName,
          count: row._count._all,
        })),
      },
    })
  } catch (error) {
    console.error('[admin/dashboard]', error)
    return jsonError('Failed to load dashboard', 500)
  }
}
