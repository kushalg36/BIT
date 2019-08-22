import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class AddIntimation extends Component {

    constructor(props) {
        super(props);
            this.state={
                appname:[],
                subject:'',
                time:'',
                ip:'',
                approver:'',
                impact:'',
                circle:[],
                status:'open',
                substatus:'',
                error:''
            }
    }

    handleChange = (e) => {
        

        this.setState({
            [e.target.id]: e.target.value,
            approver: this.props.username
        });
    }

    handlecheckboxImpact = (e) => {


        let old_appname = this.state.appname;
        let check = e.target.checked;
        let checkedappname = e.target.value;

        if(check) {
            this.setState({
                [e.target.id]: [...this.state.appname,checkedappname]
            })
            
        }
        else {
            const index = old_appname.indexOf(checkedappname);
            if(index > -1) {
                old_appname.splice(index,1);
                this.setState({
                    appname: old_appname
                })
            } 
        }
    }

    handlecheckboxCircle = (e) => {
        let old_circle = this.state.circle;
        let check = e.target.checked;
        let checkedCircle = e.target.value;

        if(check) {
            this.setState({
                [e.target.id]: [...this.state.circle,checkedCircle]
            })
            
        }
        else {
            const index = old_circle.indexOf(checkedCircle);
            if(index > -1) {
                old_circle.splice(index,1);
                this.setState({
                    circle: old_circle
                })
            } 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const token = this.props.authtoken;
        let config = {
            headers: {
                auth_token: token
            }
        }

        const intimation = this.state;
        axios.post('http://localhost:4000/api/addIntimation',intimation,config)
        .then(res => {
            if( res.data === 'intimation saved' ) {
                this.props.history.push('/intimations')
            }
            else {
                this.setState ({
                    error:res.data
                })
            }
        })
    }

    render() {

        const errorStyle = {
            color:'red',
            fontWeight: 'bold',
            fontSize: 'large'
        }

        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h2 className="center">Add New Intimation</h2>

                    <input id="impact" type="text" name="Impact" onChange={this.handleChange}/>
                    <label htmlFor="impact">Impact</label>

                    <input id="ip" type="text" name="ip" onChange={this.handleChange}/>
                    <label htmlFor="ip">Affected IP</label>

                    <input id="subject" type="text" name="subject" onChange={this.handleChange}/>
                    <label htmlFor="subject">Subject Line</label>

                    <input id="time" type="text" name="timing" onChange={this.handleChange}/>
                    <label htmlFor="timing">Downtime Window</label>

                    <br/><br/>
                    <span>appname</span>
                    <div className="row">
                        <div className="col s3">
                        <p>
                            <label>
                                <input type="checkbox" id="appname" value="I-reporting" onChange={this.handlecheckboxImpact}/>
                                <span>I-reporting</span>
                            </label>
                        </p>
                        </div>
                        <div className="col s3">
                        <p>
                            <label>
                                <input type="checkbox" id="appname" value="CDR/EDR pendency" onChange={this.handlecheckboxImpact}/>
                                <span>CDR/EDR pendency</span>
                            </label>
                        </p>
                        </div>
                        <div className="col s3">
                        <p>
                            <label>
                                <input type="checkbox" id="appname" value="ODS pendency" onChange={this.handlecheckboxImpact}/>
                                <span>ODS pendency</span>
                            </label>
                        </p>
                        </div>
                        <div className="col s3">
                        <p>
                            <label>
                                <input type="checkbox" id="appname" value="Subscriber/Offer dump" onChange={this.handlecheckboxImpact}/>
                                <span>Subscriber/offer dump</span>
                            </label>
                        </p>
                        </div>
                    </div>

                    
                    <textarea rows="5" id="issue" type="text" name="issue" onChange={this.handleChange}/>
                    <label htmlFor="issue">Issue of the activity</label>

                    <input id="approver" type="text" name="approver" value={this.props.username} disabled />
                    <label htmlFor="approver">Approver</label> <br/><br/><br/>

                    <span>Circles effected</span><br/><br/>
                    <div className="row">
                    <div className="col s3">
                        <strong>Zone 1</strong>
                        <p>
                            <label>
                                <input type="checkbox" value="KAR" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>KAR</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="CHN" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>CHN</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="ROTN" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>ROTN</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="ORI" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>ORI</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="MP" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>MP</span>
                            </label>
                        </p>
                    </div>


                    <div className="col s3">
                        <strong>Zone 2</strong>
                        <p>
                            <label>
                                <input type="checkbox" value="ROB" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>ROB</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="RAJ" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>RAJ</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="KRL" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>KRL</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="ASM" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>ASM</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="NE" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>NE</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="BHR" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>BHR</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="JNK" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>JNK</span>
                            </label>
                        </p>
                    </div>


                    <div className="col s3">
                        <strong>Zone 3</strong>
                        <p>
                            <label>
                                <input type="checkbox" value="KOL" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>KOL</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="DEL" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>DEL</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="HAR" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>HAR</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="PJB" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>PJB</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="UPE" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>UPE</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="UPW" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>UPW</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="HP" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>HP</span>
                            </label>
                        </p>
                    </div>


                    <div className="col s3">
                        <strong>Zone 4 and 5</strong>
                        <p>
                            <label>
                                <input type="checkbox" value="AP" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>AP</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="GUJ" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>GUJ</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="MUM" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>MUM</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" value="MNG" id="circle" onChange={this.handlecheckboxCircle}/>
                                <span>MNG</span>
                            </label>
                        </p>
                        

                    </div>

                    </div>


                    <br/><br/><hr/><br/><br/>
                    <div className="center">
                        <button className="btn pink lighten-1 z-depth-100">Add Issue</button>
                    </div>
                    <div style={errorStyle}>
                        {this.state.error}
                    </div>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authtoken: state.authtoken,
        username: state.username
    }
}

export default connect(mapStateToProps)(AddIntimation);