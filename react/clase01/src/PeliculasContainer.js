import React, { Component } from 'react'
import PeliculasStore from './PeliculasStore'
import Peliculas from './Peliculas'
import Input from './Input'

class PeliculasContainer extends Component {
 constructor (...args) {
   super(...args)
   this.state = {
     peliculas: PeliculasStore.getAll()
   }
   this.handleStoreChange = this.handleStoreChange.bind(this)
 }
 componentDidMount () {
   PeliculasStore.addListener('change', this.handleStoreChange)
 }
 componentWillUnmount () {
   PeliculasStore.removeListener('change', this.handleStoreChange)
 }
 handleStoreChange () {
   this.setState({
     counter: PeliculasStore.getAll()
   })
 }

 render () {
   return (
     <div>
       <Peliculas peliculas={this.state.peliculas} />
       <Input></Input>
     </div>
    )
 }
}
export default PeliculasContainer
