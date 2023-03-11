import React, { FC } from 'react'
import { Link } from 'gatsby';

import PokemonTypes from '../../components/PokemonTypes';
import { ResultsLocation } from '../../types/types';

interface Name {
    name: string;
}

interface ResultsProps {
    location: ResultsLocation;
    params: Name;
}

const Results: FC<ResultsProps> = ({ location, params }) => {
    const { state } = location;
    const pokemonName = params.name;

    return (
        <div className='mt-10'>
            <h2 className='flex justify-center text-2xl text-gray-600'>
                Results of 
                <span className='text-orange-600'>&nbsp;{pokemonName}</span>
            </h2>
            {state[0].length > 0 ? (
                state[0].map((item) => (
                    <Link to={`/pokemon/${item.name}`}>
                        <div key={item.id} className='flex w-96 bg-gray-100 hover:bg-gray-300 rounded-2xl mx-auto items-center my-10'>
                            <img
                                className='flex justify-center'               
                                src={item.image} 
                                alt={`${item.name} image`} 
                            />
                            <div className='flex flex-col space-y-4'>
                                <h1 className='text-gray-500 text-xl'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
                                <PokemonTypes types={item.types} parent="pokemon" handleClick={() => null} />
                            </div>
                        </div>
                    </Link>
                ))
            ):(
                <p className='flex justify-center text-gray-600 text-xl mt-10'>0 results found</p>
            ) 
            }
        </div>
    )
}

export default Results;