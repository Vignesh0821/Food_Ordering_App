import React from 'react'
import logo from "../img/logo1.jpeg"
import { Link } from 'react-router-dom'
// import fonta



const Header = () => {
  return (
    <div className='navbar'>
        <div className='head'>
            <img className='logo' src={logo}></img>
            <div className='title'>Tomato</div>
        </div>
        <div className='navlink'>
            <Link className='link' to="/" >Home</Link>
            <Link className='link' to="/about" >About</Link>
            <Link className='link' to="/contact" >Contact</Link>
            <Link className='link' to="/signin">Signin</Link>
        </div>
    </div>
  )
}

export default Header