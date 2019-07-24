import React,{Component} from 'react';
import './App.css';
import Navbar from './components/NavBar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login.js'
import Signup from './components/Signup.js'


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path='/login' component= {Login} />
        <Route path='/signup' component= {Signup} />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
