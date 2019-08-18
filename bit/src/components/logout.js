import React from 'react';
// import verify from '../../backend/api/verifyToken.js';
import {connect} from 'react-redux';

const logout = (props) => {
    setTimeout(() => {
        props.history.push('/');
    }, 500);
    
    props.authtoken('');

    return(
        <div className="container">
            <h2 className="center">Logging you out...</h2>
            <h4 className="center">Killing tokens from server</h4>
            <p className="center">We will miss you..</p>
        </div>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {
        authtoken: (token) => {dispatch({type:'authtoken',authtoken:token})}
    }
}

export default connect(null,mapDisptachToProps)(logout);