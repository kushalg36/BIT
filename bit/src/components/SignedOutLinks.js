import React from 'react'
import {Link} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>                
            </div>
    )
}

export default SignedOutLinks;