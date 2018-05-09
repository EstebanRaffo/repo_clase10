import React from 'react'
const Peliculas = ({ peliculas }) =>
 <div>
   {peliculas.map((pelicula,ix) =>
     <div key={ix}>{pelicula.titulo}</div>
   )}
 </div>

 export default Peliculas
