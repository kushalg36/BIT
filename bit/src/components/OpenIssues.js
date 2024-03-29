import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class openIssues extends Component {

    state = {
        issues: [ ]
    }

    componentDidMount(){

        const token = this.props.authtoken;
        let config = {
            headers: {
                auth_token: token
            }
        }

        axios.post('http://localhost:4000/api/issues',null,config)
        .then(issues => {
            this.setState({
                issues: issues.data
            })
        })
    }

    render() {

        const substatusStyle = {
            color:'red',
            fontSize:'large'
        }

        const { issues } = this.state;
        const issueList = issues.length ? (
            issues.map(issue => {
                return(
                    <Link to={'issue/' + issue._id } >
                    <div className="post card" key={issue._id}>
                        <div className="card-content">
                            <span className="card-title">{issue.subject}</span>
                            <div className="card-action">
                                <p>{issue.name}</p>
                                <div style={substatusStyle}>
                                    <strong><p>{issue.substatus}</p></strong>
                                </div>
                                <p>{issue.type}</p>
                                <p>{issue.approver}</p>
                            </div>
                            <div className="card-action grey lighten-4 grey-text">
                                <p>{issue.timestamp}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            })
        ) : (
            <div className="center"><h2>No Issues yet!</h2>
            <p>Or check whether you are logged In😉</p></div>
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

const mapStateToProps = (state) => {
    return {
        authtoken: state.authtoken
    }
}

export default connect(mapStateToProps)(openIssues);
