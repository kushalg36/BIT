import React,{Component} from react;
import verify from '../../backend/api/verifyToken.js';
import Navbar from './NavBar2.js';


class openIssues extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
} 

export default openIssues;