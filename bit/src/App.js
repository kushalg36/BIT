import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login.js';
import AddIssue from './components/AddIssues';
import signup from './components/Signup.js';
import Home from './components/home.js';
import logout from './components/logout.js';
import Navbar from './components/NavBar.js';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component = {Home} />
        <Route path='/login' component= {Login} />
        <Route path='/signup' component= {signup} />
        <Route path='/addissue' component= {AddIssue} />
        <Route path='/logout' component= {logout} />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
