import React from 'react'
import img1 from "../../image/poert1.png"
import img2 from "../../image/port2.png"
import img3 from "../../image/port3.png"
import style from "./Portofoli.module.css"
export default function Portofoli() {
  return (
   <>
   <div className={`${style.COMPONENT} container p-5`}>
    <div className="row pt-5">
        <div className="col-md-12 text-center ">
            <h2 className='fs-1 fw-bolder mt-4'>PORTFOLIO COMPONENT</h2>
        </div>
        <div className="col-md-12">
        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${style.line} me-3`}></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div  className={`${style.line} ms-3`}></div>
        </div>
        </div> 

        <div className="col-md-4 my-3">
            <img src={img1} className='w-100 rounded-2'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img2} className='w-100 rounded-2'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img3} className='w-100 rounded-2'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img1} className='w-100 rounded-2'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img2} className='w-100 rounded-2'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img3} className='w-100 rounded-2'  alt="" />
        </div>


    </div>
   </div>
   </>
  )
}
