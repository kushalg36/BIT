import React from 'react';
import {connect} from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
    console.log(props.authtoken)
    const links = props.authtoken ?<SignedInLinks/>:<SignedOutLinks/>
    return (
        <nav className="nav-wrapper light-blue">
            <div className="container">
            <a href="/" className="brand-logo left">Issue Tracker</a>
                {/* <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pendingissues">Pending Issues</Link></li>
                    <li><Link to="/addissue">Add new Issue</Link></li>
                    <li><Link to="/signup">Add new user</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <button className="btn btn-floating pink lighten-0 z-depth-0">NN</button>
                </ul> */}
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        authtoken: state.authtoken
    }
}

export default connect(mapStateToProps)(Navbar);