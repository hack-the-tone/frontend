import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TokenManager from './contexts/token-context'

import Login from './containers/Login/'
import Dashboard from './containers/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <TokenManager>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </TokenManager>
      </Router>
    );
  }
}

export default App;
