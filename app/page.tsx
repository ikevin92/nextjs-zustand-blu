'use client'
import CountBear from '@/components/bear/CountBear'
import IncreaseBear from '@/components/bear/IncreaseBear'
import AddProduct from '@/components/product/AddProduct'
import ListProducts from '@/components/product/ListProducts'
import TotalProduct from '@/components/product/TotalProduct'
import { useBearsStore } from '@/store/bears.store'
import { useCartStore } from '@/store/cart.store'
import { useEffect } from 'react'

const HomePage = () => {
  const bears = useBearsStore((state) => state.bears)
  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <p>Bears: {bears}</p>
      <CountBear />
      <IncreaseBear />
      <hr />
      <AddProduct />
      <ListProducts />
      <TotalProduct />
    </div>
  )
}

export default HomePage
