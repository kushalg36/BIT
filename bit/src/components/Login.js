import React,{Component} from 'react';

class login extends Component {
    
    handleChange = (e) => {
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    render(){
        return(
            <div className="container">
            <h1>Login</h1>
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