import React, { FC } from 'react';
import { Link } from "gatsby";

import { Node } from '../types/types';
import PokemonTypes from './PokemonTypes';

interface PokemonCardProps {
    item: Node;
}

const PokemonCard: FC<PokemonCardProps> = ({ item }) => {

    const replaceImage = (error) => {
        const image = item.sprites.normal;
        if(image.indexOf("♀") !== -1 || image.indexOf("♂") !== -1) {
            const newImage = image.replace("♀", "-m").replace("♂", "-f")
            error.target.src = newImage; 
        } else if(item.sprites.normal.indexOf("'") !== -1){
            const newImage = image.replace("'", "");
            error.target.src = newImage; 
        } 
    }
    return (
        <Link to={`/pokemon/${item.name}`} > 
            <div className='shadow-md relative bg-gray-100 dark:bg-[#1E2022] w-40 rounded-lg cursor-pointer 
            hover:bg-gray-200 dark:hover:bg-zinc-800 bg-opacity-70 mb-5 '>
                <p className="text-center absolute text-gray-300 dark:text-gray-100 m-3 text-2xl opacity-80">
                    #{item.national_number}
                </p>
                <div className='grid place-items-center pb-5'>
                    <img
                        className='flex justify-center mt-8 w-fit h-fit'      
                        srcSet={`${item.sprites.normal} 1x`}         
                        src={item.sprites.normal}
                        alt={`${item.name} image`} 
                    />
                    <h1 className='text-gray-500 dark:text-gray-100 text-lg font-semibold'>{item.name}</h1>
                    <PokemonTypes 
                        types={item.type} 
                        parent="PokemonCard" 
                        handleClick={() => null} 
                    />
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard;