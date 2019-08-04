import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar2 from './components/NavBar2.js';
import AddIssue from './components/AddIssues';
import signup from './components/Signup.js';
import Home from './components/home.js';

class user extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
      <Navbar2 />
        <Route exact path='/' component = {Home} />
        <Route path='/signup' component= {signup} />
        <Route path='/addissue' component= {AddIssue} />
      </div>
    </BrowserRouter>
  );
  }
}

export default user;
