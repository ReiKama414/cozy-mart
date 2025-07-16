# Cozy - Complete E-commerce Platform

A beautiful, production-ready e-commerce platform built with Next.js, featuring a cozy Japanese-inspired design and comprehensive shopping experience.

## Features

### Frontend Features

- **Beautiful Homepage** with hero banners, flash sales, and category browsing
- **Advanced Product Catalog** with filtering, sorting, and search functionality
- **Complete Shopping Cart** with quantity management and coupon system
- **Detailed Product Pages** with image galleries, reviews, and recommendations
- **User Authentication** simulation with login/register flows
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion for delightful interactions

### Pages Included

- **Core Shopping**: Home, Products, Categories, Cart, Checkout
- **Shop Pages**: New Arrivals, Best Sellers, Sale Items, Gift Cards
- **Customer Service**: Contact, Size Guide, Returns, Shipping Info
- **Company Pages**: About Us, Careers, Press Center, Sustainability
- **Utility Pages**: 404 Error, Loading States

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cozymart
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Features Walkthrough

### Homepage Experience

- **Hero Banner** with animated call-to-actions
- **Flash Sale Section** with countdown timers and progress bars
- **Category Grid** with hover animations and emoji icons
- **Product Recommendations** based on popularity and ratings

### Product Discovery

- **Advanced Filtering** by price, rating, availability, and categories
- **Smart Search** with autocomplete and search history
- **Multiple View Modes** (grid/list) with smooth transitions
- **Sort Options** by popularity, price, rating, and date

### Shopping Experience

- **Interactive Product Cards** with hover effects and quick actions
- **Detailed Product Pages** with image galleries and specifications
- **Shopping Cart** with quantity controls and real-time totals
- **Coupon System** with animated application effects

### Customer Support

- **Comprehensive Help Pages** covering all customer needs
- **Interactive Contact Forms** with validation
- **Detailed Policies** for returns, shipping, and sizing
- **Company Information** with team profiles and values

## State Management

The application uses Zustand for state management with three main stores:

### Cart Store (`useCartStore`)

- Add/remove items
- Update quantities
- Calculate totals
- Apply coupons

### User Store (`useUserStore`)

- Authentication state
- User profile data
- Login/logout functionality

### App Store (`useAppStore`)

- Wishlist management
- Search history
- Recently viewed items
- UI preferences

## Data Flow

The application uses mock data stored in `lib/data.ts` to simulate a real e-commerce backend:

- **Products**: Complete product catalog with images, prices, and metadata
- **Categories**: Organized product categories with icons and descriptions
- **Orders**: Sample order history and tracking information
- **Users**: Mock user profiles and authentication data
- **Coupons**: Discount codes and promotional offers

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## Acknowledgments

- **Design Inspiration**: Japanese minimalism and cozy aesthetics
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icon set
- **Images**: Pexels for product photography
- **Animations**: Framer Motion for smooth interactions
