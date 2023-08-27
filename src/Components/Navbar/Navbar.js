import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import './Navbar.css'

const Navbar = () => {

  const [movileUiLink, setMobileUiLink] = useState(false)

  return (
    <>
      <div className='navbar-maincontainer'>
        <div className='logo'>
          <p>Nup<span className='span-tag'>ur Patel</span></p>
        </div>
        <div className={movileUiLink ? 'mobile-nav-link' : 'navbar'} onClick={() => setMobileUiLink(movileUiLink)}>
          <NavLink exact activeClassName='activeLink' className='navbar-links' to='/'>Home</NavLink>
          <NavLink exact activeClassName='activeLink' className='navbar-links' to='/about'>About</NavLink>
          <NavLink exact activeClassName='activeLink' className='navbar-links' to='/work'>Portfolio</NavLink>
          <NavLink exact activeClassName='activeLink' className='navbar-links' to='/contact'>Contact</NavLink>
        </div>
        <button className='menu-icon' onClick={() => setMobileUiLink(!movileUiLink)} >
          {movileUiLink ? <ClearIcon /> : <MenuIcon />}
        </button>
      </div>
    </>
  )
}

export default Navbar