import React from 'react'
import { NavLink } from 'react-router-dom'
import myimagenav from './Image/myimgfornav.jpg'

function Navbar() {
  return (
    <div className='mainnavdiv'>
      <NavLink className='links' to='/'> Home </NavLink>
      <NavLink className='links' to='/About'> About</NavLink>
      <NavLink className='links' to='/Education'> Education</NavLink>
      <NavLink className='links' to='/Projects'> Projects</NavLink>
      <NavLink className='links' to='/Skills'> Skills</NavLink>
      <NavLink className='links' to='/Contact'> Contact </NavLink>
      <span>  <img className='mynav' src={myimagenav} /> </span>
    </div>
  )

}

export default Navbar