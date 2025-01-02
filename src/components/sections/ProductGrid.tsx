import { ProductGridProps } from '@/types/components'
import Card from '../common/Card'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Card className="h-full transition-transform hover:-translate-y-1">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full rounded-md object-cover"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
              {product.price !== undefined && (
                <p className="mt-2 text-xl font-bold text-blue-500">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid
