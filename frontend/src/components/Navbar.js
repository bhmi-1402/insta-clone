import React from 'react'
import logo from '../img/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} />
        <ul className='nav-menu'>
            <a href="/signup"><li>SignUp</li></a>
            <a href="/signin"><li>SignIn</li></a>
            <a href="/profile"><li>Profile</li></a>
        </ul>
    </div>
    
  )
}

export default Navbar