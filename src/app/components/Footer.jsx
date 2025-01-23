import React from 'react'
import { COLORS } from '@/enums/colors'

const Footer = ({setOrder, order}) => {
  const handleClick = (newOrder) => {
    setOrder(newOrder)
  }
  return (
    <div className="flex gap-2 mt-5 text-4xl">

    <button 
        type="button" 
        style={{color: COLORS.text, display: order === 0 ? "none": ""}} 
        className="rounded-lg py-1 px-2 font-semibold bg-red-600" 
        onClick={() => handleClick(order - 1)}
    > 
        Atras 
    </button>

    <button 
        type="button" 
        style={{color: COLORS.text}} 
        className="rounded-lg py-1 px-2 font-semibold bg-pink-600" 
        onClick={() => handleClick(order + 1)}
    > 
        Avanzar 
    </button>
  </div>
  )
}

export default Footer