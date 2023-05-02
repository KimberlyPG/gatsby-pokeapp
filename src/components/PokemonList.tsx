import React, {FC, MouseEvent, useContext, useEffect, useState} from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './PokemonCard';

import { PokemonContext } from '../context/pokemon.context';
import { Node } from '../types/types';
import PokemonTypesFilter from './PokemonTypesFilter';

const PokemonList: FC = () => {
	const { setAllPokemon } = useContext(PokemonContext);
	const [typeSelected, setTypeSelected] = useState<string>("all");
	const [pokemonFilter, setPokemonFilter] = useState<Node[]>();

	useEffect(() => {
		setAllPokemon(query.allPokemons);
	}, [])

	useEffect(() => {
		if(typeSelected === "all") {
			setPokemonFilter(query.allPokemons.nodes.slice(0, 386));
		}
		else {
			const filtered = query.allPokemons.nodes.slice(0, 386).filter((item: Node) => {
				return item.type.includes(typeSelected);
			})
			setPokemonFilter(filtered)
		}
	}, [typeSelected])

  const query =  useStaticQuery(graphql`
	query HomeQuery { 
		allPokemons {
			nodes {
			  name
			  id
			  total
			  hp
			  sp_def
			  sp_atk
			  defense
			  attack
			  type
			  speed
			  national_number
			  natl_num
			  sprites {
				normal
				large 
			  }
			}
		  }
		}
	`);

	const handleClick = (type: string) => {
		setTypeSelected(type)
    }

    return (
		<div className='flex'>
			<PokemonTypesFilter handleClick={handleClick} />
			<div className='grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 mt-7 place-items-center mx-5 gap-5 h-fit'>
				{pokemonFilter?.map((item: Node) => (
					<PokemonCard key={item.id} item={item} /> 
				))}
			</div>
		</div>
    )
}

export default PokemonList;