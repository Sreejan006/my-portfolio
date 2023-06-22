import React from 'react'
import Image from 'next/image'

const AchievementCard = (props) => {
  return (
    <div className='bg-[#1C1E22] p-5 flex flex-col border items-center border-5 border-slate-300 lg:w-[45vw] w-[90vw]'>
        <Image src = {props.proof} alt='certificates'  className='w-[400px] h-[300px]' />
        <div className='md:p-5 p-2 text-left'>
        <h1 className='text-slate-200 font-bold lg:text-xl text-l'>{props.head}</h1>
        <p class className= "nt:text-sm text-slate-300">{props.info}</p> 
        </div>
    </div>
  )
}

export default AchievementCard