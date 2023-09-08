import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
  return (
  <>
  <div className={`${style.changeLabel} container p-5 `}>
    <div className="row p-5">
    <div className="col-md-12 text-center">
        <h2 className={`${style.CONATCT} fs-1 mt-4  fw-bolder`}>CONATCT SECTION</h2>
        </div>

    <div className="col-md-12 text-center">

        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${style.line} me-3`}></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div  className={`${style.line} ms-3`}></div>
        </div>

    </div>

        <div className="col-md-12 my-3">
            <label htmlFor="">userName :</label> 
            <input type="text"className='form-control mt-2' />
        </div>

        <div className="col-md-12 my-3">
            <label htmlFor="">userAge :</label>
            <input type="text"className='form-control mt-2'/>
        </div>
        <div className="col-md-12 my-3">
            <label htmlFor="">userEmail :</label>
            <input type="email"className='form-control mt-2' />
        </div>
        <div className="col-md-12 my-3">
            <label htmlFor="">userPassword :</label>
            <input type="password"className='form-control mt-2' />
        </div>
        <button type="button" className={`${style.buton} btn  w-25`}>Success</button>    
        </div>
  </div>
  
  </>
  )
}
