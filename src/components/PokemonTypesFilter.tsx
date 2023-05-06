import React, { FC } from 'react'
import { types } from '../utils/pokemon-types'
import { typeColor } from '../utils/types-colors'

interface PokemonTypesFilterProps {
    handleClick: (arg0: string) => void;
}

const PokemonTypesFilter: FC<PokemonTypesFilterProps> = ({ handleClick }) => {
    return (
        <div className='flex flex-col my-5 space-y-2'>
            <button 
                className="w-full text-gray-700 dark:text-gray-100 text-sm text-center text-bold rounded-full px-3 py-1 text-lg 
                hover:opacity-50 mr-2 border-2 dark:border-gray-800 cursor-pointer w-ful" 
                onClick={() => handleClick("all")}
            >
                all
            </button>
            {types.map((item) => (
                <button 
                    key={item.id} 
                    className={`p-2 rounded-full shadow-sm flex hover:shadow-lg hover:shadow-[${item.bg}] cursor-pointer`} 
                    style={{backgroundColor: `${typeColor(item.name)}`}}
                    onClick={() => handleClick(item.name)}
                >
                    <img 
                        className='h-5 w-5'
                        src={item.image}
                        onClick={() => handleClick(item.name)}
                        alt={`${item.name} icon`}
                    />
                    <p className='w-full text-white ml-2 text-sm pr-1'>{item.name}</p>
                </button>
            ))}
        </div>
    );
}

export default PokemonTypesFilter;
