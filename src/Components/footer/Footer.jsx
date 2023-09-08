import React from 'react'
import style from "./Footer.module.css"

export default function Footer() {
  return (
   <>
   <div className={`${style.part1} p-5`} >
   <div className="container p-3">
    <div className="row">
        <div className="col-md-4  text-center">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <span>Clark, MO 65243</span>
        </div>
        <div className="col-md-4  text-center">
        <h3>AROUND THE WEB</h3>
        <div>

        <div className='d-flex align-items-center justify-content-center '>
        <div className={`${style.icon}`}><i className="fa-brands fa-facebook " /></div>
        <div className={`${style.icon}`}><i className="fa-brands fa-twitter" /></div>
        <div className={`${style.icon}`}><i className="fa-brands fa-linkedin-in" /></div>
        <div className={`${style.icon}`}><i className="fa-brands fa-chrome" /></div>
        </div>

        </div>
        </div>
        <div className="col-md-4  text-center">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
   </div>
   </div>

   <div className={`${style.part2} p-4 text-center`} >
   <div className="container">
    <div className="row">
      <div className="col-md-12">
      
    <span>Copyright © Your Website 2021</span>
 
      </div>
    </div>
   </div>
   </div>
   </>
  )
}
