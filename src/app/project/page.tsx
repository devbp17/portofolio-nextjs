"use client";
import React from 'react'
import Image from "next/image";

function page() {

    const box = `m-10 flex flex-col justify-start items-center w-[250px] h-[350px] border-[1.5px] border-gray-300 rounded-2xl cursor-grab bg-black transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(147,147,147,0.4)]`
    const img = `border-1 overflow-hidden rounded-2xl w-[250px] h-[130px]`

    const project = [
        {id: 1, alt: "Telkomsel",  nama: "Telkomsel", imgPath: "/Telkomsel.jpg", deskripsi: "ini adalah project yang saya buat untuk meningkatkan pemahaman saya tentang flutter, sekaligus tugas UUK saya "},
        {id: 2, alt: "fitness", nama: "Fitness", imgPath: "/navigator.jpg", deskripsi: "ini adalah project yang saya buat untuk memahami bagaimana cara menggunakan navigator, package, entity di flutter"},
        {id: 3, alt: "kalkulator", nama: "Kalkulator Sederhana", imgPath: "/calculator.jpg", deskripsi: "ini adalah projek kalkualtor sederhana saya yang dimana jika 2 angka dimasukkan lalu memilih operatornya dan click submit maka hasilnya akan muncul"},
    ];

  return (
    <><h2 className='text-center text-5xl font-bold pt-16'>My Project</h2>
    <div className='p-2 min-h-screen flex justify-center items-center'>
    {project.map((project) =>(
        <div key={project.id} className= {box}>
            <div className={img}>
            <Image
            className='object-cover'
            src={`${project.imgPath}`}
            alt={`${project.alt}`}
            width={500}
            height={300}
            />
            </div>
            <h2 className='mt-5 font-bold text-2xl'>{project.nama}</h2>
            <h2 className='mt-5 text-center'>{project.deskripsi}</h2>
        </div>
    ))}
    </div>
    </>
  )
}

export default page
