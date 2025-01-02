import { useState, useMemo } from 'react'
import { ShoppingBag } from 'lucide-react'
import SEO from '@/components/common/SEO'
import { products } from '@/data/mockData'
import { ProductFilters } from '@/types/components'
import ProductFilterBar from '@/components/products/ProductFilterBar'
import ProductCard from '@/components/products/ProductCard'
import Section from '@/components/common/Section'

const Products = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'All',
    sort: 'name-asc',
    search: '',
  })

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Apply category filter
    if (filters.category !== 'All') {
      result = result.filter((product) => product.category === filters.category)
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      )
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (filters.sort) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

    return result
  }, [filters])

  return (
    <div className="min-h-screen">
      <SEO
        title="Products"
        description="Explore our wide range of products. Find the perfect solution for your needs."
        keywords="products, electronics, technology, gadgets"
      />
      <Section>
        <div className="mb-8 text-center">
          <ShoppingBag className="mx-auto h-12 w-12" />
          <h1 className="mt-4 text-4xl font-bold">Our Products</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover our amazing product lineup
          </p>
        </div>

        <ProductFilterBar filters={filters} onFilterChange={setFilters} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-8 text-center text-gray-500">
            No products found matching your criteria.
          </div>
        )}
      </Section>
    </div>
  )
}

export default Products
