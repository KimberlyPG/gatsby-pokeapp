import * as React from "react";

import PokemonList from '../components/PokemonList';

import { PokemonProvider } from "../context/pokemon.context";
import '../styles/global.css'
import { graphql } from "gatsby"

// export const query = graphql`
//     query HomeQuery { 
//       allPokemon {
//         nodes {
//           name
//           stats {
//             attack
//             defense
//             special_attack
//             hp
//             special_defense
//             speed
//               }
//               types
//               image
//             }
//           }
//   }
// `

const IndexPage = () => {  
  // console.log("qwuery", data.allPokemon)
  return (
    // <PokemonProvider >
        <PokemonList />
    // </PokemonProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>


