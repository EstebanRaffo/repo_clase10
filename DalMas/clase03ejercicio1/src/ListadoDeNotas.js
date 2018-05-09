import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nota from './Nota'

export default class ListadoDeNota extends Component {
  render() {
    const listItems = this.props.notas.map((item,i) => {
      return <Nota key={i} titulo={item.titulo} texto={item.texto}></Nota>
    }
    );
    return (listItems)
  }
}

ListadoDeNota.propTypes = {
   notas: PropTypes.arrayOf(PropTypes.shape({
     color: PropTypes.string.isRequired,
     fontSize: PropTypes.number.isRequired,
   })).isRequired,
}
