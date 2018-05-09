import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var productos = [
      {nombre: 'mouse', categoria: 'computadora', cantidad: 2},
      {nombre: 'teclado', categoria: 'computadora', cantidad: 0},
      {nombre: 'almohadon', categoria: 'deco', cantidad: 0},
      {nombre: 'cartera', categoria: 'moda', cantidad: 0},
      {nombre: 'iphone 8', categoria: 'celulares', cantidad: 5}
    ];

    //a
    // productos.map(function(value){
    //   console.log(value.nombre)
    // });

    //b
    // let productosFiltrados = productos.find(function(valor){
    //   return valor.nombre == 'iphone 8'
    // });
    // console.log(productosFiltrados)

    //c
    // var aumentoDeCantidad = productos.map(function(value){
    //    return value.cantidad+2
    // });
    // console.log(aumentoDeCantidad)

    //d
    //  let productosFiltrados = productos.reduce(function(valor){
    //    if (valor.categoria === 'computadora')
    //       return valor;
    //    else
    //       return null;
    //  });
    // console.log(productosFiltrados)

    // let reduced = productos.reduce(function(accumulator,currentValue){
    //   if (currentValue.categoria === "computadora")
    //     accumulator.push(currentValue)
    //
    //   return accumulator
    // },[]);
    // console.log(reduced)

    // e
    // let reduced = productos.reduce(function(accumulator,currentValue){
    //     return accumulator + currentValue.cantidad
    // },0);
    // console.log(reduced)

    let fib = (num) => {
      if (num <= 1) return 1;
      console.log(fib(num - 1) + fib(num - 2))
      return fib(num - 1) + fib(num - 2);
    }

    fib(10)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
