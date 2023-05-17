import React, {FC, useContext, useEffect, useState, useRef, SetStateAction } from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import Dropdown from './Dropdown';
import PokedexCards from './PokedexCards';
import PokemonTypesFilter from './PokemonTypesFilter';
import LoadMoreButton from './LoadMoreButton';

import { useScrollToTop } from '../hooks/useScrollToTop';
import { PokemonContext } from '../context/pokemon.context';
import { GraphPokemonData } from '../types/types';
import ScrollTopButton from './ScrollTopButton';
import { useFilterPokemon } from '../hooks/useFilterPokemon';

const Pokedex: FC = () => {
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
	const [gen, setGen] = useState("all");

	let allPokemonList = query.graphCmsData.pokemon_v2_pokemonspecies;

	const [pokemonList, setPokemonList] = useState([...allPokemonList.slice(0, 36)]);
	const [loadMore, setLoadMore] = useState(false);
	const [hasMore, setHasMore] = useState(allPokemonList.length > 36);

	const divRef = useRef<HTMLDivElement>(null);

	const showButton = useScrollToTop(divRef)
	const pokemonTypeFilter = useFilterPokemon(allPokemonList, typeSelected, gen)

	useEffect(() => {
		setAllPokemon(query.graphCmsData.pokemon_v2_pokemonspecies);
	}, [])
	
	const handleClick = (type: string) => {
		setTypeSelected(type)
	}

	if(gen !== "all") {
		allPokemonList = query.graphCmsData.pokemon_v2_pokemonspecies.filter((el: GraphPokemonData) => {
			return el.generation_id === parseInt(gen)
		})
	}

	const changeGen = (generation: SetStateAction<string>) => {
		setGen(generation)
	}

	useEffect(() => {
		setPokemonList([...allPokemonList.slice(0, 36)])
	}, [gen])

	const handleLoadMore = () => {
		setLoadMore(true);		
	}
	
	useEffect(() => {
		if (loadMore && hasMore) {
			const currentLength = pokemonList.length;
			const isMore = currentLength < allPokemonList.length;
			const nextResults = isMore ? 
				allPokemonList.slice(currentLength, currentLength + 27)
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
		<div className="flex h-full w-screen">
			<PokemonTypesFilter handleClick={handleClick} />
			<div className='w-full h-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300' ref={divRef}>
				<Dropdown changeGen={changeGen} />
				<PokedexCards typeSelected={typeSelected} pokemonList={pokemonList} pokemonTypeFilter={pokemonTypeFilter} />
				<LoadMoreButton typeSelected={typeSelected} hasMore={hasMore} handleLoadMore={handleLoadMore} />
				<ScrollTopButton showButton={showButton} divRef={divRef} />
			</div>
		</div>
    );
}

export default Pokedex;
