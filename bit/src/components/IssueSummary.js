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
        approver:'',
        type:'',
        substatus:'',
        newsubstatus:''
    }

    handlesubStatus = (e) => {
        this.setState({
            newsubstatus: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost:4000/api/issue/' + this.props.match.params.id,{substatus: this.state.newsubstatus})
        .then(res => {console.log(res)});
    }

    handleClick = (e) => {
        e.preventDefault();
        
        const id = this.props.match.params.id;
        axios.put('http://localhost:4000/api/issue/'+id,{status:'closed'})
        .then(res => {console.log(res)});
    }

    handleClick1 = (e) => {
        e.preventDefault();
        
        const id = this.props.match.params.id;
        axios.delete('http://localhost:4000/api/issue/'+id)
        .then(res => {console.log(res)});

        this.props.history.push('/pendingissues')
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
                approver:res.data[0].approver,
                type: res.data[0].type,
                substatus:res.data[0].substatus
            })
        })

        const newsubstatus = this.state.substatus

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
                        <p>Type: {this.state.type}</p><br/>
                        <div className="card-action grey lighten-4 grey-text">
                            <p>{this.state.timestamp}</p>
                        </div>

                        <hr/>
                        <div className="center">
                            Status:
                            <br/>
                            {newsubstatus}
                            <br/>
                            </div>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <textarea rows="5" id="newsubstatus" type="text" name="substatus" onChange={this.handlesubStatus}/>
                            <label htmlFor="newsubstatus">Enter your status for the requirment</label><br/><br/>
                            <button className="btn">Submit🙌</button>
                        </form>
                        <div className="card-action center">
                            <button className="btn" onClick={this.handleClick}>Done ✔</button>
                            <button className="btn" onClick={this.handleClick1}>Delete ❌</button>
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