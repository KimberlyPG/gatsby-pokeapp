import React, {FC, useContext, useEffect, useState} from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './PokemonCard';

import { PokemonContext } from '../context/pokemon.context';
import { GraphPokemonData } from '../types/types';
import PokemonTypesFilter from './PokemonTypesFilter';

const PokemonList: FC = () => {
	const { setAllPokemon } = useContext(PokemonContext);
	const [typeSelected, setTypeSelected] = useState<string>("all");
	const [pokemonFilter, setPokemonFilter] = useState<GraphPokemonData[]>();

	useEffect(() => {
		setAllPokemon(query.graphCmsData.pokemon_v2_pokemonspecies);
	}, [])

	useEffect(() => {
		if(typeSelected === "all") {
			setPokemonFilter(query.graphCmsData.pokemon_v2_pokemonspecies);
		}
		else {
			const filtered = query.graphCmsData.pokemon_v2_pokemonspecies.filter((item: GraphPokemonData) => {
				return item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.some((element) => 
					element.pokemon_v2_type?.name === typeSelected
				)
			})
			setPokemonFilter(filtered)
		}
	}, [typeSelected])

	const query = useStaticQuery(graphql`
	query MyQuery {
		graphCmsData {
		pokemon_v2_pokemonspecies(order_by: {generation_id: asc, id: asc}) {
			id
			name
			generation_id
			pokemon_v2_pokemons {
				pokemon_v2_pokemonsprites {
					sprites
				}
				pokemon_v2_pokemontypes {
					pokemon_v2_type {
					  name
					}
				}
			}
			pokemon_v2_pokemoncolor {
				name
			  }
			}
		}
	}`
	);

	const handleClick = (type: string) => {
		setTypeSelected(type)
    }

    return (
		<div className='flex h-full w-screen'>
			<div className='h-full mx-5 sticky top-0 overflow-y-scroll scrollbar-hide'>
				<PokemonTypesFilter handleClick={handleClick} />
			</div>
			<div className='w-full h-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300'>
				<div className='mt-5 grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 place-items-center mr-5 h-fit'>
					{pokemonFilter?.slice(0, 36).map((item: GraphPokemonData) => (
						<PokemonCard key={item.id} item={item} /> 				
					))}
				</div>
			</div>
		</div>
		
    )
}

export default PokemonList;
