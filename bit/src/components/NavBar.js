import React from 'react';
import {connect} from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
    const links = props.authtoken ?<SignedInLinks/>:<SignedOutLinks/>
    return (
        <nav className="nav-wrapper light-blue">
            <div className="nav">
            <a href="/" className="brand-logo left">Issue Tracker</a>
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