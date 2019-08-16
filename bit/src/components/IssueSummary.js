import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Summary extends Component {
    state={
        name:'',
        subject:'',
        email:'',
        number:'',
        status:'',
        logic:'',
        timestamp:'',
        approver:''
    }
    render(){

        const token = this.props.authtoken;
        let config = {
            headers: {
                auth_token: token
            }
        }

        const id = this.props.match.params.id;
        axios.post('http://localhost:4000/api/issueSummary',{id:id},config)
        .then(res => {
            this.setState({
                subject:res.data[0].subject,
                name: res.data[0].name,
                email: res.data[0].email,
                number:res.data[0].number,
                status:res.data[0].status,
                logic: res.data[0].logic,
                timestamp: res.data[0].timestamp,
                approver:res.data[0].approver
            })
        })
        return(
            <div className="container section project-details">
                <div className="card z-depth-10">
                    <div className="card-content">
                        <h5 className="center title">Issue id: {id}</h5>
                        <p>Subject Line: {this.state.subject}</p><br/>
                        <p>Name of the user: {this.state.name}</p><br/>
                        <p>Email: {this.state.email}</p><br/>
                        <p>Contact Number: {this.state.number}</p><br/>
                        <p>Logic: {this.state.logic}</p><br/>
                        <p>Approver: {this.state.approver}</p><br/>
                        <p>Status: {this.state.status}</p><br/>
                        <div className="card-action grey lighten-4 grey-text">
                                <p>{this.state.timestamp}</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
        authtoken: state.authtoken
    }
}

export default connect(mapStateToProps)(Summary);