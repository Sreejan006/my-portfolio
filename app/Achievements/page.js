import AchievementCard from '@/components/AchievementCard'
import React from 'react'
import AchievementsData from '@/Data/AchievementsData'

function Achievements() {
  return (
    <main className='mt-[100px] font-sans text-white flex flex-col items-center '>
      <h1 className='lg:text-4xl text-2xl font-bold'>Achievements</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 my-[20px]' >
        {
          AchievementsData.map((data,index)=>{
            return(
              <AchievementCard key={data.id} head = {data.head} proof = {data.proof} info = {data.info}/>
            )
          })
        }

      </div>
    </main>
  )
}

export default Achievements