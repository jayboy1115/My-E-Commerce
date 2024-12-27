import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProceedToCheckOut = () => {

    const {navigate} = useContext(ShopContext)


  return (
    <div className='w-full text-end'>
        <button onClick={()=> navigate("/placeorder")} className='bg-black text-white text-sm my-8 px-8 py-3 rounded-xl'>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default ProceedToCheckOut
