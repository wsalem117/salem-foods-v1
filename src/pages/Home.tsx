import SEO from '@/components/common/SEO'
import Section from '@/components/common/Section'
import ContactForm from '@/components/sections/ContactForm'
import HeroSlider from '@/components/sections/HeroSlider'
import ProductGrid from '@/components/sections/ProductGrid'
import ServiceCard from '@/components/sections/ServiceCard'
import StatCard from '@/components/sections/StatCard'
import TestimonialCard from '@/components/sections/TestimonialCard'
import {
  heroSlides,
  featuredProducts,
  services,
  statistics,
  testimonials,
} from '@/data/mockData'

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Welcome to our platform. Discover amazing products and services."
        keywords="products, services, technology, innovation"
      />
      {/* Hero Section */}
      <HeroSlider slides={heroSlides} />

      {/* Featured Products */}
      <Section
        title="Featured Products"
        subtitle="Discover our most popular offerings"
      >
        <ProductGrid products={featuredProducts} />
      </Section>

      {/* Services */}
      <Section
        title="Our Services"
        subtitle="Comprehensive solutions for your needs"
        className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      {/* Statistics */}
      <Section
        title="Our Achievements"
        subtitle="Numbers that speak for themselves"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="Client Testimonials"
        subtitle="What our clients say about us"
        className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section title="Get in Touch" subtitle="We'd love to hear from you">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </div>
  )
}

export default Home
