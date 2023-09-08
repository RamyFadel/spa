import React from 'react'
import style from"./About.module.css"
export default function About() {
  return (
    <>
    {/* <div className={`${style.about} `}>
    <div className={`container `}>
        <div className="row ">
         
        
           

          
        </div>
    </div>
    </div> */}

    <div className={`${style.about} d-flex align-items-center justify-content-center p-5 `}>
      <div>
      <div className={`container `}>
        <div className="row ">
      <div className="col-md-12 text-center"><h2 className='fs-1 mt-4  fw-bolder'>ABOUT COMPONENT</h2></div>
      
            <div className="col-md-12 text-center">

            <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${style.line} me-3`}></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div  className={`${style.line} ms-3`}></div>
        </div>
            </div>
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            </div>
    </div>
      </div>
    </div>
    </>
  )
}
