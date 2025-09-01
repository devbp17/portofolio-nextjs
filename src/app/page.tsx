"use client";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import style from "./component/Home.module.css"

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center width-full h-[500px]">
    <div className={style.img}>
      <Image
      src="/Angga.jpg"
      alt="foto profil"
      fill
      className="object-cover pr-1"
      />
    </div>
    <div className="p-5 w-[700px] justify-center items-center flex flex-col ml-10">
    <p className="text-white font-bold text-5xl mb-3">Hello my name is</p>
    <p className="text-[#c5c5c5] font-bold text-4xl mb-2">MAHANGGA WAHYU WISESA</p>
    <TypeAnimation
      sequence={[
        'Im a Web Developer',
        1000,
        'Im a Mobile Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold',color: "red"}}
      repeat={Infinity}
    />
    </div>
    </div>
    </>
  );
}
