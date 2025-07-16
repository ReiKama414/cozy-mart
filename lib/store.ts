import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  stock: number;
  tags: string[];
  isHot?: boolean;
  isNew?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  shippingAddress: any;
  paymentMethod: string;
}

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minAmount: number;
  expiresAt: Date;
}

// Store interfaces
interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

interface AppStore {
  wishlist: string[];
  searchHistory: string[];
  recentlyViewed: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  addToSearchHistory: (query: string) => void;
  addToRecentlyViewed: (productId: string) => void;
  clearSearchHistory: () => void;
}

// Cart Store
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          return {
            items: [...state.items, { product, quantity }]
          };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.product.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

// User Store
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simple validation for demo
        if (email === 'demo@example.com' && password === 'password') {
          const user = {
            id: '1',
            email,
            name: 'Demo User',
            avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          };
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },
      register: async (email, password, name) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const user = {
          id: Date.now().toString(),
          email,
          name,
          avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        };
        set({ user, isAuthenticated: true });
        return true;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      updateProfile: (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null
        }));
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

// App Store
export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      wishlist: [],
      searchHistory: [],
      recentlyViewed: [],
      addToWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist
            : [...state.wishlist, productId]
        }));
      },
      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter(id => id !== productId)
        }));
      },
      addToSearchHistory: (query) => {
        set((state) => {
          const filtered = state.searchHistory.filter(q => q !== query);
          return {
            searchHistory: [query, ...filtered].slice(0, 10)
          };
        });
      },
      addToRecentlyViewed: (productId) => {
        set((state) => {
          const filtered = state.recentlyViewed.filter(id => id !== productId);
          return {
            recentlyViewed: [productId, ...filtered].slice(0, 20)
          };
        });
      },
      clearSearchHistory: () => set({ searchHistory: [] }),
    }),
    {
      name: 'app-storage',
    }
  )
);