import React, { FC } from 'react'
import { Link } from 'gatsby';

import PokemonTypes from '../../components/PokemonTypes';
import { ResultsLocation } from '../../types/types';
import { capitalizeName } from '../../utils/capitalizeName';

interface Name {
    name: string;
}

interface ResultsProps {
    location: ResultsLocation;
    params: Name;
}

const Results: FC<ResultsProps> = ({ location, params }) => {
    const { state } = location;
    const pokemonName = params.name as string;

    return (
        <div className='mt-10 w-screen overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300'>
            <h2 className='flex justify-center text-2xl text-gray-600 dark:text-white '>
                Results of 
                <span className='text-orange-600'>&nbsp;{pokemonName}</span>
            </h2>
            {state && state[0]?.length > 0 ? (
                state[0]?.map((item) => (
                    <Link 
                        key={item.id} 
                        to={`/pokemon/${item?.name}`}
                        className='flex w-96 bg-gray-100 dark:bg-[#1E2022] hover:bg-gray-300 dark:hover:bg-zinc-800 rounded-2xl mx-auto items-center my-10 space-x-3'
                    >
                        <img
                            className='flex justify-center w-[120px]'               
                            src={JSON.parse(item.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites)?.other[`official-artwork`].front_default?.replace("/media", "https://raw.githubusercontent.com/PokeAPI/sprites/master")} 
                            alt={`${item?.name} image`} 
                        />
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-gray-500 text-xl'>{capitalizeName(item?.name)}</h1>
                            <PokemonTypes types={item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes} parent="pokemon" handleClick={() => null} />
                        </div>
                    </Link>    
                ))
            ):(
                <p className='flex justify-center text-gray-600 text-xl mt-10'>0 results found</p>
            )}
        </div>
    )
}

export default Results;