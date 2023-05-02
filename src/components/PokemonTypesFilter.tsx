import React from 'react'
import { types } from '../utils/pokemon-types'
import { typeColor } from '../utils/types-colors'

const PokemonTypesFilter = ({ handleClick }) => {
    return (
        <div className='flex flex-col mx-10 mt-5 space-y-2'>
            <button 
                className="text-gray-700 text-sm text-center text-bold rounded-full px-3 py-1 text-lg 
                hover:opacity-50 text-gray-700 mr-2 border-2 cursor-pointer w-ful" 
                onClick={() => handleClick("all")}
            >
                all
            </button>
            {types.map((item) => (
                <button 
                    key={item.id} 
                    className={`group p-2 rounded-full shadow-sm flex hover:shadow-lg hover:shadow-[${item.bg}] cursor-pointer`} 
                    style={{backgroundColor: `${typeColor(item.name)}`}}
                    onClick={() => handleClick(item.name)}
                >
                    <img 
                        className='h-5 w-5'
                        src={item.image}
                        onClick={() => handleClick(item.name)}
                    />
                    <p className='group-hover:flex text-white ml-2 text-sm'>{item.name}</p>
                </button>
            ))}
        </div>
    );
}

export default PokemonTypesFilter;
