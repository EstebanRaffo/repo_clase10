import Axios from 'axios';


Axios.get('https://pokeapi.co/api/v2/evolution-chain/1')
  .then((response)=>
  {
    console.log(response)
  })

//
// Axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
//   .then((response)=>
//   {
//     let id = response.data.id +1
//     Axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
//       .then((response)=>
//       {
//         console.log(response)
//       }
//     )
//   }
// )
// .catch((error)=>console.log(error));
