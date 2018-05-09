import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPokemons from './MyPokemons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyPokemons/>
      </div>
    );
  }
}

export default App;
