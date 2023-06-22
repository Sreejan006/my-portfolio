import Image from 'next/image'
import React from 'react'
import dp from '../../assets/Sreejan.jpg'
import SkillCards from '@/components/SkillCards'
import SkillData from '../../Data/skill.js'
import com from '@/assets/communication.png'

const Aboutme = () => {
  return (
    <div className='  font-sans text-white md:mt-0 mt-[100px] sm:mt-0 lg:mt-0'>
      <section className='flex min-h-screen items-center justify-center '>
        <div className='flex lg:flex-row flex-col  lg:space-x-10 items-center justify-center border-white-4 border p-5'>
        <div>
          <Image alt='PS SREEJAN' src={dp} className='lg:w-[300px] ss:w-[250px] ms:w-[250px] sm:w-[250px] ls:w-[250px]'/>
        </div>
        <div className=' text-left sm:text-center lg:w-[500px] ss:w-[200px] sm:w-[500px] ss:p-0 '>
        <h1 className='font-bold text-[32px] mb-4 '>PS Sreejan</h1>
        <p className='ss:text-[11px]'>

I am a determined Chartered Accountant aspirant residing in Kuppam, Andhra Pradesh, India. I am actively searching for opportunities with a prestigious firm where I can contribute my skills and make a significant impact.
Driven by a strong desire to excel in the corporate world, I am eager to work in reputable companies that value excellence. With an unwavering commitment to my field, I constantly seek opportunities to showcase my abilities and deliver exceptional results. Through meticulous attention to detail, accurate financial analysis, and innovative problem-solving, I aim to drive growth and profitability.
I am excited to connect with prospective recruiters who recognize the value of a dedicated and ambitious Chartered Accountant aspirant. If you are seeking a passionate individual to join your team, let&apos;s initiate a conversation. Together, we can achieve outstanding success and contribute to the growth and prosperity of your organization.</p>
        </div>
        </div>
      </section>
      <section className='flex flex-col  items-center justify-center ' >
        <h1 className='text-4xl font-bold my-10'>My Abilities</h1>
        <div className='grid lg:grid-cols-3 gap-4 mb-10 md:grid-cols-2 grid-cols-1'>
        {SkillData.map((value,index) => {
        return (
           <SkillCards
             key={value.id}
            icon={com}
            title={value.skill}
            description={value.description}
          />
        );
        })}
        </div>
      </section>
    </div>
  )
}

export default Aboutme
