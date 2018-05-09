import React, { Component } from 'react';

export default class SegundoComponente extends Component {
  render() {
    let toRender = React.createElement("div",null,
        React.createElement("ul",null,"Mi primer componente"),
          React.createElement(
            "li",
            null,
            React.createElement("a",{ href: "#" },"Manzana")),
          React.createElement(
            "li",
            null,
            React.createElement("a",{ href: "#" },"Pera")),
          React.createElement(
            "li",
            null,
            React.createElement("a",{ href: "#" },"Banana"))
   )

   return toRender;
  }
}
