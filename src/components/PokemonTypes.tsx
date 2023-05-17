import React, { FC, MouseEventHandler } from 'react'

import { typeColor } from '../utils/types-colors'

import { PokemonV2Type } from '../types/types';

interface PokemonTypesProps {
    types: PokemonV2Type[];
}

const PokemonTypes: FC<PokemonTypesProps> = ({ types }) => {
    return (
        <div className="flex space-x-2">
            {types.map((item, index) => (
                <p 
                    key={item.pokemon_v2_type.name+index}
                    className={`text-white text-sm text-center opacity-80 rounded-md px-2`} 
                    style={{backgroundColor: `${typeColor(item.pokemon_v2_type.name)}`}}
                >
                    <span className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'>{item.pokemon_v2_type.name}</span>
                </p>
            ))}
        </div>
    );
}

export default PokemonTypes;