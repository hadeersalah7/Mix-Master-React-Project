import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav-center'>
            <span className='logo'>Mix Master</span>
            <div className="nav-links">
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/newsletter">
                    Newsletter
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar