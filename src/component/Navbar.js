import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Navbar.css'

import logo from '../component/enigmadev.png';


const Navbar = () => {
  return (
    <div className='navbar'>
    
    
    <div className='logo'>
    <img src={logo} alt='EnigmaDev Logo' />


    </div>

    <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/education'>Education</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/project'>Certificate</Link>
        
        
    </div>

    </div>
  )
}

export default Navbar
