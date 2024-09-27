import React from 'react'
import{getItemsSelector} from '../redux/slice/CartSlice'
import { useSelector } from 'react-redux'
const Cart = () => {
  const items=useSelector(getItemsSelector)
  const total = items.reduce((totalProduct,newProduct)=>totalProduct + newProduct.price ,0)
  console.log(total)
  console.log(items)
  return (
    <div className='flex flex-row bg-gray-100 h-20 w-full justify-center items-center gap-2'>
         <h2 className='text-blue-400 text-lg font-medium '>Items - {items.length} Rs - {total}</h2>
    </div>
  )
}

export default Cart
