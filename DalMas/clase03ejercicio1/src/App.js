import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListadoDeNotas from './ListadoDeNotas'

class App extends Component {
  render() {
    let test1 = [{texto: "1" , titulo:"2"}, {texto: "13", titulo:"14"}];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListadoDeNotas notas={test1} />
      </div>
    );
  }
}

export default App;
