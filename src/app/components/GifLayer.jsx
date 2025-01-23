import React from 'react'
import Image from 'next/image'
import fartLove from "@/gifs/pedito.webp"
import idleLove from "@/gifs/idle.gif"

const GifLayer = ({children}) => {
  return (
    <div>
        <Image className='absolute top-20 left-20 rounded-full' src={fartLove} alt="Fart Love <3" width={200} />
        <Image className='absolute top-20 right-20' src={idleLove} alt="Tio Idle" width={200} />
        {children}
    </div>
  )
}

export default GifLayer