import React, {FC, MouseEvent, useContext, useEffect, useState} from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './PokemonCard';

import { PokemonContext } from '../context/pokemon.context';
import { Node, GraphCmsData } from '../types/types';
import PokemonTypesFilter from './PokemonTypesFilter';

const PokemonList: FC = () => {
	const { setAllPokemon } = useContext(PokemonContext);
	const [typeSelected, setTypeSelected] = useState<string>("all");
	const [pokemonFilter, setPokemonFilter] = useState<Node[]>();

	// useEffect(() => {
	// 	setAllPokemon(query.allPokemons);
	// }, [])

	// useEffect(() => {
	// 	if(typeSelected === "all") {
	// 		setPokemonFilter(query.allPokemons.nodes);
	// 	}
	// 	else {
	// 		const filtered = query.allPokemons.nodes.filter((item: Node) => {
	// 			return item.type.includes(typeSelected);
	// 		})
	// 		setPokemonFilter(filtered)
	// 	}
	// }, [typeSelected])

//   const query =  useStaticQuery(graphql`
// 	query HomeQuery { 
// 		allPokemons(limit: 251) {
// 			nodes {
// 			  name
// 			  id
// 			  total
// 			  hp
// 			  sp_def
// 			  sp_atk
// 			  defense
// 			  attack
// 			  type
// 			  speed
// 			  national_number
// 			  natl_num
// 			  sprites {
// 				normal
// 				large 
// 			  }
// 			}
// 		  }
// 		}
// 	`);

	const query2 = useStaticQuery(graphql`
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
			}
		}
		}
	}`
	);
	console.log(query2.graphCmsData.pokemon_v2_pokemonspecies)

	const handleClick = (type: string) => {
		setTypeSelected(type)
    }

    return (
		<div className='flex h-full w-screen'>
			<div className='h-full mx-5 sticky top-0 overflow-y-scroll scrollbar-hide'>
				<PokemonTypesFilter handleClick={handleClick} />
			</div>
			{/* <div className='w-full h-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300'>
				<div className='mt-5 grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 place-items-center mr-5 h-fit'>
					{pokemonFilter?.map((item: Node) => (
						<PokemonCard key={item.id} item={item} /> 
					))}
				</div>
			</div> */}
			<div className='w-full h-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300'>
				<div className='mt-5 grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 place-items-center mr-5 h-fit'>
					{query2.graphCmsData.pokemon_v2_pokemonspecies?.map((item: GraphCmsData) => (
						<div key={item.id} className='shadow-md relative bg-gray-100 dark:bg-[#1E2022] w-40 rounded-lg cursor-pointer 
						hover:bg-gray-200 dark:hover:bg-zinc-800 bg-opacity-70 mb-5 '>
							<p className="text-center absolute text-gray-300 dark:text-gray-100 m-3 text-2xl opacity-80">
								#{item.id}
							</p>
							<div className='grid place-items-center pb-5'>
								<img
									className='flex justify-center mt-8 w-[120px] h-[120px]'      
									src={JSON.parse(item.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites)?.other[`official-artwork`].front_default?.replace("/media", "https://raw.githubusercontent.com/PokeAPI/sprites/master")} 
									alt={`${item.name} image`} 
								/>
								<h1 className='text-gray-500 dark:text-gray-100 text-lg font-semibold'>{item.name}</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		
    )
}

export default PokemonList;
