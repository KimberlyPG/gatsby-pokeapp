import React, { FC } from 'react';

import PokemonCard from './PokemonCard';
import InformationMessage from './InformationMessage';

import { GraphPokemonData } from '../types/types';

interface PokedexCardsProps {
    typeSelected: string;
    pokemonList: GraphPokemonData[];
    pokemonTypeFilter: GraphPokemonData[] | undefined;
}

const PokedexCards: FC<PokedexCardsProps> = ({ typeSelected, pokemonList, pokemonTypeFilter}) => {
    return (
        <>
            {typeSelected === "all" ? (
                <div className='mt-5 mx-auto w-fit h-fit grid 3xl:grid-cols-9 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 
                    md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 place-items-center gap-4'>
                    {pokemonList.map((item: GraphPokemonData) => (
                        <PokemonCard key={item.id} item={item} /> 				
                    ))} 
                </div>

            ):(
                pokemonTypeFilter && pokemonTypeFilter?.length > 0 ? (
                    <div className='mt-5 mx-auto w-fit h-fit grid 3xl:grid-cols-9 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 
                        md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 place-items-center gap-4'>
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
