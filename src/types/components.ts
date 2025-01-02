import { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconName } from '@/utils/iconRegistry'

// Button Component Types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

// Card Component Types
export interface CardProps {
  children: ReactNode
  className?: string
}

// Container Component Types
export interface ContainerProps {
  children: ReactNode
  className?: string
}

// Section Component Types
export interface SectionProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

// Hero Banner Types
export interface HeroBannerProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

// Product Types
export interface Product {
  id: string
  name: string
  description: string
  price?: number
  image: string
  category: string
  features?: string[]
  specs?: {
    size?: string
    packaging?: string[]
    shelfLife?: string
    [key: string]: any
  }
  variety?: string
  season?: {
    start: string
    end: string
  }
  certifications?: string[]
}

export interface ProductFilters {
  category: string
  sort: 'name-asc' | 'name-desc' | 'season-asc' | 'season-desc'
  search: string
}

export interface ProductGridProps {
  products: Product[]
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
}

export interface TestimonialCardProps {
  testimonial: Testimonial
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: IconName
  features?: string[]
  benefits?: string[]
  category: string
}

// Team Member Types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

// Timeline Types
export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  icon?: keyof typeof import('lucide-react')
}
