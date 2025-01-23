import React from 'react'
import { COLORS } from '@/enums/colors'
import Image from 'next/image'
import surprise from "@/gifs/surprise.gif"

const Transition3 = () => {
  return (
     <div style={{backgroundColor: COLORS.primary}} className=" grid w-full h-full rounded-3xl text-sky-50 p-5 justify-items-center">
            <div className='text-6xl font-[family-name:var(--font-comic-neue)]'> Pero no te saldra gratis!!!</div>
            <div className='text-xl font-[family-name:var(--font-roboto)]'>
                Para darle un poco de emocion, he hecho un pequeño juego y segun la puntuacion que obtengas... 😈
            </div>
            <div>
                <Image className='rounded-xl' src={surprise} alt="Tio Idle" width={200} />
            </div>
        </div>
  )
}

export default Transition3