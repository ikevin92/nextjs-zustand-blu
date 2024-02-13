'use client'

import { useCartStore } from '@/store/cart.store'

const AddProduct = () => {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleClickAddToCart = () => {
    addToCart({
      id: Date.now(),
      name: 'Product ' + Date.now(),
      price: Math.random() * 100
    })
  }

  return (
    <button
      onClick={handleClickAddToCart}
      className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
    >
      AddProduct
    </button>
  )
}

export default AddProduct
