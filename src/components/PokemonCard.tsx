import React, { FC } from 'react';
import { Link } from "gatsby";

import PokemonTypes from './PokemonTypes';

import { GraphPokemonData } from '../types/types';
import { spritesHandler } from '../utils/spritesHandler';

interface PokemonCardProps {
    item: GraphPokemonData;
}

const PokemonCard: FC<PokemonCardProps> = ({ item }) => {

    return (
        <Link to={`/pokemon/${item.name}`} > 
            <div className='max-w-40 xs:px-5 sm:px-3 md:px-3 lg:px-5 xl:px-3 2xl:px-5 shadow-md 
                relative bg-gray-100 dark:bg-[#1E2022] rounded-lg cursor-pointer hover:bg-gray-200 
                dark:hover:bg-zinc-800 bg-opacity-70 mb-5 hover:mb-1'>
                <p className="text-center absolute text-gray-300 dark:text-gray-100 m-3 text-2xl opacity-80">
                    #{item.id}
                </p>
                <div className='grid place-items-center pb-5'>
                    <img
                        className='flex justify-center mt-8 max-w-[120px] max-h-[120px]'      
                        src={spritesHandler(item)} 
                        alt={`${item.name} image`} 
                        loading="eager"
                    />
                    <h1 className='text-gray-500 dark:text-gray-100 text-lg font-semibold'>{item.name}</h1>
                    <PokemonTypes 
                        types={item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes} 
                        parent="PokemonCard" 
                        handleClick={() => null} 
                    />
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard;