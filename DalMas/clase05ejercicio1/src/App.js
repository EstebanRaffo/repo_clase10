import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListGroup from './ListGroup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListGroup>
          <li>123</li>
          <li>125433</li>
        </ListGroup>
      </div>
    );
  }
}

export default App;
