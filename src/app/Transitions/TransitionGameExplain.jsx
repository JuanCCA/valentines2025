import React from 'react'
import { COLORS } from '@/enums/colors'
import Image from 'next/image'
import sendKiss from "@/gifs/send-kiss.gif"

const TransitionGameExplain = () => {
  return (
        <div style={{backgroundColor: COLORS.primary}} className=" grid w-full h-full rounded-3xl text-sky-50 p-5 justify-items-center">
            <div className='text-6xl font-[family-name:var(--font-comic-neue)]'> El juego del AMOR </div>
            <div className='text-xl font-[family-name:var(--font-montserrat)]'>
                Basicamente es un juego de encontrar parejas jiji.
                <br/>
                    <p>{"->"} No hay tiempo límite, pero cuando menos tiempo tardes mas puntos ganaras.</p>
                    <p>{"->"} Cada vez que falles, te restara puntos</p>
                    <p>{"->"} Cada vez que aciertes, te sumara puntos</p>
                    <p>{"->"} El tiempo empezara a contar una vez le des al boton de start {"("} En la siguiente pantalla {")"}</p>
            </div>
            <div>Venga va mucho animo y al toro</div>
            <div>
                <Image className='rounded-full' src={sendKiss} alt="Tio Idle" width={200} />
            </div>
        </div>
  )
}

export default TransitionGameExplain