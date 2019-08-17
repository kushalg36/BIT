import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login.js';
import AddIssue from './components/AddIssues';
import signup from './components/Signup.js';
import Home from './components/home.js';
import logout from './components/logout.js';
import Navbar from './components/NavBar.js';
import OpenIssues from './components/OpenIssues.js';
import IssueSummary from './components/IssueSummary.js';
import Intimations from './components/intimations.js';
import IntimationSummary from './components/intimationSummary';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
        <div className="navbar"><Navbar /></div>
        <div className="rest">
        <Route exact path='/' component = {Home} />
        <Route path='/login' component= {Login} />
        <Route path='/signup' component= {signup} />
        <Route path='/addissue' component= {AddIssue} />
        <Route path='/logout' component= {logout} />
        <Route path='/pendingissues' component={OpenIssues} />
        <Route path='/issue/:id' component={IssueSummary} />
        <Route path='/intimations' component={Intimations} />
        <Route path='/intimation/:id' component={IntimationSummary} />
        </div>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
