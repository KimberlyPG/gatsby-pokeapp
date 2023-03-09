import React, { FC, MouseEventHandler } from 'react'

import { typeColor } from '../utils/types-colors'
import { PokemonTypes as Types } from '../types/types'

interface PokemonTypesProps {
    types: Types[];
    parent: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const PokemonTypes: FC<PokemonTypesProps> = ({ types, parent, handleClick }) => {

    return (
        <>
            <div className="flex space-x-2">
                {parent === "PokemonList" ? (
                    types.map((item) => (
                        <button 
                            className={`text-white text-sm text-center rounded-lg px-3 py-1 text-lg border-2 hover:opacity-50 `} 
                            style={{backgroundColor: `${typeColor(item)}`}}
                            value={item}
                            onClick={handleClick}
                        >
                            {item}
                        </button>
                    ))
                ):(
                    types.map((item) => (
                        <p 
                            className={`text-white text-sm text-center opacity-80 rounded-lg px-2`} 
                            style={{backgroundColor: `${typeColor(item)}`}}
                        >
                            {item}
                        </p>
                    ))
                )}
            </div>
        </>
    )
}

export default PokemonTypes