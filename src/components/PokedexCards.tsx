import React from 'react';

import PokemonCard from './PokemonCard';
import InformationMessage from './InformationMessage';

import { GraphPokemonData } from '../types/types';

const PokedexCards = ({ typeSelected, pokemonList, pokemonTypeFilter}) => {
    return (
        <>
            {typeSelected === "all" ? (
                <div className='mt-5 mr-5 h-fit grid 3xl:grid-cols-9 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 
                    md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 place-items-center'>
                    {pokemonList.map((item: GraphPokemonData) => (
                        <PokemonCard key={item.id} item={item} /> 				
                    ))} 
                </div>

            ):(
                pokemonTypeFilter && pokemonTypeFilter?.length > 0 ? (
                    <div className='mt-5 mr-5 h-fit grid 3xl:grid-cols-9 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 
                        md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 place-items-center'>
                        {pokemonTypeFilter?.map((item: GraphPokemonData) => (
                            <PokemonCard key={item.id} item={item} /> 		
                        ))}
                    </div>		
                        ):(
                            <InformationMessage />
                        )
            )}     
        </>
    );
}

export default PokedexCards;