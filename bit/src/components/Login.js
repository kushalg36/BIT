import React,{Component} from 'react';
import axios from 'axios';

class login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;
        const user = {username,password};
        console.log(user);
        // handle api requests
        axios.post('http://localhost:4000/api/login',user)
        .then(res => {
            console.log(res.data);
        })
    }
    render(){
        return(
            <div className="container">
            <h2 className="center">Login</h2>
                <form  onSubmit={this.handleSubmit}>
                    <label>Employee ID</label><br/>
                    <input type="text" id="username" autoFocus onChange={this.handleChange} /><br/><br/>
                    <label>Password</label><br/>
                    <input type="password" id="password" onChange={this.handleChange} /><br/><br/>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default login;