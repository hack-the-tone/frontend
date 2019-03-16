import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/'

import TokenManager from './contexts/token-context'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <TokenManager>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/topics" component={Login} />
        </TokenManager>
      </Router>
    );
  }
}

export default App;
