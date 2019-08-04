import React,{Component} from 'react';
// import verify from '../../backend/api/verifyToken.js';

class AddIssues extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="center">Add New Issue</h2>
                <input id="subject" type="text" name="subject" />
                <label htmlFor="subject">Subject Line</label>

                <input id="user" type="text" name="email" />
                <label htmlFor="user">User's email ID</label>

                <input id="contact" type="text" name="phone number" />
                <label htmlFor="contact">Contact number</label>
                
                <textarea rows="5" id="logic" type="text" name="subject" />
                <label htmlFor="logic">Logic of the Issue</label>
            
            </div>
        )
    }
} 

export default AddIssues;