"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const navStyle = `text-white m-[5px] text-[20px] bg-black border-2 border-gray-500
                  rounded-[30px] w-[88px] flex items-center justify-center transition-all
                  duration-500 ease-in-out hover:text-gray-500 `


function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <nav className='p-6 flex justify-end items-center'>
        <Link className={`${navStyle} ${pathname === "/" }`} href={"/"}>Home</Link>
        <Link className={`${navStyle} ${pathname === "/about"}`} href={"/about"}>About</Link>
        <Link className={`${navStyle} ${pathname === "/project"}`} href={"/project"}>Project</Link>
        <Link className={`${navStyle} ${pathname === "/skills"}`} href={"/skills"}>Skills</Link>
        <Link className={`${navStyle} ${pathname === "/skills"}`} href={"/contact"}>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar