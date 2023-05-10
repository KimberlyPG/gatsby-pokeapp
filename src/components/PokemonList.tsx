import React, {FC, useContext, useEffect, useState} from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './PokemonCard';

import { PokemonContext } from '../context/pokemon.context';
import { GraphPokemonData } from '../types/types';
import PokemonTypesFilter from './PokemonTypesFilter';

const PokemonList: FC = () => {
	const query = useStaticQuery(graphql`
	query MyQuery {
		graphCmsData {
		pokemon_v2_pokemonspecies(order_by: {generation_id: asc, id: asc} limit: 905) {
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

	const { setAllPokemon } = useContext(PokemonContext);
	const [typeSelected, setTypeSelected] = useState<string>("all");
	
	const allPokemonList = query.graphCmsData.pokemon_v2_pokemonspecies;
	const [pokemonList, setPokemonList] = useState([...allPokemonList.slice(0, 36)]);
	const [pokemonTypeFilter, setPokemonTypeFilter] = useState<GraphPokemonData[]>();
	const [loadMore, setLoadMore] = useState(false);
	const [hasMore, setHasMore] = useState(allPokemonList.length > 36);

	useEffect(() => {
		setAllPokemon(query.graphCmsData.pokemon_v2_pokemonspecies);
	}, [])

	useEffect(() => {
		const filtered = allPokemonList.filter((item: GraphPokemonData) => {
			return item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.some((element) => 
				element.pokemon_v2_type?.name === typeSelected
			)
		})
		setPokemonTypeFilter(filtered);
	}, [typeSelected])

	const handleClick = (type: string) => {
		setTypeSelected(type)
    }

	const handleLoadMore = () => {
		setLoadMore(true);
	}
   
	useEffect(() => {
		if (loadMore && hasMore) {
			const currentLength = pokemonList.length;
			const isMore = currentLength < allPokemonList.length;
			const nextResults = isMore ? 
				allPokemonList.slice(currentLength, currentLength + 36)
			: 
				[]
				setPokemonList([...pokemonList, ...nextResults]);
				setLoadMore(false);
		}
	}, [loadMore, hasMore]) 
   

	useEffect(() => {
		const isMore = pokemonList.length < allPokemonList.length;
		setHasMore(isMore);
	}, [pokemonList]); 

    return (
		<div className='flex h-full w-screen'>
			<div className='h-full mx-5 sticky top-0 overflow-y-scroll scrollbar-hide'>
				<PokemonTypesFilter handleClick={handleClick} />
			</div>
			<div className='w-full h-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300'>
				<div className='mt-5 grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 place-items-center mr-5 h-fit'>
					{typeSelected === "all" ?  (
						pokemonList.map((item: GraphPokemonData) => (
							<PokemonCard key={item.id} item={item} /> 				
						))
					):(
						pokemonTypeFilter?.map((item: GraphPokemonData) => (
							<PokemonCard key={item.id} item={item} /> 				
						))
					)}
				</div>
				{typeSelected === "all" && 
				<div className='flex w-full justify-center'>
					{hasMore ? (
						<button 
							className='text-center text-white font-semibold my-5 bg-[#4DAD5B] py-1 px-2 rounded-md' 
							onClick={handleLoadMore}
						>
								Load More Pokemon
						</button>
					) : (
						<p className='w-full text-center my-5 text-gray-300'>No More Pokemon</p>
					)}
				</div>
				}
			</div>
		</div>
		
    )
}

export default PokemonList;
