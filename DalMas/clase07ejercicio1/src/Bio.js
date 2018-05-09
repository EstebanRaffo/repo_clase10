import React from 'react';

const we = [
 {
   id: `tony`,
   name: `Tony Soprano`,
   description: `Tony, prácticamente, maneja todo el norte de Nueva`
 },
 {
   id: `bob`,
   name: `Bob Esponja`,
   description: `Bob Esponja (en inglés, SpongeBob SquarePants) es una`
 },
 {
   id: `forrest`,
   name: `Forrest Gump`,
   description: `Mientras espera sentado en una parada de a`
 },
];

const Bio = ({match}) => {
  const perfil = we.find(perfil => perfil.id == match.params.id)
  return (
  <div>
    <h1>{perfil.name}</h1>
    <h1>{perfil.description}</h1>
  </div>
)}

export default Bio
