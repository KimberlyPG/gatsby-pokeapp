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
                    className={`text-white text-sm text-center opacity-80 rounded-lg px-2 border font-semibold`} 
                    style={{borderColor: `${typeColor(item.pokemon_v2_type.name)}`, color: `${typeColor(item.pokemon_v2_type.name)}`}}
                >
                    <span>{item.pokemon_v2_type.name}</span>
                </p>
            ))}
        </div>
    );
}

export default PokemonTypes;