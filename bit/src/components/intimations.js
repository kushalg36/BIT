import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class intimations extends Component {
    state={
        intimations:[]
    }

    componentDidMount(){
        const token = this.props.authtoken;
        let config={
            headers: {
                auth_token: token
            }
        }
        axios.post('http://localhost:4000/api/intimation',null,config)
        .then(res => {
            this.setState({
                intimations: res.data
            })
        })
    }

    render(){

        const substatusStyle = {
            color:'red',
            fontSize:'large'
        }

        const { intimations } = this.state;
        const intimationsList = intimations.length ? (
            intimations.map(intimation => {
                return(
                    <Link to={'intimation/'+intimation._id}>
                    <div className="post card" key="{intimation._id}">
                        <div className="card-content">
                            <span className="card-title center">{intimation.subject}</span>
                            <p className="center">{intimation.logic}</p>
                            <div style={substatusStyle}>
                                <p className='center'>{intimation.substatus}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            })
        ) : (
            <div className="center">
                <h2 className="center">No intimations yet!🤠</h2>
            </div>
        )
        return (
            <div className="container">
                {intimationsList}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authtoken: state.authtoken
    }
}


export default connect(mapStateToProps)(intimations);