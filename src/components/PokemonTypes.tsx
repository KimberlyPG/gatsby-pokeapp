import React, { FC } from 'react'

import { typeColor } from '../utils/types-colors'
import { PokemonTypes as Types } from '../types/types'
import { Node } from '../types/types'

interface PokemonTypesProps {
    types: Types[];
}

const PokemonTypes: FC<PokemonTypesProps> = ({ types }) => {
    return (
        <>
            <div className="flex space-x-2">
                {types.map((item) => (
                    <p 
                        className="rounded-lg text-white text-sm text-center px-2" 
                        style={{backgroundColor: `${typeColor(item)}`, opacity: 0.7}}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </>
    )
}

export default PokemonTypes