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
          <div className="mt-2 space-y-1">
            <p className="text-sm font-medium text-primary-dark">
              {product.category}
            </p>
            {product.season && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Season: {product.season.start} - {product.season.end}
              </p>
            )}
            {product.specs?.size && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Size: {product.specs.size}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {product.certifications?.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center rounded-full bg-primary-light/10 px-2 py-1 text-xs font-medium text-primary-dark"
              >
                {cert}
              </span>
            ))}
          </div>
          <Link to={`/products/${product.id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
