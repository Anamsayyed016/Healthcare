import ProductEditor from '@/components/admin/product-editor'

type Props = { params: Promise<{ id: string }> }

export default async function EditProductPage({ params }: Props) {
  const { id } = await params
  return <ProductEditor productId={id} />
}
