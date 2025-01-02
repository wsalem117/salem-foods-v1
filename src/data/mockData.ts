import { IconName } from '@/utils/iconRegistry'

export const heroSlides = [
  {
    id: 1,
    title: 'Welcome to Our Platform',
    subtitle: 'Discover amazing products and services',
    ctaText: 'Get Started',
    ctaLink: '/products',
    backgroundImage: 'https://source.unsplash.com/random/1920x1080/?technology',
  },
  {
    id: 2,
    title: 'Premium Quality Products',
    subtitle: 'Explore our curated collection',
    ctaText: 'Shop Now',
    ctaLink: '/products',
    backgroundImage: 'https://source.unsplash.com/random/1920x1080/?business',
  },
]

export const products = [
  {
    id: '1',
    name: 'Premium Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    image: 'https://source.unsplash.com/random/400x300/?laptop',
    category: 'Electronics',
    features: ['16GB RAM', '512GB SSD', '15-inch Display'],
    specs: {
      processor: 'Intel i7',
      graphics: 'NVIDIA RTX 3050',
      battery: '10 hours',
    },
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
  'Electronics',
  'Audio',
  'Wearables',
  'Photography',
  'Gaming',
]

export const services = [
  {
    id: '1',
    title: 'Consulting',
    description: 'Expert advice for your business needs',
    icon: 'Briefcase' as IconName,
    category: 'Business',
    features: [
      'Strategic Planning',
      'Market Analysis',
      'Process Optimization',
      'Risk Assessment',
    ],
    benefits: [
      'Improved Decision Making',
      'Enhanced Efficiency',
      'Cost Reduction',
      'Sustainable Growth',
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
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital solutions',
    icon: 'Flag' as const,
  },
  {
    id: '2',
    year: '2017',
    title: 'Major Expansion',
    description: 'Opened new offices and doubled team size',
    icon: 'Building' as const,
  },
  {
    id: '3',
    year: '2019',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough technology solutions',
    icon: 'Award' as const,
  },
  {
    id: '4',
    year: '2021',
    title: 'Global Reach',
    description: 'Expanded services to international markets',
    icon: 'Globe' as const,
  },
  {
    id: '5',
    year: '2023',
    title: 'Sustainability Initiative',
    description: 'Launched eco-friendly practices and solutions',
    icon: 'Leaf' as const,
  },
]

export const statistics = [
  {
    id: '1',
    label: 'Happy Clients',
    value: '1000+',
    icon: 'Users' as const,
  },
  {
    id: '2',
    label: 'Projects Completed',
    value: '500+',
    icon: 'CheckCircle' as const,
  },
  {
    id: '3',
    label: 'Awards Won',
    value: '50+',
    icon: 'Trophy' as const,
  },
  {
    id: '4',
    label: 'Years Experience',
    value: '10+',
    icon: 'Clock' as const,
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
