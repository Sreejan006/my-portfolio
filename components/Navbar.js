"use client"
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';
import Image from "next/image";

export default function Navbar() {
  const [scrollBg, setScrollBg] = useState(false);
  const [open, setOpen] = useState(false);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !document.querySelector('.navbar-button').contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex flex-row justify-between font-sans top-0 w-screen h-[65px] fixed z-50 shadow-lg text-white bg-black`}>
      <div className="items-center flex p-5 ml-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
                    duration-300 ">
        <a className="hidden lg:block lg:font-bold lg:text-[24px]" href="/">
            PS SREEJAN 
        </a>
        <a className="lg:hidden font-bold text-[24px]" href="/">
            PSS 
        </a>
      </div>
      <button onClick={toggleSidebar} className="lg:hidden bg-none p-4 border-none fixed z-50 right-5 navbar-button">
        <Image alt="menu" className="w-auto h-[25px]" src={open ? close : hamburger} />
      </button>

      <div className="hidden lg:flex lg:flex-row lg:items-center lg:text-[20px] lg:justify-between lg:text-white lg:font-sans lg:font-bold lg:mr-[20px]">
        <div>
          <a className={`mx-3 ${usePathname() === "/Aboutme" ? "border-b-2 border-b-[#5C62EC]" : ""} hover:text-[#5C62EC]`} href="/Aboutme">About Me</a>
        </div>
        <div>
          <a className={`mx-3 ${usePathname() === "/Achievements" ? "border-b-2 border-b-[#5C62EC]" : ""} hover:text-[#5C62EC]`} href="/Achievements">Achievements</a>
        </div>
        <div>
          <a className={`mx-3 ${usePathname() === "/Education" ? "border-b-2 border-b-[#5C62EC]" : ""} hover:text-[#5C62EC]`} href="/Education">Education</a>
        </div>
      </div>

      <div ref={sidebarRef} className={`lg:hidden h-screen ${(open) ? "w-48" : "w-0"} duration-500 z-40 fixed right-0 bg-black`}>
        <div className="flex flex-col mt-20 text-center text-[15px] text-white font-sans lg:font-bolder">
          <div className="py-[20px]">
            <a className={`${usePathname() === "/Aboutme" ? "border-b-2 border-b-[#5C62EC]" : "hover:border-b-2 hover:border-b-back"} hover:text-[#5C62EC]`} href="/Aboutme">About Me</a>
          </div>
          <div className="py-[20px]">
            <a className={`${usePathname() === "/Achievements" ? "border-b-2 border-b-[#5C62EC]" : "hover:border-b-2 hover:border-b-back"} hover:text-[#5C62EC]`} href="/Achievements">Achievements</a>
          </div>
          <div className="py-[20px]">
            <a className={`${usePathname() === "/Education" ? "border-b-2 border-b-[#5C62EC]" : "hover:border-b-2 hover:border-b-back"} hover:text-[#5C62EC]`} href="/Education">Education</a>
          </div>
        </div>
      </div>
    </div>
  );
}

