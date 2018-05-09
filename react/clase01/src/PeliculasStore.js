import dispatcher from './dispatcher'
import { EventEmitter } from 'events'

let peliculas = [{id: 1, titulo: 'volver al futuro'},{id: 2, titulo: 'test 2'}]

const PeliculasStore = Object.assign({}, EventEmitter.prototype, {
   getAll () {
     return peliculas
  }
})

dispatcher.register(function (action) {
 switch (action.actionType) {
   case 'PELICULAS_RECIBIDAS':
     peliculas.push(action.pelicula)
     PeliculasStore.emit('change')
     break
   case 'AGREGAR_PELICULA':
       peliculas.push(action.pelicula)
       PeliculasStore.emit('change')
       break
    default:

 }
})
export default PeliculasStore
