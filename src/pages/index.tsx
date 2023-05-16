import * as React from "react";
import Pokedex from '../components/Pokedex';
import SEO from "../components/SEO";

import '../styles/global.css'
import { graphql } from "gatsby";

const IndexPage = () => {  
	return (
		<Pokedex />
	)
}

export default IndexPage

export const Head = () => (
	<SEO title="" description="" />
  )