import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            authtoken:'',
            error:''
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
        // handle api requests
        axios.post('http://localhost:4000/api/login',user)
        .then(res => {
            if(res.data.message === "Authentication Successful"){
                this.setState({authtoken:res.data.token});
                this.props.authtoken(res.data.token);
                this.props.username(username);
                this.props.history.push('/pendingissues');
            }
            else {
                this.setState({error:res.data})
            }
        })
    }
    render(){
        const errorStyle = {
            color:'red',
            fontWeight: 'bold',
            fontSize: 'large'
        }
        return(
            <div>
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
                    <br/>
                    <div style={errorStyle}>
                        {this.state.error}
                    </div>
                </form>
            </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        authtoken: (token) => { dispatch({type: 'authtoken', authtoken:token}) },
        username: (id) => { dispatch({type: 'username',username:id })}
    }
}

export default connect(null,mapDispatchToProps)(login);