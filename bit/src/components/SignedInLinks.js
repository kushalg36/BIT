import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class SignedInLinks extends Component {

    state={
        username:''
    }

    render(){
        axios.post('http://localhost:4000/api/userDetails',{username: this.props.username})
    .then(res => {
        this.setState({username:res.data.name.slice(0,2)})
    });
    return (
        <div>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pendingissues">Pending Issues</Link></li>
                    <li><Link to="/addissue">Add new Issue</Link></li>
                    <li><Link to="/signup">Add new user</Link></li>
                    <li><Link to="/addintimation">Add new Intimation</Link></li>
                    <li><Link to="/intimations">Intimations</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <button className="btn btn-floating pink lighten-0 z-depth-0">{this.state.username}</button>
                </ul>                
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(SignedInLinks);