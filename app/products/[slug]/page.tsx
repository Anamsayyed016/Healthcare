import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailContent from './product-detail';
import {
  getPublishedProductBySlug,
  getPublishedProducts,
  getRelatedPublishedProducts,
} from '@/lib/repositories/products';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getPublishedProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getPublishedProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | PharmEFC Healthcare`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = await getPublishedProductBySlug(slug);
  if (!product) notFound();
  const related = await getRelatedPublishedProducts(slug);
  return <ProductDetailContent product={product} relatedProducts={related} />;
}
