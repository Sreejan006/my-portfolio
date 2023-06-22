import React from 'react'

const EduCard = (props) => {
  return (
    <div className='bg-[#1C1E22] lg:w-[500px] xl:w-[600px] 2xl:w-[500px] w-[90vw] md:w-[380px] '>
        <div className='bg-black flex flex-row justify-between p-2'>
            <div className='flex flex-col p-2'>
            <h1 className='font-bold text-xl ss:text-lg text-[#5C62EC]'>{props.head}</h1>
            <h1 className='font-semibold text-lg ss:text-sm text-slate-300 w-full'>{props.where}</h1>
            </div>
            <div className='bg-[#1C1E22] text-sm text-center w-[100px] h-[20px] font-mono  ss:text-[11px]  ss:m-0 ss:p-0'>
            <p>{props.date}</p>
            </div>
            

        </div>
        <div className='p-2 text-left'>
            <p className='text-sm text-slate-400'>{props.info}</p>
        </div>
        <div className='bg-black flex flex-row justify-between p-2'>
            <p className='text-slate-100 text-xs font-bold'> Marks: <span className='text-[#5C62EC]'>{props.marks}</span></p>
            <p className='text-slate-100 text-xs font-bold'> Aggre. of Marks: <span className='text-[#5C62EC]'>{props.agg}</span></p>

        </div>

    </div>
  )
}

export default EduCard