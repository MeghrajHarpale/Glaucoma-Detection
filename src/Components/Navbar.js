import React from 'react'

import Services from './Services';
import About from './About';
import Review from './Review';
import Blogs from './Blogs';
// import '../script.js';
import { FaEye } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

const handleClick = () =>{
  let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.scroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
}


  return (
    <div>
      <header className="header">

        <a href="/" className='logo'><i><FaEye /></i> GlaucoDetect</a>
        <nav className='navbar'>
          <a href="/">Home</a>
          <a href={<About/>}>About</a>
          <a href={<Services/>}>Services</a>
          <a href={<Review/>}>Reviews</a>
          <a href={<Blogs/>}>Blogs</a>
          <a href="/">Treatments</a>
          <a href="/">Hospitals</a>

        </nav>


        <div id="menu-btn" className='fas fa-bars' onClick={handleClick}><GiHamburgerMenu /></div>
      </header>
    </div>
  )
}

export default Navbar
