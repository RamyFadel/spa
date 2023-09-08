import React from 'react'
import style from"./Navbar.module.css"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
     <nav className={`${style.nav} navbar navbar-expand-lg text-white fixed-top`}>
  <div className="container">
    <a className= {`${style.change} navbar-brand `} href="#Home">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
      <li className="nav-item me-3">
          <NavLink className={`${style.change2} nav-link `} aria-current="page" to="Home">Home</NavLink>
        </li>

        <li className="nav-item me-3">
          <NavLink className={`${style.change2} nav-link `} aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={`${style.change2} nav-link `} aria-current="page" to="Portofoli">Portfolio</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={`${style.change2} nav-link `} aria-current="page" to="Contact">Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
