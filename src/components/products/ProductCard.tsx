import { Product } from '@/types/components'
import Card from '../common/Card'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group flex h-full flex-col">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-4 flex-1">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
            {product.category}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-500">
            ${product.price.toFixed(2)}
          </span>
          <Link to={`/products/${product.id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
