import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nota extends Component {
  render() {
    const divStyle = {
      color: 'white',
      backgroundColor:'black',
    }

    return (
      <div style={divStyle}>
        <h2>{this.props.titulo}</h2>
        <p>{this.props.texto}</p>
      </div>
    );
  }
}

Nota.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
};
