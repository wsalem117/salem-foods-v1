import { useState } from 'react'
import SEO from '@/components/common/SEO'
import { services } from '@/data/mockData'
import Section from '@/components/common/Section'
import ServiceCard from '@/components/sections/ServiceCard'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(services.map((service) => service.category)),
  ]

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <SEO
        title="Services"
        description="Professional services tailored to your business needs. Expert solutions and support."
        keywords="services, consulting, development, support"
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold">
            Agricultural Services
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Comprehensive farming and export solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div key={service.id} className="flex flex-col space-y-4">
              <ServiceCard {...service} />

              {/* Features */}
              {service.features && (
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-2 font-semibold">Key Features</h3>
                  <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {service.benefits && (
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-2 font-semibold">Benefits</h3>
                  <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Services
