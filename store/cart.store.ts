import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Item {
  id: number
  name: string
  price: number
}

interface CartState {
  items: Item[]
  addToCart: (item: Item) => void
  getTotalItems: () => number
  getTotalPrice: () => number
  // removeFromCart: (item: Item) => void
  // removeAllFromCart: () => void
}

const cartState: StateCreator<CartState> = (set, get) => ({
  items: [],
  addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
  getTotalItems: () => get().items.length,
  getTotalPrice: () => get().items.reduce((acc, item) => acc + item.price, 0)
})

export const useCartStore = create<CartState>()(
  persist(cartState, {
    name: 'cart-storage',
    skipHydration: true
    // getStorage: () => sessionStorage
  })
)
