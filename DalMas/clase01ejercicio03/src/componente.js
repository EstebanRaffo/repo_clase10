import React, { Component } from 'react';

export default class Componente extends Component {
  render() {
    let toRender = React.createElement("div",null,
        React.createElement("h1",null,"Mi primer componente"),
         React.createElement("p",null,"Practicando crear componentes sin JSX") 
   )

   return toRender;
  }
}
