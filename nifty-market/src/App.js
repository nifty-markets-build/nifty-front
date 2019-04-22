import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

// import styled from 'styled-components';

import NavBar from './components/NavBar.js';
import Marketplace from './components/Marketplace/Marketplace.js';
import Login from './components/LoginPage.js';
import Register from './components/SignUpPage.js';
import UserPage from './components/UserPage.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Marketplace} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        {/* <Route exact path='/user' component={UserPage} /> */}
      </div>
    );
  }
}

export default App;
