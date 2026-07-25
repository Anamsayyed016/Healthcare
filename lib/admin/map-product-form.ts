import type { Product, ProductIcon } from '@/lib/data/products'

const VALID_ICONS: ProductIcon[] = ['pill', 'tablets', 'flask']

/** Shared draft → public Product mapper for admin live / detail preview. */
export type AdminProductFormLike = {
  name: string
  brandName: string
  slug: string
  categoryName: string
  categoryBadge: string
  icon: string
  shortDescription: string
  longDescription: string
  composition: string
  benefits: string
  indications: string
  suitableFor: string
  cardHighlights: string
  packSize: string
  manufacturing: string
  qualityStandards: string
  relatedSlugs: string
  mainImage: string
  gallery: string[]
  brochure: string
}

function lines(value: string): string[] {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function toIcon(value: string): ProductIcon {
  return VALID_ICONS.includes(value as ProductIcon) ? (value as ProductIcon) : 'pill'
}

export function mapAdminFormToPublicProduct(
  form: AdminProductFormLike,
  categoryFallback = 'Uncategorized',
): Product {
  const category = form.categoryName.trim() || form.categoryBadge.trim() || categoryFallback
  const description = form.shortDescription.trim() || 'Product description will appear here.'
  const composition = lines(form.composition)
  const benefits = lines(form.benefits)

  return {
    slug: form.slug.trim() || 'draft-preview',
    name: form.name.trim() || 'Untitled product',
    category,
    categoryBadge: form.categoryBadge.trim() || undefined,
    icon: toIcon(form.icon),
    image: form.mainImage.trim() || undefined,
    gallery: form.gallery.length ? form.gallery : undefined,
    brochure: form.brochure.trim() || undefined,
    description,
    overview: form.longDescription.trim() || description,
    composition: composition.length ? composition : ['Composition details coming soon'],
    benefits: benefits.length ? benefits : ['Benefits will appear here'],
    cardHighlights: lines(form.cardHighlights).length
      ? lines(form.cardHighlights)
      : undefined,
    suitableFor: lines(form.suitableFor).length ? lines(form.suitableFor) : undefined,
    indications: lines(form.indications).length ? lines(form.indications) : undefined,
    packSize: form.packSize.trim() || undefined,
    relatedProducts: lines(form.relatedSlugs).length ? lines(form.relatedSlugs) : undefined,
    manufacturing: form.manufacturing.trim() || '',
    qualityStandards:
      form.qualityStandards.trim() || form.manufacturing.trim() || '',
  }
}

export const ADMIN_PRODUCT_PREVIEW_KEY = 'pharmefc_admin_product_preview'
