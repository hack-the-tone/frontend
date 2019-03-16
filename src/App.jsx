import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />
          <Route exact path="/" component={Login} />
          <Route path="/about" component={Login} />
          <Route path="/topics" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
