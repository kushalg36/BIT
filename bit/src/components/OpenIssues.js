import React,{Component} from 'react';
import axios from 'axios';


class openIssues extends Component {

    state = {
        issues: [ ]
    }

    componentDidMount(){
        axios.post('http://localhost:4000/api/issues')
        .then(issues => {
            console.log(issues);
            // this.setState({
            //     issues: issues.data
            // })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="center">Hello</h1>
                </div>
            </div>
        )
    }
} 

export default openIssues;