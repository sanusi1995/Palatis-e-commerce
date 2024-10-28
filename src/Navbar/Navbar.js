import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <section id='Navbar-container'>
        <div className=''>
            <ul>
            <li><a href="#home">All Products</a></li>
            <li><a href="#news">Laptops</a></li>
            <li><a href="#contact">Clothes</a></li>
            <li><a href="#about">Accessories Solar</a></li>
            <li><a href="#about">Phones & Tablets</a></li>
           </ul>
        </div>

    </section>
  )
}

export default Navbar