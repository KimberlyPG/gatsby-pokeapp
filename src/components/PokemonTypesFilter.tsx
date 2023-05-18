import React, { FC } from 'react'
import { types } from '../utils/pokemon-types'
import { typeColor } from '../utils/types-colors'

interface PokemonTypesFilterProps {
    handleClick: (arg0: string) => void;
}

const PokemonTypesFilter: FC<PokemonTypesFilterProps> = ({ handleClick }) => {
    return (
        <div className='h-full mx-5 sticky top-0 overflow-y-scroll scrollbar-hide'>
            <div className='flex flex-col my-5 space-y-2'>
                <button 
                    className="w-full text-gray-700 dark:text-gray-100 text-sm text-center text-bold rounded-full px-3 py-1 text-lg 
                    hover:opacity-50 mr-2 border-2 dark:border-gray-800 cursor-pointer font-semibold" 
                    onClick={() => handleClick("all")}
                >
                    all
                </button>
                {types.map((item) => (
                    <button 
                        key={item.id} 
                        className={`group p-2 rounded-full shadow-sm flex hover:shadow-lg cursor-pointer w-full xs:mr-10 sm:mr-0 hover:opacity-80`} 
                        style={{backgroundColor: `${typeColor(item.name)}`}}
                        onClick={() => handleClick(item.name)}
                    >
                        <img 
                            className='h-5 w-5 group-hover:animate-spin'
                            src={item.image}
                            onClick={() => handleClick(item.name)}
                            alt={`${item.name} icon`}
                        />
                        <p className='w-fit text-white ml-2 text-sm pr-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>
                            {item.name}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PokemonTypesFilter;
