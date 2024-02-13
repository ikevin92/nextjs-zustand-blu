import { useCartStore } from '@/store/cart.store'

const ListProducts = () => {
  const items = useCartStore((state) => state.items)
  return (
    <div>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  )
}

export default ListProducts
