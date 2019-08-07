import React,{Component} from 'react';
import issues from '../images/we_have_issues.gif';


class gif extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <img src={issues} alt="We have some issues" style={{position:"absolute",height:"80%"}}/>
                </div>
            </div>
        )
    }
}

export default gif;