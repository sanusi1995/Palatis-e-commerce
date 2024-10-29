import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <section id='Navbar-container'>
       
          
            <Link activeClass='active' to='Product-container' spy={true} smooth={true} offset={-100} duration={500} className='navList'>All Products</Link>
            <Link activeClass='active' to='Allproduct' spy={true} smooth={true} offset={-100} duration={500} className='navList' >Laptops</Link>
            <Link activeClass='active' to='Allproduct' spy={true} smooth={true} offset={-100} duration={500} className='navList' >Clothes</Link>
            <Link activeClass='active' to='Allproduct' spy={true} smooth={true} offset={-100} duration={500} className='navList' >Accessories Solar</Link>
            <Link activeClass='active' to='Allproduct' spy={true} smooth={true} offset={-100} duration={500} className='navList' >Phones & Tablets</Link>
        
    </section>
  )
}

export default Navbar