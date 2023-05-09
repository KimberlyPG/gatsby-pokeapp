import * as React from "react";
import PokemonList from '../components/PokemonList';
import SEO from "../components/SEO";

import '../styles/global.css'
import { graphql } from "gatsby";

const IndexPage = () => {  
	return (
		<PokemonList />
	)
}

export default IndexPage

export const Head = () => (
	<SEO title="" description="" />
  )