import { ProductFilters } from '@/types/components'
import { productCategories } from '@/data/mockData'

interface ProductFilterBarProps {
  filters: ProductFilters
  onFilterChange: (filters: ProductFilters) => void
}

const ProductFilterBar = ({
  filters,
  onFilterChange,
}: ProductFilterBarProps) => {
  return (
    <div className="mb-8 space-y-4">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {productCategories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange({ ...filters, category })}
            className={`rounded-full px-4 py-2 text-sm ${
              filters.category === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sort Filter */}
      <div className="flex items-center space-x-4">
        <label htmlFor="sort" className="text-sm font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          value={filters.sort}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              sort: e.target.value as ProductFilters['sort'],
            })
          }
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark dark:border-gray-600 dark:bg-gray-700"
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="season-asc">Season (Early to Late)</option>
          <option value="season-desc">Season (Late to Early)</option>
        </select>
      </div>

      {/* Search Filter */}
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) =>
            onFilterChange({ ...filters, search: e.target.value })
          }
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>
    </div>
  )
}

export default ProductFilterBar
