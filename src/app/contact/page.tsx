"use client"
import React, {useState} from 'react'
import style from './inputContact.module.css'

function Page() {
   const [nama, setnama] = useState("");
   const [email, setemail] = useState("");
   const [pesan, setpesan] = useState("");
   
    const handleSubmit = () => {
        console.log(`Nama pengirim = ${nama}\n Nama Email pengirim = ${email}\n Pesan yang dikirm = ${pesan}`)
    }
        

  return (
    <>
    <div className='p-[100px] flex justify-center items-center'>
      <div className='w-[800px] h-[500px] border-2 rounded-4xl shadow-2xl shadow-gray-300 flex-col flex justify-center items-center text-left'>
        <label className={style.label} htmlFor="Nama Pengirim">Nama Pengirim</label>
        <input id='Nama' value={nama} onChange={(e) => setnama(e.target.value)} className={style.input} type="text" placeholder='Masukkan nama kamu' />
        <label className={style.label} htmlFor="Nama email">Nama Email</label>
        <input id='email' value={email} onChange={(e) => setemail(e.target.value)}className={style.input} type="email" placeholder='Masukkan Email kamu' />
        <label className={style.label} htmlFor="pesan">Pesan yang akan dikirim</label>
        <input id='pesan' value={pesan} onChange={(e) => setpesan(e.target.value)} className={style.input} type="text" placeholder='Masukkan pesan kamu' />
        <div className={style.jarak}>
        <button onClick={handleSubmit} className={style.button}>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page
