import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TokenManager from './contexts/token-context'

import Login from './containers/Login/'
import Dashboard from './containers/Dashboard';
import ComponentAppBar from './components/ComponentAppBar/ComponentAppBar';

import './App.css';

class App extends Component {
  render(props) {
    return (
      <Router>
        <TokenManager>
          <Route exact  path="/login" component={Login} />
          {/* <Route  path="/dashboard" component={ComponentAppBar} /> */}

          <ComponentAppBar>
            <Route  path="/dashboard" component={Dashboard} />
          </ComponentAppBar>
        </TokenManager>
      </Router>
    );
  }
}

export default App;
