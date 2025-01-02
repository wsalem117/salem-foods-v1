import { IconName } from '@/utils/iconRegistry'

export const heroSlides = [
  {
    id: 1,
    title: 'Premium Egyptian Produce',
    subtitle: 'Grade A Fruits for Global Markets',
    ctaText: 'Explore Our Products',
    ctaLink: '/products',
    backgroundImage: 'https://source.unsplash.com/random/1920x1080/?citrus-farm',
  },
  {
    id: 2,
    title: 'Farm Management Excellence',
    subtitle: 'End-to-End Agricultural Solutions',
    ctaText: 'Investment Opportunities',
    ctaLink: '/services',
    backgroundImage: 'https://source.unsplash.com/random/1920x1080/?modern-farming',
  },
  {
    id: 3,
    title: 'Global Export Solutions',
    subtitle: 'Direct Access to European Markets',
    ctaText: 'Learn More',
    ctaLink: '/about',
    backgroundImage: 'https://source.unsplash.com/random/1920x1080/?fruit-export',
  },
]

export const products = [
  {
    id: '1',
    name: 'Valencia Oranges',
    description: 'Premium sweet and juicy Valencia oranges',
    variety: 'Valencia',
    season: {
      start: 'January',
      end: 'March',
    },
    image: 'https://source.unsplash.com/random/400x300/?valencia-oranges',
    category: 'Citrus',
    features: ['High Juice Content', 'Sweet Taste', 'Long Shelf Life'],
    specs: {
      size: '72-88mm',
      packaging: ['15kg Box', '10kg Box'],
      shelfLife: '12 weeks at 3-8°C',
    },
    certifications: ['GLOBALG.A.P', 'GRASP', 'EU Organic'],
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones',
    price: 249.99,
    image: 'https://source.unsplash.com/random/400x300/?headphones',
    category: 'Audio',
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '30h Battery'],
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 199.99,
    image: 'https://source.unsplash.com/random/400x300/?smartwatch',
    category: 'Wearables',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant'],
  },
  {
    id: '4',
    name: 'Digital Camera',
    description: 'Professional DSLR camera',
    price: 899.99,
    image: 'https://source.unsplash.com/random/400x300/?camera',
    category: 'Photography',
    features: ['24MP Sensor', '4K Video', 'Wi-Fi Connectivity'],
  },
  {
    id: '5',
    name: 'Gaming Console',
    description: 'Next-gen gaming system',
    price: 499.99,
    image: 'https://source.unsplash.com/random/400x300/?gaming',
    category: 'Gaming',
    features: ['4K Gaming', 'Ray Tracing', '1TB Storage'],
  },
]

export const featuredProducts = products.slice(0, 3)

export const productCategories = [
  'All',
  'Citrus',
  'Grapes',
  'Mangoes',
  'Apples',
  'Other Fruits',
]

export const services = [
  {
    id: '1',
    title: 'Farm Management',
    description: 'End-to-end management of agricultural investments',
    icon: 'Warehouse' as IconName,
    category: 'Agriculture',
    features: [
      'Land Preparation',
      'Crop Planning',
      'Modern Irrigation',
      'Harvest Management',
    ],
    benefits: [
      'Optimized Yield',
      'Cost Efficiency',
      'Quality Assurance',
      'Market Access',
    ],
  },
  {
    id: '2',
    title: 'Development',
    description: 'Custom software solutions for modern businesses',
    icon: 'Code' as IconName,
    category: 'Technology',
    features: [
      'Custom Software Development',
      'Web Applications',
      'Mobile Apps',
      'API Integration',
    ],
    benefits: [
      'Tailored Solutions',
      'Scalable Architecture',
      'Modern Technology Stack',
      'Ongoing Support',
    ],
  },
  {
    id: '3',
    title: 'Support',
    description: '24/7 technical assistance and maintenance',
    icon: 'Headphones' as IconName,
    category: 'Support',
    features: [
      '24/7 Help Desk',
      'System Maintenance',
      'Performance Monitoring',
      'Security Updates',
    ],
    benefits: [
      'Minimal Downtime',
      'Quick Issue Resolution',
      'Proactive Maintenance',
      'Peace of Mind',
    ],
  },
]

export const teamMembers = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of industry experience',
    image: 'https://source.unsplash.com/random/400x400/?ceo',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Technical expert specializing in innovative solutions',
    image: 'https://source.unsplash.com/random/400x400/?woman',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Full-stack developer with a passion for clean code',
    image: 'https://source.unsplash.com/random/400x400/?developer',
    socialLinks: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
]

export const companyTimeline = [
  {
    id: '1',
    year: '2022',
    title: 'Company Founded',
    description: 'Salem Foods established with focus on premium produce',
    icon: 'Flag' as const,
  },
  {
    id: '2',
    year: '2023',
    title: 'EU Market Entry',
    description: 'Achieved key certifications and began EU exports',
    icon: 'Award' as const,
  },
  {
    id: '3',
    year: '2024',
    title: 'Major Growth',
    description: '650+ feddan under management, 800MT annual exports',
    icon: 'TrendingUp' as const,
  },
  {
    id: '4',
    year: '2024',
    title: 'Product Expansion',
    description: 'Added new fruit varieties to product portfolio',
    icon: 'Apple' as const,
  },
  {
    id: '5',
    year: '2024',
    title: 'Sustainability Focus',
    description: 'Implemented advanced irrigation and farming practices',
    icon: 'Leaf' as const,
  },
]

export const statistics = [
  {
    id: '1',
    label: 'Feddan Under Management',
    value: '650+',
    icon: 'Warehouse' as const,
  },
  {
    id: '2',
    label: 'MT Exported Annually',
    value: '800+',
    icon: 'Ship' as const,
  },
  {
    id: '3',
    label: 'EU Markets Served',
    value: '10+',
    icon: 'Globe' as const,
  },
  {
    id: '4',
    label: 'Certifications',
    value: '5+',
    icon: 'Award' as const,
  },
]

export const testimonials = [
  {
    id: '1',
    name: 'John Doe',
    role: 'CEO, Tech Corp',
    content: 'Amazing service and outstanding support. Highly recommended!',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Director, Innovation Inc',
    content: 'The best decision we made for our business growth.',
    avatar: 'https://source.unsplash.com/random/100x100/?woman',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Founder, StartUp',
    content: 'Exceptional quality and professional team.',
    avatar: 'https://source.unsplash.com/random/100x100/?man',
  },
]
