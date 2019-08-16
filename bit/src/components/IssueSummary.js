import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Summary extends Component {
    // componentDidMount() {
    //     axios.post('http:localhost:4000/api/issueSummary',id)
    //     .then(res => {
    //         console.log(res);
    //     })
    // }
    state={
        // name:'',
        subject:'',
        email:'',
        number:'',
        status:'',
        logic:'',
        // timestamp:''
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
                email: res.data[0].email,
                number:res.data[0].number,
                status:res.data[0].status,
                logic: res.data[0].logic
            })
        })
        return(
            <div className="container section project-details">
                <div className="card z-depth-10">
                    <div className="card-content">
                        <h5 className="center title">Issue id: {id}</h5>
                        <p>Subject Line: {this.state.subject}</p>
                        <p>Email Content: {this.state.email}</p>
                        <p>Contact Number: {this.state.number}</p>
                        <p>Status: {this.state.status}</p>
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