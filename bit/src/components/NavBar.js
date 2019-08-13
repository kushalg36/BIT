import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper light-blue">
            <div className="container">
            <a href="/" className="brand-logo left">Issue Tracker</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pendingissues">Pending Issues</Link></li>
                    <li><Link to="/addissue">Add new Issue</Link></li>
                    <li><Link to="/signup">Add new user</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <button className="btn btn-floating pink lighten-0 z-depth-0">NN</button>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;