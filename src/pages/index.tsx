import * as React from "react";
import PokemonList from '../components/PokemonList';
import { Seo } from "../components/Seo";

import '../styles/global.css'

const IndexPage = () => {  
	return (
		<PokemonList />
	)
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
export const Head = () => (
	<Seo />
  )