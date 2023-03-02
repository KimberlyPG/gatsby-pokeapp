import * as React from "react";
import { PageProps } from "gatsby";

import PokemonList from '../components/PokemonList';
import '../styles/global.css'

const IndexPage = () => {  
  return (
    <PokemonList />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>


