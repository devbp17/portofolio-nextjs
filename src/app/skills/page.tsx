import React from 'react'
import style from './skill.module.css'
import { FaFlutter } from "react-icons/fa6";
import { SiDart } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";

function Page() {
  return (
    <>
        <h2 className={style.judul2}>
            Program Language
        </h2>
        <div>
        <section id="Program">
        <div className={style.part2}>    
            <div className={style.cardpos}>
            <div className={style.card}>
                <h2>Flutter</h2>
                <FaFlutter className='text-blue-400 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressFlutter}></div>
                </div>
                    <p>70%</p>
                </div>
            <div className={style.card}>
                <h2>Dart</h2>
                <SiDart className='text-blue-400 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressDart}></div>
                </div>
                <p>90%</p>
                </div>
            <div className={style.card}>
                <h2>HTML5</h2>
                <FaHtml5  className='text-orange-600 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressHTML}></div>
                </div>
                <p>60%</p>
                </div>
            <div className={style.card}>
                <h2>CSS3</h2>
                <IoLogoCss3 className='text-blue-500 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressCSS}></div>
                </div>
                <p>55%</p>
                </div>
            </div>
            <div className={style.cardpos}>
                <div className={style.card}>
                <h2>JavaScript</h2>
                <SiJavascript className='text-yellow-400 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressJavaScript}></div>
                </div>
                <p>30%</p>
                </div>
            <div className={style.card}>
                <h2>React</h2>
                <FaReact className='text-blue-400 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressReact}></div>
                </div>
                <p>60%</p>
                </div>
            <div className={style.card}>
                <h2>Java</h2>
                <FaJava className='text-blue-400 text-7xl'/>
                <div className={style.progress}>
                    <div className={style.progressJava}></div>
                </div>
                <p>20%</p>
                </div>
            </div>
            
        </div>
        </section>
        </div>
        </>
  )
}

export default Page
