"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const navStyle = `text-white m-[5px] text-[20px] bg-black border-2 border-gray-500
                  rounded-[30px] w-[88px] flex items-center justify-center transition-all
                  duration-500 ease-in-out hover:text-gray-500 `
const active = `bg-gray-700 text-white border-white`

function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <nav className='p-6 flex justify-end items-center'>
        <Link className={`${navStyle} ${pathname === "/" ? active : "" }`} href={"/"}>Home</Link>
        <Link className={`${navStyle} ${pathname === "/about" ? active : ""}`} href={"/about"}>About</Link>
        <Link className={`${navStyle} ${pathname === "/project" ? active : ""}`} href={"/project"}>Project</Link>
        <Link className={`${navStyle} ${pathname === "/skills" ? active : ""}`} href={"/skills"}>Skills</Link>
        <Link className={`${navStyle} ${pathname === "/contact" ? active : ""}`} href={"/contact"}>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar