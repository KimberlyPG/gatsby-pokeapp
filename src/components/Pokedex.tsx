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
	const [pokemonTypeFilter, setPokemonTypeFilter] = useState<GraphPokemonData[]>();
	const [loadMore, setLoadMore] = useState(false);
	const [hasMore, setHasMore] = useState(allPokemonList.length > 36);

	const divRef = useRef<HTMLDivElement>(null);
	const showButton = useScrollToTop(divRef)

	useEffect(() => {
		setAllPokemon(query.graphCmsData.pokemon_v2_pokemonspecies);
	}, [])

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

	useEffect(() => {
		const filtered = allPokemonList.filter((item: GraphPokemonData) => {
			return item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.some((element) => 
				element.pokemon_v2_type?.name === typeSelected
			)
		})
		setPokemonTypeFilter(filtered);
	}, [typeSelected, gen])

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
			<div className='h-full mx-5 sticky top-0 overflow-y-scroll scrollbar-hide'>
				<PokemonTypesFilter handleClick={handleClick} />
			</div>
			<div className='w-full h-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300' ref={divRef}>
				<Dropdown changeGen={changeGen} />
				<PokedexCards typeSelected={typeSelected} pokemonList={pokemonList} pokemonTypeFilter={pokemonTypeFilter} />
				{typeSelected === "all" && 
					<LoadMoreButton hasMore={hasMore} handleLoadMore={handleLoadMore} />
				}
				{showButton &&
					<ScrollTopButton divRef={divRef} />
				}
			</div>
		</div>
    );
}

export default Pokedex;
