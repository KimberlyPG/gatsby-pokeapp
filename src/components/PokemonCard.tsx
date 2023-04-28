import React, {FC} from 'react';
import { Link } from "gatsby";

import { Node } from '../types/types';
import PokemonTypes from './PokemonTypes';

interface PokemonCardProps {
    item: Node;
}

const PokemonCard: FC<PokemonCardProps> = ({ item }) => {
    return (
        <Link to={`/pokemon/${item.name}`} > 
            <div className='shadow-md relative bg-gray-100 w-40 rounded-lg cursor-pointer hover:bg-gray-200 bg-opacity-70 mb-5'>
                <p className="text-center absolute text-gray-300 m-3 text-2xl opacity-80">
                    #{item.national_number}
                </p>
                <div className='grid place-items-center pb-5'>
                    <img
                        className='flex justify-center mt-8'               
                        src={item.sprites.normal}
                        alt={`${item.name} image`} 
                    />
                    <h1 className='text-gray-500 text-lg'>{item.name}</h1>
                    <PokemonTypes types={item.type} parent="PokemonCard" handleClick={() => null} />
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard;