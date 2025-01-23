import React from 'react'
import { COLORS } from '@/enums/colors'
import Image from 'next/image'
import burningRose from "@/gifs/burningRose.webp"

const Transition2 = () => {
  return (
    <div style={{backgroundColor: COLORS.primary}} className=" grid w-full h-full rounded-3xl text-sky-50 p-5 justify-items-center">
        <div className='text-6xl font-[family-name:var(--font-comic-neue)]'> Bienvenida a una invitacion formal y seria </div>
        <div className='text-xl font-[family-name:var(--font-lobster)]'>
            Imagina un ambiente íntimo, donde el tiempo se detiene y la complicidad de nuestra compañía sea el centro de todo.
            <br/>
            Permíteme ofrecerte una noche llena de detalles y encanto, donde cada momento esté pensado para celebrar la belleza de tu presencia y la magia de este día.
        </div>
        <div>
            <Image className='rounded-full' src={burningRose} alt="Tio Idle" width={200} />
        </div>
    </div>
  )
}

export default Transition2