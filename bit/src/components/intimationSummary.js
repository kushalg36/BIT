import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class IntimationSummary extends Component {
    state={
        appname:[],
        circle:[],
        ip:'',
        subject:'',
        status:'',
        issue:'',
        timestamp:'',
        approver:'',
        impact:'',
        substatus:'',
        newsubstatus:''
    }

    handleClick = (e) => {

        const id = this.props.match.params.id;
        axios.put('http://localhost:4000/api/intimations/'+id,{status:'closed'})
        .then(res => {});


    } 


    handleClick1 = (e) => {

        const id = this.props.match.params.id;
        axios.put('http://localhost:4000/api/intimations/'+id,{substatus:'Intimated already!'})
        .then(res => {});

        
    } 

    handleClick2 = (e) => {

        const id = this.props.match.params.id;
        axios.delete('http://localhost:4000/api/intimations/'+id)
        .then(res => {});

        this.props.history.push('/intimations')

    } 

    render(){

        const token = this.props.authtoken;
        let config = {
            headers: {
                auth_token: token
            }
        }

        const id = this.props.match.params.id;
        axios.post('http://localhost:4000/api/intimationSummary',{id:id},config)
        .then(res => {
            this.setState({
                subject:res.data[0].subject,
                ip:res.data[0].ip,
                appname:res.data[0].appname,
                circle:res.data[0].circle,
                status:res.data[0].status,
                issue: res.data[0].logic,
                timestamp: res.data[0].time,
                approver:res.data[0].approver
            })
        })

        

        return(
            <div className="container section project-details">
                <div className="card z-depth-10">
                    <div className="card-content">
                        <h5 className="center title">Issue id: {id}</h5>
                        <p>Subject Line: {this.state.subject}</p><br/>
                        <p>Affected IP: {this.state.ip}</p><br/>
                        <p>Affected Appname: {this.state.appname.map(app => <span>{app}, </span>)}</p><br/>
                        <p>Approver: {this.state.approver}</p><br/>
                        <p>Status: {this.state.status}</p><br/>
                        <p>Issue: {this.state.issue}</p><br/>
                        <p>Cricles Affected: {this.state.circle.map(circle => <span>{circle}, </span>)}</p><br/>
                        <div className="card-action grey lighten-4 grey-text">
                                <p>{this.state.timestamp}</p>
                            </div>
                        <div className="card-action center">
                            <button className="btn" onClick={this.handleClick}>Done ✔</button>
                            <button className="btn" onClick={this.handleClick1}>Intimated</button>
                            <button className="btn" onClick={this.handleClick2}>Delete ❌</button>
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

export default connect(mapStateToProps)(IntimationSummary);