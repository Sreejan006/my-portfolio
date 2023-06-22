import Image from 'next/image';
import dp from '../assets/Sreejan.png';
import down from '../assets/download.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex ss:overflow-x-hidden  min-h-screen items-center justify-center text-white font-sans bg-[#171718]">
      <section className="flex lg:flex-row flex-col lg:space-x-10">
        <div className="flex items-center justify-center">
          <Image className="lg:w-[300px] md:w-[250px] w-[200px] ls:w-[250px] ns:w-[150px]" src={dp} alt="PS SREEJAN" />
        </div>
        <div className="flex flex-col justify-center text-center">
          <div className="text-center lg:text-6xl md:text-4xl sm:text-2xl ms:text-xl lg:mr-0  ls:text-2xl font-bold">
            I am <span className="text-[#5C62EC]">PS Sreejan.</span>
            <br />
            <span className="lg:text-[40px] md:text-3xl sm:text-xl ss:text-l">Aspiring Charted Accountant</span>
            <br />
            <span className="sm:text-[20px] font-medium ss:text-[15px]">This is my web Portfolio!</span>
          </div>
          <div className="flex items-center justify-center mt-10 lg:mr-0 space-x-10">
            <Link href={"/cv.pdf"} target='_blank' rel='noopener noreferrer' download={"PS Sreejan Resume"} className="flex px-6 py-2 rounded-[6px] bg-[#5C62EC] hover:bg-[#7c80f0] w-[200px] items-center justify-center transition-transform duration-300 transform-gpu hover:scale-105" >
              <Image alt="download" className="w-[15px] h-auto mr-3" src={down} />
              Download CV
            </Link>
            <a href='/Achievements' className="nt:hidden px-6 py-2 rounded-[6px] bg-none border border-slate-300 hover:border-slate-50 w-[200px]">
              Achievements
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
