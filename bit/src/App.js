import React,{Component} from 'react';
import Navbar from './components/NavBar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login.js'


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path='/login' component= {Login} />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
