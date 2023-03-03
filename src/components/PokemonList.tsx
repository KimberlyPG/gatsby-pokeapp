import React, {FC, useContext, useEffect} from 'react';
import 'react-dropdown/style.css';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './PokemonCard';
import { PokemonContext } from '../context/pokemon.context';

import { Node } from '../types/types';

const PokemonList: FC = () => {
	const { setAllPokemon } = useContext(PokemonContext);

	useEffect(() => {
		setAllPokemon(query.allPokemon);
	}, [])

  const query =  useStaticQuery(graphql`
  query HomeQuery { 
    allPokemon {
      nodes {
        name
        stats {
          attack
          defense
          special_attack
          hp
          special_defense
          speed
            }
            types
            image
          }
        }
      }
    `);

    return (
		<>
			<div className='grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 mt-5 place-items-center ml-32 mr-32'>
				{query.allPokemon.nodes.map((item: Node) => (
					<PokemonCard key={item.name} item={item} /> 
				))}
			</div>
		</>
    )
}


export default PokemonList;