import React from 'react';

import Layout from './src/components/Layout';

import { PokemonProvider } from './src/context/pokemon.context';
import './src/styles/global.css'
import 'lazysizes'

export const wrapRootElement = ({ element }) => {
  return (
    <PokemonProvider>
        <Layout>
            {element}    
        </Layout>
    </PokemonProvider>
  )
};