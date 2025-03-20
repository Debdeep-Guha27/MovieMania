import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to='/'>Movie App</Link>
        </div>
        <div className='navbar-links'>
            <Link to='/' className='navbar-Home'>Home</Link>
            <Link to='/favourite' className='navbar-Fav'>Favourite</Link>
        </div>
    </nav>
  )
}

export default Navbar
