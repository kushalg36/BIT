import React,{Component} from 'react';

class signup extends Component {
    render() {
        return(
            <div className="container">
                <h2 className="center">SignUp</h2>
                <input id="ID" type="text" name="approver's id" />
                <label htmlFor="ID">Approver's  ID</label>
        
                <input id="PASSWORD" type="password" name="approver's password" />
                <label htmlFor="PASSWORD">Approver's  Password</label>
                
                <input id="employee id" type="text" name="employee id" />
                <label htmlFor="employee id">New Employee ID</label>
                
                <input id="password" type="password" name="Password" />    
                <label htmlFor="password">Password</label>
                <br/><br/><br/>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right"></i>
                </button>
            </div>
        )
    }
}

export default signup;