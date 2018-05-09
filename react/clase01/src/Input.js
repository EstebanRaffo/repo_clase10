import React, { Component } from 'react'
import dispatcher from './dispatcher'

class Input extends Component {
  constructor()
  {
    super()
    this.state = {
      peli: ""
    }
  }

 render () {
   return (
     <div>
       <input value={this.state.peli} onChange={(e) => {this.setState({ peli: e.target.value }) }}/>
       <button onClick={() => {
         dispatcher.dispatch({actionType: 'AGREGAR_PELICULA', pelicula: {id:4, titulo: this.state.peli}})
       }}>agregar</button>
     </div>
   )
}
}

export default Input
