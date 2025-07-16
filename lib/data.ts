import { Product, Order, Coupon } from './store';

// Mock product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Cozy Cloud Pillow 🌤️',
    price: 2980,
    originalPrice: 3980,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'home',
    description: 'Ultra-soft memory foam pillow with bamboo fiber cover for the most comfortable sleep experience.',
    rating: 4.8,
    reviews: 324,
    stock: 45,
    tags: ['comfortable', 'eco-friendly', 'bestseller'],
    isHot: true,
    discount: 25,
  },
  {
    id: '2',
    name: 'Minimalist Plant Pot 🌱',
    price: 1580,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'home',
    description: 'Elegant ceramic plant pot with drainage system, perfect for your favorite plants.',
    rating: 4.6,
    reviews: 128,
    stock: 23,
    tags: ['ceramic', 'minimalist', 'plants'],
    isNew: true,
  },
  {
    id: '3',
    name: 'Sunset Harmony Mug ☕',
    price: 980,
    originalPrice: 1280,
    image: 'https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'kitchen',
    description: 'Hand-crafted ceramic mug with warm gradient colors that changes with temperature.',
    rating: 4.9,
    reviews: 567,
    stock: 78,
    tags: ['handmade', 'color-changing', 'unique'],
    isHot: true,
    discount: 23,
  },
  {
    id: '4',
    name: 'Zen Garden Kit 🧘',
    price: 3480,
    image: 'https://images.pexels.com/photos/3571264/pexels-photo-3571264.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'lifestyle',
    description: 'Complete zen garden set with sand, stones, and wooden rake for mindful meditation.',
    rating: 4.7,
    reviews: 89,
    stock: 12,
    tags: ['meditation', 'zen', 'mindfulness'],
    isNew: true,
  },
  {
    id: '5',
    name: 'Kawaii Cat Lamp 🐱',
    price: 2680,
    originalPrice: 3280,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'decor',
    description: 'Adorable cat-shaped LED lamp with touch control and warm ambient lighting.',
    rating: 4.8,
    reviews: 456,
    stock: 34,
    tags: ['cute', 'led', 'night-light'],
    isHot: true,
    discount: 18,
  },
  {
    id: '6',
    name: 'Artisan Tea Set 🍃',
    price: 5980,
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'kitchen',
    description: 'Traditional Japanese ceramic tea set with teapot, cups, and bamboo tray.',
    rating: 4.9,
    reviews: 234,
    stock: 18,
    tags: ['traditional', 'ceramic', 'tea-ceremony'],
    isNew: true,
  },
  {
    id: '7',
    name: 'Fluffy Cloud Slippers ☁️',
    price: 1980,
    originalPrice: 2480,
    image: 'https://images.pexels.com/photos/1102769/pexels-photo-1102769.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'fashion',
    description: 'Ultra-soft memory foam slippers that feel like walking on clouds.',
    rating: 4.7,
    reviews: 678,
    stock: 67,
    tags: ['comfortable', 'memory-foam', 'cozy'],
    isHot: true,
    discount: 20,
  },
  {
    id: '8',
    name: 'Bamboo Desk Organizer 📝',
    price: 2380,
    image: 'https://images.pexels.com/photos/159832/art-materials-brushes-rulers-scissors-159832.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'office',
    description: 'Sustainable bamboo desk organizer with multiple compartments for perfect organization.',
    rating: 4.6,
    reviews: 145,
    stock: 29,
    tags: ['bamboo', 'eco-friendly', 'organization'],
    isNew: true,
  },
];

// Mock categories
export const categories = [
  { id: 'home', name: 'Home & Living', emoji: '🏠', color: 'blush' },
  { id: 'kitchen', name: 'Kitchen & Dining', emoji: '🍳', color: 'sage' },
  { id: 'decor', name: 'Decor & Art', emoji: '🎨', color: 'cream' },
  { id: 'lifestyle', name: 'Lifestyle', emoji: '✨', color: 'blush' },
  { id: 'fashion', name: 'Fashion', emoji: '👗', color: 'sage' },
  { id: 'office', name: 'Office & Study', emoji: '💼', color: 'cream' },
];

// Mock popular search terms
export const popularSearches = [
  'cozy pillow', 'ceramic mug', 'plant pot', 'zen garden', 
  'led lamp', 'tea set', 'slippers', 'desk organizer'
];

// Mock coupons
export const coupons: Coupon[] = [
  {
    id: '1',
    code: 'WELCOME20',
    discount: 20,
    type: 'percentage',
    minAmount: 2000,
    expiresAt: new Date('2024-12-31'),
  },
  {
    id: '2',
    code: 'SAVE500',
    discount: 500,
    type: 'fixed',
    minAmount: 3000,
    expiresAt: new Date('2024-12-31'),
  },
];

// Mock orders
export const orders: Order[] = [
  {
    id: '1',
    userId: '1',
    items: [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 2 },
    ],
    total: 4940,
    status: 'delivered',
    createdAt: new Date('2024-01-15'),
    shippingAddress: {
      name: 'Demo User',
      address: '123 Sakura Street',
      city: 'Tokyo',
      postalCode: '100-0001',
    },
    paymentMethod: 'Credit Card',
  },
];

// Flash sale items
export const flashSaleItems = products.filter(p => p.isHot).slice(0, 4);

// Today's specials
export const todaysSpecials = products.filter(p => p.discount && p.discount > 15).slice(0, 6);

// New arrivals
export const newArrivals = products.filter(p => p.isNew);

// Best sellers (mock data based on review count)
export const bestSellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8);

// Admin dashboard stats
export const dashboardStats = {
  totalSales: 1247500,
  totalOrders: 324,
  totalProducts: products.length,
  totalUsers: 1456,
  salesGrowth: 12.5,
  ordersGrowth: 8.3,
  conversionRate: 3.2,
};