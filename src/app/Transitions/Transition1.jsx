import React from 'react'
import { COLORS } from '@/enums/colors'

const Transition1 = () => {
  return (
    <div style={{backgroundColor: COLORS.primary}} className=" grid w-full h-full rounded-3xl text-sky-50 p-5 justify-items-center">
        <div className='text-6xl font-[family-name:var(--font-comic-neue)]'> Bienvenida a una invitacion formal y seria</div>
        <div className='text-xl font-[family-name:var(--font-lobster)]'>Este 14 de febrero quisiera, si no es mucho pedir, pedirle a la mujer mas linda y talentosa que conozco que reserve una noche para pasarla conmigo</div>
    </div>
  )
}

export default Transition1