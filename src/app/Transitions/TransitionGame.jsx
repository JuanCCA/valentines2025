import React from 'react'
import { COLORS } from '@/enums/colors'
import Image from 'next/image'
import Game from '../components/Game'

const TransitionGame = () => {
  return (
    <div style={{backgroundColor: COLORS.primary}} className=" grid gap-2 w-full h-full rounded-3xl text-sky-50 p-5 justify-items-center">
        <div className='text-6xl font-[family-name:var(--font-comic-neue)]'> El juego del AMOR </div>
        <div >
          <Game />
        </div>
    </div>
  )
}

export default TransitionGame