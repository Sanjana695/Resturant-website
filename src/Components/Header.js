import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/header.css';

function Header() {
  return (
     <header>
      <ul className='links'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </header>
  )
}

export default Header