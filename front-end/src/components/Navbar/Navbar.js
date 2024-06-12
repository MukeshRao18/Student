import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to='/'className="link">Home</NavLink>                                   
      <NavLink to='/Workshops' className="link">Workshops</NavLink>              
      <NavLink to='/Admin' className="link">Admin</NavLink>                    
    </nav>                 
  );
}

export default Navbar
