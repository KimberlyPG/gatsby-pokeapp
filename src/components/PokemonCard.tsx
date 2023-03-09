import React, {FC} from 'react'
import { TbPokeball } from "react-icons/tb";
import { Link } from "gatsby"
import { Node } from '../types/types';
import PokemonTypes from './PokemonTypes';

interface PokemonCardProps {
    item: Node;
}

const PokemonCard: FC<PokemonCardProps> = ({ item }) => {
    return (
        <div>
            <Link to={`/pokemon/${item.name}`} > 
                <div className='bg-gray-100 w-40 rounded-lg cursor-pointer hover:bg-gray-200 bg-opacity-70 mb-5'>
                    <TbPokeball className='text-gray-400 m-1' />
                    <div className='grid place-items-center pb-5'>
                        <img
                            className='flex justify-center'               
                            src={item.image} 
                            alt={`${item.name} image`} 
                        />
                        <h1 className='text-gray-500'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
                        <PokemonTypes types={item.types} parent="PokemonCard" handleClick={() => null} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;