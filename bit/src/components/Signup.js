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

        this.setState({approver: this.props.username})
        console.log(this.state)
        const user = this.state;
        const token = this.props.authtoken;
        let config = {
            headers: {
                auth_token: token
            }
        }
        axios.post('http://localhost:4000/api/signup',user,config)
        .then(res => {
            console.log(res.data);
        })
    }
    render() {
        return(
            <div>
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="center">SignUp</h2>
                    {/* <input id="ID" type="text" name="approver" onChange={this.handleChange} />
                    <label htmlFor="ID">Approver's  ID</label> */}
                    
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

                    <input id="approver" type="text" name="approver" value={this.props.username} disabled onChange={this.specialCase} />
                    <label htmlFor="approver">Approver</label>

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
        authtoken: state.authtoken,
        username: state.username
    }
}

export default connect(mapStateToProps)(signup);