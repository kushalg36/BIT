import React from 'react';
// import verify from '../../backend/api/verifyToken.js';

const logout = (props) => {
    setTimeout(() => {
        props.history.push('/');
    }, 2000);
    return(
        <div className="container">
            <h2 className="center">Logging you out...</h2>
            <h4 className="center">Killing tokens from server</h4>
            <p className="center">We will miss you..</p>
        </div>
    )
}

export default logout;