import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class signup extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            name:'',
            team:'',
            desk_no:'',
            ext_no:'',
            approver:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const user = this.state;
        const token = this.props.authtoken;
        axios.post('http://localhost:4000/api/signup',user)
        .then(res => {
            console.log(res.data);
        })
    }
    render() {
        return(
            <div>
            <div className="container">
                <h2 className="center">SignUp</h2>
                <form onSubmit={this.handleSubmit}>
                    <input id="ID" type="text" name="approver" onChange={this.handleChange} />
                    <label htmlFor="ID">Approver's  ID</label>
                    
                    <input id="employee id" type="text" name="username" onChange={this.handleChange} />
                    <label htmlFor="employee id">New Employee ID</label>
                    
                    <input id="password" type="password" name="password" onChange={this.handleChange} />    
                    <label htmlFor="password">Password</label>

                    <input id="name" type="text" name="name" onChange={this.handleChange} />    
                    <label htmlFor="name">Name</label>

                    <input id="team" type="text" name="team" onChange={this.handleChange} />    
                    <label htmlFor="team">Team Name</label>

                    <input id="desk" type="text" name="desk_no" onChange={this.handleChange} />    
                    <label htmlFor="desk">Desk Number</label>

                    <input id="ext" type="text" name="ext_no" onChange={this.handleChange} />    
                    <label htmlFor="ext">Extension Number</label>

                    <br/><br/><br/>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right"></i>
                    </button>
                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authtoken: state.authtoken
    }
}

export default connect(mapStateToProps)(signup);