import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {

  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  const handleFalseNavbar = () => {
    setNavbar(false)
  }

  return (
    <header className='header'>
      <h1><Link className='header__home' to='/' onClick={handleFalseNavbar} >e-commerce</Link></h1>
      <nav className={`navbar__container ${navbar ? 'open' : ''}`}>
        <ul className= 'navbar'>
          <li className='navbar__list'>
            <Link className='navbar__login' to='/login' onClick={handleFalseNavbar} >
              <i className='bx bx-lock-open-alt' ></i>Login</Link>
          </li>
          <li className='navbar__list'>
            <Link className='navbar__register' to='/register' onClick={handleFalseNavbar} >
              <i className='bx bxs-edit' ></i>Register</Link>
          </li>
          <li className='navbar__list'>
            <Link className='navbar__purchases' to='/purchases' onClick={handleFalseNavbar} >
              <i className='bx bx-shopping-bag' ></i>Purchases</Link>
          </li>
          <li className='navbar__list'>
            <Link className='navbar__cart' to='/cart' onClick={handleFalseNavbar} >
              <i className='bx bx-cart' ></i>Cart</Link>
          </li>
        </ul>
      </nav>
      <i onClick={handleNavbar} className='bx bxs-dashboard'></i>
    </header>
  )
}

export default Header