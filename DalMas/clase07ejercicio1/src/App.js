import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuNav from './MenuNav'
import Contenido from './Contenido'

class App extends Component {
  render() {
    return (
      <div>
        <MenuNav></MenuNav>
        <Contenido></Contenido>
      </div>
    );
  }
}

export default App;
