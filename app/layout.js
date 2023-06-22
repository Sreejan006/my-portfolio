import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'


export const metadata = {
  title: 'Sreejan PS',
  description: "I am a determined Chartered Accountant aspirant residing in Kuppam, Andhra Pradesh, India. Iam actively searching for opportunities with a prestigious firm where I can contribute my skills and make a significant impact. Driven by a strong desire to excel in the corporate world, I am eager to work in reputable companies that value excellence. With an unwavering commitment to my field, I constantly seek opportunities to showcase my abilities and deliver exceptional results. Through meticulous attention to detail, accurate financial analysis, and innovative problem-solving, I aim to drive growth and profitability. I am excited to connect with prospective recruiters who recognize the value of a dedicated and ambitious Chartered Accountant aspirant. If you are seeking a passionate individual to join your team, let's initiate a conversation. Together, we can achieve outstanding success and contribute to the growth and prosperity of your organization."
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <Head>
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="36x36" />
      </Head>
      
      
      <body className=' bg-[#171718]'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
