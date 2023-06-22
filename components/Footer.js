import React from 'react'
import insta from '../assets/instagram.png'
import linked from '../assets/linkedin.png'
import mail from '../assets/email.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='hidden lg:fixed lg:flex lg:flex-col lg:space-y-5 lg:p-5 lg:rounded-lg  lg:font-sans lg:text-white lg:text-[24px] lg:z-100 lg:bottom-3 lg:right-3 lg:bg-slate-800  lg:hover:bg-slate-300 opacity-30 hover:opacity-100'>
    <Link href={"https://www.linkedin.com/in/sreejan-p-s-58b78b248/"} target="_blank" rel="noopener noreferrer"><Image src={linked} width={30} alt='linked' /></Link>
    <Link href={"https://instagram.com/sreejan_sreeju?igshid=MzNlNGNkZWQ4Mg=="} target="_blank" rel="noopener noreferrer"><Image src={insta} width={30} alt='instagram'/></Link>
    <Link href={"mailto:sreejan006@gmail.com"} target="_blank" rel="noopener noreferrer"><Image src={mail} width={30} alt='gmail'/></Link>
    </div>
  )
}

export default Footer