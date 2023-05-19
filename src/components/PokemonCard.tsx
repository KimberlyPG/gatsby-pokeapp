import React, { FC } from 'react';
import { Link } from "gatsby";

import PokemonTypes from './PokemonTypes';

import { GraphPokemonData } from '../types/types';
import { spritesHandler } from '../utils/spritesHandler';
import { capitalizeName } from '../utils/capitalizeName';
import { pokemonColor } from '../utils/pokemon-colors';

interface PokemonCardProps {
    item: GraphPokemonData;
}

const PokemonCard: FC<PokemonCardProps> = ({ item }) => {

    return (
        <Link to={`/pokemon/${item.name}`} > 
            <div className={`group shadow-md relative bg-gray-100 dark:bg-[#1E2022] rounded-lg cursor-pointer hover:bg-gray-200 
                dark:hover:bg-zinc-800 bg-opacity-70 mb-5 hover:bg-[url('../assets/pokeballBg.svg')] bg-no-repeat bg-contain
                dark:hover:bg-[url('../assets/pokeballBgDark.svg')]`}>
                <p className="text-center absolute text-gray-300 dark:text-gray-100 m-3 text-2xl opacity-80">
                    #{item.id}
                </p>
                <div className='flex flex-col items-center justify-center pb-5 w-full px-5'>
                    <img
                        className='flex justify-center mt-8 group-hover:animate-[wiggle_1s_ease-in-out_infinite]'      
                        src={spritesHandler(item)} 
                        alt={`${item.name} image`} 
                        width={130}
                        height={130}
                    />
                    <h1 
                        className='text-gray-500 dark:text-gray-100 font-semibold text-2xl mb-2'
                        style={{color: pokemonColor(item.pokemon_v2_pokemoncolor.name)}}
                    >
                        {capitalizeName(item.name)}
                    </h1>
                    <PokemonTypes types={item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes} />
                </div>
            </div>
        </Link>
    );
}

export default PokemonCard;