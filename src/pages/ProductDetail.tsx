import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '@/data/mockData'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import ProductCard from '@/components/products/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <Link to="/products" className="mt-4 inline-block text-blue-500">
            Back to Products
          </Link>
        </div>
      </Section>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      <Section>
        <Link
          to="/products"
          className="mb-6 inline-flex items-center text-blue-500 hover:text-blue-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="mt-2 text-sm text-gray-500">{product.category}</p>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              {product.description}
            </p>

            <div className="text-3xl font-bold text-blue-500">
              ${product.price.toFixed(2)}
            </div>

            {product.features && (
              <div>
                <h2 className="text-xl font-semibold">Key Features</h2>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.specs && (
              <div>
                <h2 className="text-xl font-semibold">Specifications</h2>
                <dl className="mt-2 space-y-1">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2">
                      <dt className="font-medium text-gray-600 dark:text-gray-400">
                        {key}
                      </dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <Button size="lg" className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  )
}

export default ProductDetail
