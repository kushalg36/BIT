import React,{Component} from 'react';
import axios from 'axios';


class openIssues extends Component {

    state = {
        issues: [ ]
    }

    componentDidMount(){
        axios.post('http://localhost:4000/api/issues')
        .then(issues => {
            this.setState({
                issues: issues.data
            })
        })
    }

    render() {

        const { issues } = this.state;
        const issueList = issues.length ? (
            issues.map(issue => {
                return(
                    <div className="post card" key={issue._id}>
                        <div className="card-content">
                            <span className="card-title">{issue.subject}</span>
                            <p>{issue.logic}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"><h2>No Issues yet!</h2></div>
        )

        return (
            <div>
                <div className="container">
                    {issueList}
                </div>
            </div>
        )
    }
} 

export default openIssues;