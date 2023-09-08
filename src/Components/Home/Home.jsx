import React from 'react'
import style from"./Home.module.css"
import logo from"../../smeal.svg"
export default function Home() {
  return (<>
    <div className={`${style.home}`}>
       <div className={`${style.center} mt-5 `}>
       <div className='logo'><img src={logo} alt=""className='w-75' /></div>
        <div>
            <h2 className='fs-1 mt-4  fw-bolder'>START FRAMEWORK</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${style.line} me-3`}></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div  className={`${style.line} ms-3`}></div>
        </div>
        <span className="">Graphic Artist - Web Designer - Illustrator</span>

       </div>
    </div>
    </>
  )
}
