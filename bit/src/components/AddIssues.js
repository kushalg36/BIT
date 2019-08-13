import React,{Component} from 'react';
import axios from 'axios';

class AddIssues extends Component {

    constructor(props) {
        super(props);
            this.state={
                subject:'',
                email:'',
                number:'',
                logic:'',
                approver:'',
                team:'',
                status:'open'
            }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const issue = this.state;
        console.log(issue);
        axios.post('http://localhost:4000/api/issue',issue)
        .then(res => {
            console.log(res.data);
        });
    }

    render() {
        return (
            <div>
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h2 className="center">Add New Issue</h2>
                    <input id="subject" type="text" name="subject" onChange={this.handleChange}/>
                    <label htmlFor="subject">Subject Line</label>

                    <input id="email" type="text" name="email" onChange={this.handleChange}/>
                    <label htmlFor="email">User's email ID</label>

                    <input id="number" type="text" name="number" onChange={this.handleChange}/>
                    <label htmlFor="number">Contact number</label>
                    
                    {/* <textarea name="logic" id="logic" cols="30" rows="10" className="materialize-textarea"></textarea> */}
                    <textarea rows="5" id="logic" type="text" name="subject" onChange={this.handleChange}/>
                    <label htmlFor="logic">Logic of the Issue</label>

                    <br/><br/><br/><br/>
                    
                    <button className="btn pink lighten-1 z-depth-100 center">Add Issue</button>

                    </form>
                </div>
            </div>
        )
    }
} 

export default AddIssues;