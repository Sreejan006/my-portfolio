import EduData from '@/Data/EduData'
import React from 'react'
import EduCard from '@/components/EduCard'

const Education = () => {
  return (
    <div className='mt-[100px] flex flex-col items-center font-sans text-white'>
       <h1 className='lg:text-4xl text-2xl font-bold'>Education</h1>
       <div className='my-[20px] grid lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4'>
       {
        EduData.map((data,index)=>{
            return(
                <EduCard key={data.id} head={data.head} date={data.date} where={data.where} info = {data.info} marks = {data.marks} agg = {data.aggregate}/>
            )
        })
       }
       </div>
    </div>
  )
}

export default Education