import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue">
            <div className="container">
                <a className="brand-logo center">Issue Tracker</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;