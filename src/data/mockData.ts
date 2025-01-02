import { IconName } from '@/utils/iconRegistry'

export const heroSlides = [
  {
    id: 1,
    title: 'Premium Egyptian Produce',
    subtitle: 'Grade A Fruits for Global Markets',
    ctaText: 'Explore Our Products',
    ctaLink: '/products',
    backgroundImage: 'https://i0.wp.com/citrusindustry.net/wp-content/uploads/2021/12/CitrusIndustry-Dec2021-WEB-10.jpg?fit=1382%2C922&ssl=1',
  },
  {
    id: 2,
    title: 'Farm Management Excellence',
    subtitle: 'End-to-End Agricultural Solutions',
    ctaText: 'Investment Opportunities',
    ctaLink: '/services',
    backgroundImage: 'https://greenerideal.com/wp-content/uploads/2022/11/smart-farming-technologies-1.jpg',
  },
  {
    id: 3,
    title: 'Global Export Solutions',
    subtitle: 'Direct Access to European Markets',
    ctaText: 'Learn More',
    ctaLink: '/about',
    backgroundImage: 'https://media.rhenus.group/11_Blog/Images/New_images/header.jpeg',
  },
]

export const products = [
  // 1. Prioritized Salem Foods Products
  {
    id: '1',
    name: 'Valencia Oranges',
    description: 'Premium sweet and juicy Valencia oranges',
    variety: 'Valencia',
    season: {
      start: 'January',
      end: 'March',
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7BaczZY3Ekd82dx0k7Vr4EoHISWTyvOktGufiT4WnKnpHUq441mJcHC-fZ0P-d6Nrm4&usqp=CAU',
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
    name: 'Navel Oranges',
    description: 'Sweet and seedless Navel oranges',
    variety: 'Navel',
    season: {
      start: 'December',
      end: 'February',
    },
    image: 'https://i0.wp.com/fruitlinkco.com/home/wp-content/uploads/2018/11/000.png?fit=580%2C400&ssl=1',
    category: 'Citrus',
    features: ['Seedless', 'Sweet Flavor', 'Easy to Peel'],
    specs: {
      size: '64-88mm',
      packaging: ['15kg Box', '10kg Box'],
      shelfLife: '10 weeks at 3-8°C',
    },
    certifications: ['GLOBALG.A.P', 'GRASP'],
  },
  {
    id: '3',
    name: 'Red Globe Grapes',
    description: 'Large, crisp Red Globe grapes',
    variety: 'Red Globe',
    season: {
      start: 'June',
      end: 'August',
    },
    image: 'https://m.media-amazon.com/images/I/61WXkTf6FuL.jpg',
    category: 'Grapes',
    features: ['Large Berries', 'Crisp Texture', 'Sweet Taste'],
    specs: {
      size: '24-28mm',
      packaging: ['8kg Box', '5kg Box'],
      shelfLife: '6 weeks at 0-2°C',
    },
    certifications: ['GLOBALG.A.P', 'BRC'],
  },
  {
    id: '4',
    name: 'Sukkari Mangoes',
    description: 'Premium Egyptian Sukkari mangoes',
    variety: 'Sukkari',
    season: {
      start: 'July',
      end: 'September',
    },
    image: 'https://source.unsplash.com/random/400x300/?mango',
    category: 'Mangoes',
    features: ['Rich Flavor', 'Firm Texture', 'Low Fiber'],
    specs: {
      size: '250-350g',
      packaging: ['6kg Box', '4kg Box'],
      shelfLife: '3 weeks at 8-12°C',
    },
    certifications: ['GLOBALG.A.P', 'EU Organic'],
  },
  {
    id: '5',
    name: 'Anna Apples',
    description: 'Crisp and sweet Anna apples',
    variety: 'Anna',
    season: {
      start: 'May',
      end: 'July',
    },
    image: 'https://source.unsplash.com/random/400x300/?apple',
    category: 'Apples',
    features: ['Sweet-Tart Flavor', 'Crisp Texture', 'Good Storage'],
    specs: {
      size: '70-80mm',
      packaging: ['18kg Box', '12kg Box'],
      shelfLife: '12 weeks at 0-4°C',
    },
    certifications: ['GLOBALG.A.P', 'GRASP'],
  },

  // 2. Top 40 Additional Sourced Products
  {
    id: '6',
    name: 'Lemons',
    description: 'Bright, acidic lemons perfect for juicing',
    variety: 'Eureka',
    season: {
      start: 'November',
      end: 'March',
    },
    image: 'https://source.unsplash.com/random/400x300/?lemons',
    category: 'Citrus',
    features: ['High Vitamin C', 'Tangy Flavor', 'Versatile Use'],
    specs: {
      size: '50-60mm',
      packaging: ['15kg Box', '10kg Box'],
      shelfLife: '10 weeks at 3-8°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '7',
    name: 'Mandarin Oranges',
    description: 'Easy-to-peel citrus with a sweet-tangy punch',
    variety: 'Murcott',
    season: {
      start: 'January',
      end: 'April',
    },
    image: 'https://source.unsplash.com/random/400x300/?mandarin',
    category: 'Citrus',
    features: ['Seedless or Few Seeds', 'Rich Aroma', 'Thin Skin'],
    specs: {
      size: '50-65mm',
      packaging: ['10kg Box', '5kg Net Bag'],
      shelfLife: '8 weeks at 3-8°C',
    },
    certifications: ['GLOBALG.A.P', 'GRASP'],
  },
  {
    id: '8',
    name: 'Grapefruit',
    description: 'Juicy, slightly bitter grapefruit',
    variety: 'Ruby Red',
    season: {
      start: 'November',
      end: 'February',
    },
    image: 'https://source.unsplash.com/random/400x300/?grapefruit',
    category: 'Citrus',
    features: ['Deep Red Flesh', 'High Juice Yield', 'Refreshing Taste'],
    specs: {
      size: '90-110mm',
      packaging: ['15kg Box'],
      shelfLife: '10 weeks at 3-8°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '9',
    name: 'Pomegranates',
    description: 'Ruby-red seeds packed with antioxidants',
    variety: 'Wonderful',
    season: {
      start: 'September',
      end: 'November',
    },
    image: 'https://source.unsplash.com/random/400x300/?pomegranate',
    category: 'Fruit',
    features: ['High Antioxidants', 'Deep Red Arils', 'Sweet-Tart Flavor'],
    specs: {
      size: '250-500g',
      packaging: ['5kg Box'],
      shelfLife: '6 weeks at 5-7°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '10',
    name: 'Strawberries',
    description: 'Sweet, red strawberries great for desserts',
    variety: 'Festival',
    season: {
      start: 'December',
      end: 'April',
    },
    image: 'https://source.unsplash.com/random/400x300/?strawberries',
    category: 'Berries',
    features: ['Bright Red Color', 'Juicy Texture', 'Aromatic'],
    specs: {
      size: '20-25mm',
      packaging: ['250g Punnet', '500g Punnet'],
      shelfLife: '7-10 days at 2-4°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '11',
    name: 'Watermelon',
    description: 'Refreshing and hydrating watermelon',
    variety: 'Crimson Sweet',
    season: {
      start: 'May',
      end: 'August',
    },
    image: 'https://source.unsplash.com/random/400x300/?watermelon',
    category: 'Melons',
    features: ['High Water Content', 'Sweet Red Flesh', 'Refreshing Taste'],
    specs: {
      size: '5-8kg',
      packaging: ['Loose in Bins'],
      shelfLife: '2-3 weeks at 10-15°C',
    },
    certifications: [],
  },
  {
    id: '12',
    name: 'Cantaloupe',
    description: 'Aromatic melon with orange flesh',
    variety: 'Galia',
    season: {
      start: 'May',
      end: 'September',
    },
    image: 'https://source.unsplash.com/random/400x300/?cantaloupe',
    category: 'Melons',
    features: ['High Fragrance', 'Sweet Flavor', 'Juicy Flesh'],
    specs: {
      size: '1-1.5kg',
      packaging: ['Carton Box', 'Bulk Bin'],
      shelfLife: '2 weeks at 7-10°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '13',
    name: 'Honeydew Melon',
    description: 'Mildly sweet melon with greenish-white flesh',
    variety: 'Honeydew',
    season: {
      start: 'May',
      end: 'September',
    },
    image: 'https://source.unsplash.com/random/400x300/?honeydew',
    category: 'Melons',
    features: ['Pale Green Flesh', 'Mild Sweetness', 'Smooth Rind'],
    specs: {
      size: '1.5-2.5kg',
      packaging: ['Carton Box'],
      shelfLife: '2 weeks at 7-10°C',
    },
    certifications: [],
  },
  {
    id: '14',
    name: 'Potatoes',
    description: 'Versatile starchy tubers for multiple uses',
    variety: 'Spunta',
    season: {
      start: 'February',
      end: 'May',
    },
    image: 'https://source.unsplash.com/random/400x300/?potatoes',
    category: 'Vegetables',
    features: ['High Starch', 'Smooth Skin', 'Long Shelf Life'],
    specs: {
      size: '40-60mm',
      packaging: ['25kg Sack', '10kg Sack'],
      shelfLife: '3-4 months at 8-10°C',
    },
    certifications: [],
  },
  {
    id: '15',
    name: 'Sweet Potatoes',
    description: 'Naturally sweet root vegetable',
    variety: 'Beauregard',
    season: {
      start: 'August',
      end: 'November',
    },
    image: 'https://source.unsplash.com/random/400x300/?sweet-potato',
    category: 'Vegetables',
    features: ['Orange Flesh', 'High Beta-Carotene', 'Sweet Flavor'],
    specs: {
      size: '100-300g',
      packaging: ['15kg Carton'],
      shelfLife: '3-4 months at 12-15°C',
    },
    certifications: [],
  },
  {
    id: '16',
    name: 'Carrots',
    description: 'Crunchy orange carrots rich in beta-carotene',
    variety: 'Nantes',
    season: {
      start: 'January',
      end: 'April',
    },
    image: 'https://source.unsplash.com/random/400x300/?carrots',
    category: 'Vegetables',
    features: ['Bright Orange Color', 'Sweet Taste', 'High Beta-Carotene'],
    specs: {
      size: 'Diameter 20-30mm',
      packaging: ['10kg Bag', '5kg Bag'],
      shelfLife: '4-6 weeks at 0-4°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '17',
    name: 'Red Onions',
    description: 'Flavorful onions with a distinctive red-purple layer',
    variety: 'Red Creole',
    season: {
      start: 'May',
      end: 'August',
    },
    image: 'https://source.unsplash.com/random/400x300/?red-onion',
    category: 'Vegetables',
    features: ['Sharp Flavor', 'Rich Color', 'Long Shelf Life'],
    specs: {
      size: '50-70mm',
      packaging: ['20kg Sack', '10kg Net Bag'],
      shelfLife: '5-6 months at 0-4°C',
    },
    certifications: [],
  },
  {
    id: '18',
    name: 'Garlic',
    description: 'Pungent bulbs for culinary and medicinal use',
    variety: 'Baladi',
    season: {
      start: 'March',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?garlic',
    category: 'Vegetables',
    features: ['Strong Aroma', 'Antibacterial Properties', 'Long Shelf Life'],
    specs: {
      size: '40-60mm bulb',
      packaging: ['20kg Net Bag', '5kg Carton'],
      shelfLife: '6-8 months at 0-4°C',
    },
    certifications: [],
  },
  {
    id: '19',
    name: 'Green Beans',
    description: 'Crisp and tender green beans',
    variety: 'Fine Beans',
    season: {
      start: 'October',
      end: 'March',
    },
    image: 'https://source.unsplash.com/random/400x300/?green-beans',
    category: 'Vegetables',
    features: ['Thin Pods', 'High Fiber', 'Bright Green Color'],
    specs: {
      size: '100-120mm length',
      packaging: ['5kg Carton'],
      shelfLife: '2 weeks at 5-7°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '20',
    name: 'Bell Peppers',
    description: 'Vibrant peppers available in red, green, yellow',
    variety: 'California Wonder',
    season: {
      start: 'October',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?bell-peppers',
    category: 'Vegetables',
    features: ['Rich in Vitamin C', 'Crunchy Texture', 'Bright Colors'],
    specs: {
      size: '70-90mm diameter',
      packaging: ['5kg Carton'],
      shelfLife: '2-3 weeks at 7-10°C',
    },
    certifications: [],
  },
  {
    id: '21',
    name: 'Chili Peppers',
    description: 'Spicy peppers for sauces and seasonings',
    variety: 'Hot Jalapeno',
    season: {
      start: 'October',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?chili-peppers',
    category: 'Vegetables',
    features: ['Spicy Flavor', 'High Capsaicin', 'Bright Red or Green'],
    specs: {
      size: '70-100mm length',
      packaging: ['3kg Carton'],
      shelfLife: '2 weeks at 7-10°C',
    },
    certifications: [],
  },
  {
    id: '22',
    name: 'Cucumbers',
    description: 'Cool and refreshing cucumbers',
    variety: 'Beit Alpha',
    season: {
      start: 'February',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?cucumbers',
    category: 'Vegetables',
    features: ['High Water Content', 'Crisp Texture', 'Mild Flavor'],
    specs: {
      size: '120-150mm length',
      packaging: ['5kg Carton'],
      shelfLife: '1-2 weeks at 7-10°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '23',
    name: 'Tomatoes',
    description: 'Juicy tomatoes, perfect for salads or sauces',
    variety: 'Roma',
    season: {
      start: 'January',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?tomatoes',
    category: 'Vegetables',
    features: ['Rich Red Color', 'Juicy Flesh', 'High Lycopene'],
    specs: {
      size: '60-80mm diameter',
      packaging: ['6kg Carton'],
      shelfLife: '1-2 weeks at 10-12°C',
    },
    certifications: [],
  },
  {
    id: '24',
    name: 'Lettuce',
    description: 'Fresh green lettuce for salads',
    variety: 'Iceberg',
    season: {
      start: 'November',
      end: 'April',
    },
    image: 'https://source.unsplash.com/random/400x300/?lettuce',
    category: 'Leafy Greens',
    features: ['Crisp Leaves', 'High Water Content', 'Mild Taste'],
    specs: {
      size: '400-600g heads',
      packaging: ['8kg Carton'],
      shelfLife: '1-2 weeks at 2-4°C',
    },
    certifications: [],
  },
  {
    id: '25',
    name: 'Spinach',
    description: 'Nutritious dark green leafy vegetable',
    variety: 'Savoy',
    season: {
      start: 'October',
      end: 'April',
    },
    image: 'https://source.unsplash.com/random/400x300/?spinach',
    category: 'Leafy Greens',
    features: ['High Iron Content', 'Tender Leaves', 'Dark Green Color'],
    specs: {
      size: 'Loose Leaves',
      packaging: ['3kg Carton'],
      shelfLife: '7-10 days at 2-4°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '26',
    name: 'Broccoli',
    description: 'Crunchy florets packed with vitamins',
    variety: 'Calabrese',
    season: {
      start: 'November',
      end: 'April',
    },
    image: 'https://source.unsplash.com/random/400x300/?broccoli',
    category: 'Vegetables',
    features: ['High in Vitamin C', 'Dark Green Florets', 'Firm Texture'],
    specs: {
      size: '300-500g heads',
      packaging: ['5kg Carton'],
      shelfLife: '2 weeks at 0-4°C',
    },
    certifications: [],
  },
  {
    id: '27',
    name: 'Cauliflower',
    description: 'White, dense heads perfect for roasting',
    variety: 'Snowball',
    season: {
      start: 'November',
      end: 'March',
    },
    image: 'https://source.unsplash.com/random/400x300/?cauliflower',
    category: 'Vegetables',
    features: ['Firm White Florets', 'Mild Taste', 'Versatile Use'],
    specs: {
      size: '600-800g heads',
      packaging: ['5kg Carton'],
      shelfLife: '2 weeks at 0-4°C',
    },
    certifications: [],
  },
  {
    id: '28',
    name: 'Eggplant',
    description: 'Glossy purple eggplants for a range of dishes',
    variety: 'Black Beauty',
    season: {
      start: 'April',
      end: 'October',
    },
    image: 'https://source.unsplash.com/random/400x300/?eggplant',
    category: 'Vegetables',
    features: ['Glossy Purple Skin', 'Spongy Texture', 'Versatile Use'],
    specs: {
      size: '15-20cm length',
      packaging: ['5kg Carton'],
      shelfLife: '1-2 weeks at 10-12°C',
    },
    certifications: [],
  },
  {
    id: '29',
    name: 'Zucchini',
    description: 'Tender summer squash, mild flavor',
    variety: 'Dark Green',
    season: {
      start: 'April',
      end: 'October',
    },
    image: 'https://source.unsplash.com/random/400x300/?zucchini',
    category: 'Vegetables',
    features: ['Green Skin', 'Soft Inner Flesh', 'Low Calories'],
    specs: {
      size: '10-15cm length',
      packaging: ['5kg Carton'],
      shelfLife: '1-2 weeks at 7-10°C',
    },
    certifications: [],
  },
  {
    id: '30',
    name: 'Pumpkin',
    description: 'Rich, sweet squash ideal for soups and pies',
    variety: 'Butternut',
    season: {
      start: 'September',
      end: 'January',
    },
    image: 'https://source.unsplash.com/random/400x300/?pumpkin',
    category: 'Vegetables',
    features: ['Orange Flesh', 'Nutty Flavor', 'Long Storage'],
    specs: {
      size: '1-3kg',
      packaging: ['Bulk Bin', '10kg Carton'],
      shelfLife: '2-3 months at 10-12°C',
    },
    certifications: [],
  },
  {
    id: '31',
    name: 'Okra',
    description: 'Green pods used in Middle Eastern and African cuisine',
    variety: 'Baladi',
    season: {
      start: 'May',
      end: 'September',
    },
    image: 'https://source.unsplash.com/random/400x300/?okra',
    category: 'Vegetables',
    features: ['Slimy Texture', 'Rich in Fiber', 'Unique Flavor'],
    specs: {
      size: '5-10cm pods',
      packaging: ['5kg Carton'],
      shelfLife: '7-10 days at 7-10°C',
    },
    certifications: [],
  },
  {
    id: '32',
    name: 'Peaches',
    description: 'Juicy stone fruit with a fuzzy skin',
    variety: 'Florida Prince',
    season: {
      start: 'April',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?peach',
    category: 'Stone Fruits',
    features: ['Soft Fuzzy Skin', 'Sweet Fragrance', 'Succulent Flesh'],
    specs: {
      size: '60-70mm',
      packaging: ['5kg Carton'],
      shelfLife: '2-3 weeks at 0-4°C',
    },
    certifications: [],
  },
  {
    id: '33',
    name: 'Apricots',
    description: 'Golden-orange stone fruit with a sweet-tart flavor',
    variety: 'Amore',
    season: {
      start: 'May',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?apricot',
    category: 'Stone Fruits',
    features: ['Velvety Skin', 'Sweet-Tart Flavor', 'Juicy Flesh'],
    specs: {
      size: '35-45mm',
      packaging: ['5kg Carton'],
      shelfLife: '2 weeks at 0-2°C',
    },
    certifications: [],
  },
  {
    id: '34',
    name: 'Plums',
    description: 'Soft, round stone fruit with a tangy interior',
    variety: 'Black Amber',
    season: {
      start: 'June',
      end: 'August',
    },
    image: 'https://source.unsplash.com/random/400x300/?plum',
    category: 'Stone Fruits',
    features: ['Smooth Skin', 'Tangy Flesh', 'Varied Colors'],
    specs: {
      size: '40-60mm',
      packaging: ['5kg Carton'],
      shelfLife: '3 weeks at 0-4°C',
    },
    certifications: [],
  },
  {
    id: '35',
    name: 'Dates',
    description: 'Naturally sweet, chewy fruit from date palms',
    variety: 'Medjool',
    season: {
      start: 'August',
      end: 'October',
    },
    image: 'https://source.unsplash.com/random/400x300/?dates',
    category: 'Fruit',
    features: ['High Sugar Content', 'Chewy Texture', 'Rich Caramel Flavor'],
    specs: {
      size: '20-30g each',
      packaging: ['5kg Box'],
      shelfLife: '6-12 months (cool, dry storage)',
    },
    certifications: [],
  },
  {
    id: '36',
    name: 'Guava',
    description: 'Tropical fruit with aromatic, pinkish or white flesh',
    variety: 'Baladi',
    season: {
      start: 'August',
      end: 'November',
    },
    image: 'https://source.unsplash.com/random/400x300/?guava',
    category: 'Tropical Fruits',
    features: ['Fragrant Aroma', 'Soft Pulp', 'High Vitamin C'],
    specs: {
      size: '100-200g',
      packaging: ['4kg Box'],
      shelfLife: '2-3 weeks at 8-10°C',
    },
    certifications: [],
  },
  {
    id: '37',
    name: 'Peas',
    description: 'Green pods filled with sweet, round peas',
    variety: 'Shelling Peas',
    season: {
      start: 'February',
      end: 'May',
    },
    image: 'https://source.unsplash.com/random/400x300/?peas',
    category: 'Vegetables',
    features: ['Sweet Taste', 'Bright Green Color', 'Tender Texture'],
    specs: {
      size: 'Pod length ~7cm',
      packaging: ['5kg Carton'],
      shelfLife: '1-2 weeks at 1-2°C',
    },
    certifications: [],
  },
  {
    id: '38',
    name: 'Fresh Herbs',
    description: 'Aromatic herbs such as mint, basil, dill',
    variety: 'Mixed Herbs',
    season: {
      start: 'Year-Round',
      end: 'Year-Round',
    },
    image: 'https://source.unsplash.com/random/400x300/?herbs',
    category: 'Herbs',
    features: ['Intense Aroma', 'Bright Green Leaves', 'Culinary Uses'],
    specs: {
      size: 'Bunched Stems',
      packaging: ['1kg Boxes', 'Bulk Bag'],
      shelfLife: '7-10 days at 2-4°C',
    },
    certifications: ['GLOBALG.A.P'],
  },
  {
    id: '39',
    name: 'Green Lentils',
    description: 'High-protein pulses commonly used in stews',
    variety: 'Large Green',
    season: {
      start: 'Year-Round',
      end: 'Year-Round',
    },
    image: 'https://source.unsplash.com/random/400x300/?lentils',
    category: 'Pulses',
    features: ['High Protein', 'Neutral Flavor', 'Dry Storage'],
    specs: {
      size: '3-4mm diameter',
      packaging: ['25kg Sack'],
      shelfLife: '1 year (cool, dry storage)',
    },
    certifications: [],
  },
  {
    id: '40',
    name: 'Dry Beans',
    description: 'A variety of beans for international cuisine',
    variety: 'Fava, White Beans',
    season: {
      start: 'Year-Round',
      end: 'Year-Round',
    },
    image: 'https://source.unsplash.com/random/400x300/?beans',
    category: 'Pulses',
    features: ['Rich in Protein', 'Versatile', 'Long Shelf Life'],
    specs: {
      size: 'Varies by type',
      packaging: ['25kg Sack'],
      shelfLife: '1 year (cool, dry storage)',
    },
    certifications: [],
  },
  {
    id: '41',
    name: 'Molokhia (Jute Mallow)',
    description: 'A traditional green leafy vegetable in Middle Eastern dishes',
    variety: 'Baladi',
    season: {
      start: 'June',
      end: 'September',
    },
    image: 'https://source.unsplash.com/random/400x300/?molokhia',
    category: 'Leafy Greens',
    features: ['Slippery Texture', 'High Nutritional Value', 'Rich in Iron'],
    specs: {
      size: 'Loose Leaves',
      packaging: ['5kg Carton'],
      shelfLife: '7-10 days at 2-4°C',
    },
    certifications: [],
  },
  {
    id: '42',
    name: 'Apricots (Fresh & Dried)',
    description: 'Golden-orange fruit, also offered in dried form',
    variety: 'Local Egyptian',
    season: {
      start: 'May',
      end: 'July',
    },
    image: 'https://source.unsplash.com/random/400x300/?dried-apricots',
    category: 'Stone Fruits',
    features: ['Sweet-Tart Flavor', 'Good for Drying', 'Soft Flesh'],
    specs: {
      size: '35-45mm (fresh)',
      packaging: ['5kg Carton (fresh)', 'Bulk Bag (dried)'],
      shelfLife: '2 weeks fresh, 6+ months dried',
    },
    certifications: [],
  },
  {
    id: '43',
    name: 'Papaya',
    description: 'Tropical fruit with orange-pink sweet pulp',
    variety: 'Solo',
    season: {
      start: 'March',
      end: 'July',
    },
    image: 'https://source.unsplash.com/random/400x300/?papaya',
    category: 'Tropical Fruits',
    features: ['Rich Flavor', 'Soft Texture', 'High Vitamin C'],
    specs: {
      size: '500-1000g',
      packaging: ['4kg Carton'],
      shelfLife: '2 weeks at 8-10°C',
    },
    certifications: [],
  },
  {
    id: '44',
    name: 'Green Peppers',
    description: 'Crunchy, tangy peppers often used in salads',
    variety: 'Bell Green',
    season: {
      start: 'October',
      end: 'June',
    },
    image: 'https://source.unsplash.com/random/400x300/?green-peppers',
    category: 'Vegetables',
    features: ['Crisp Texture', 'Mild Flavor', 'Bright Green Skin'],
    specs: {
      size: '70-90mm diameter',
      packaging: ['5kg Carton'],
      shelfLife: '2-3 weeks at 7-10°C',
    },
    certifications: [],
  },
  {
    id: '45',
    name: 'Peanuts',
    description: 'Nutrient-dense legume commonly used as a snack or in cooking',
    variety: 'Virginia',
    season: {
      start: 'June',
      end: 'September',
    },
    image: 'https://source.unsplash.com/random/400x300/?peanuts',
    category: 'Legumes',
    features: ['High Protein', 'Rich Flavor', 'Versatile Use'],
    specs: {
      size: 'Kernel size varies',
      packaging: ['25kg Sack'],
      shelfLife: '6-9 months (cool, dry storage)',
    },
    certifications: [],
  },
];


export const featuredProducts = products.slice(0, 3)

export const productCategories = [
  'All',
  'Citrus',
  'Grapes',
  'Mangoes',
  'Apples',
  'Pomegranates',
  'Table Dates',
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
    title: 'Export Services',
    description: 'Complete export and logistics solutions',
    icon: 'Ship' as IconName,
    category: 'Logistics',
    features: [
      'Documentation Handling',
      'Customs Clearance',
      'Temperature Control',
      'Container Loading',
    ],
    benefits: [
      'Fast Processing',
      'Compliance Assured',
      'Quality Preservation',
      'Door-to-Door Service',
    ],
  },
  {
    id: '3',
    title: 'Quality Control',
    description: 'Rigorous quality assurance at every stage',
    icon: 'CheckCircle' as IconName,
    category: 'Quality',
    features: [
      'Pre-Harvest Testing',
      'Sorting & Grading',
      'Cold Chain Monitoring',
      'Quality Certification',
    ],
    benefits: [
      'Premium Quality',
      'Extended Shelf Life',
      'Market Compliance',
      'Customer Satisfaction',
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
