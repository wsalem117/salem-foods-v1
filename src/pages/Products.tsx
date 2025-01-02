import { useState, useMemo } from 'react'
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
          return (a.price ?? 0) - (b.price ?? 0)
        case 'price-desc':
          return (b.price ?? 0) - (a.price ?? 0)
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
          <div className="mx-auto h-12 w-12 text-primary-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold">
            Premium Egyptian Produce
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover our exceptional range of export-quality fruits
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
