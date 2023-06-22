import Image from 'next/image'
import React from 'react'

const SkillCards = (props) => {
  return (
    <div className='font-sans w-[300px] bg-[#1C1E22] flex flex-col text-left text-white p-5'>
      <Image src={props.icon} alt='icons' className='w-[30px] mb-2'/>
      <h1 className='font-bold text-2xl mb-2' >{props.title}</h1>
      <p className='text-[12px]'>{props.description}</p>

    </div>
  )
}

export default SkillCards
