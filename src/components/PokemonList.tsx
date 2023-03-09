import React, {FC, MouseEvent, useContext, useEffect, useState} from 'react';
import 'react-dropdown/style.css';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './PokemonCard';
import PokemonTypes from './PokemonTypes';

import { PokemonContext } from '../context/pokemon.context';
import { Node } from '../types/types';
import { types } from '../utils/pokemon-types';

const PokemonList: FC = () => {
	const { setAllPokemon } = useContext(PokemonContext);
	const [typeSelected, setTypeSelected] = useState<string>("all");
	const [pokemonFilter, setPokemonFilter] = useState<Node[]>();

	useEffect(() => {
		setAllPokemon(query.allPokemon);
	}, [])

	useEffect(() => {
		if(typeSelected === "all") {
			setPokemonFilter(query.allPokemon.nodes);
		}
		else {
			const filtered = query.allPokemon.nodes.filter((item) => {
				return item.types.includes(typeSelected);
			})
			setPokemonFilter(filtered)
		}
	}, [typeSelected])

  const query =  useStaticQuery(graphql`
	query HomeQuery { 
		allPokemon {
			nodes {
				id
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

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setTypeSelected((event.target as HTMLInputElement).value);
    }

    return (
		<>
			<div className='flex ml-32 mr-32 mt-5'>
				<button 
                    className="text-white text-sm text-center rounded-lg px-3 py-1 text-lg hover:opacity-50 text-gray-700 mr-2 border-2 cursor-pointer" 
                    onClick={handleClick}
					value="all"
                >
					show all
				</button>
				<PokemonTypes types={types} parent={"PokemonList"} handleClick={handleClick} />
			</div>
			<div className='grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 mt-7 place-items-center ml-32 mr-32'>
				{pokemonFilter?.map((item: Node) => (
					<PokemonCard key={item.name} item={item} /> 
				))}
			</div>
		</>
    )
}


export default PokemonList;