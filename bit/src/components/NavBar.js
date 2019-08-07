import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue">
        <a href="/" className="brand-logo center">Issue Tracker</a>
            <div className="container">
                <ul className="left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pendingissues">Pending Issues</Link></li>
                    <li><Link to="/addissue">Add new Issue</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/signup">Add new user</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;