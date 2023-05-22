import React, { FC, useContext } from 'react'
import { types } from '../utils/pokemon-types'
import { typeColor } from '../utils/types-colors'
import { ToggleTypesMenu } from './ToggleTypesMenu';
import { ToggleMenuContext } from '../context/toggleMenu.context';

interface PokemonTypesFilterProps {
    handleClick: (arg0: string) => void;
}

const PokemonTypesFilter: FC<PokemonTypesFilterProps> = ({ handleClick }) => {
    const { show } = useContext(ToggleMenuContext);
    
    return (
        <div className={`h-full sm:mx-5 text-sm xs:sticky xs:top-0 overflow-y-scroll scrollbar-hide sm:relative sm:z-0 sm:mt-0 sm:bg-transparent px-5
            ${show ? "xxs:relative xxs:z-0 xxs:bg-transparent":
            "xxs:bg-gray-200 xxs:dark:bg-[#181a1b] xxs:bg-opacity-85 xxs:shadow-2xl xs:shadow-none xs:bg-transparent dark:xs:bg-transparent"}`}>
            <div className='flex flex-col my-5 space-y-2'>
                <ToggleTypesMenu />
                <button 
                    className={`w-full py-1 text-gray-700 dark:text-gray-100 sm:text-sm text-center text-bold rounded-full px-3 py-1 hover:opacity-50 
                        mr-2 border-2 dark:border-gray-800 cursor-pointer font-semibold ${!show && "border border-gray-300"}`} 
                    onClick={() => handleClick("all")}
                >
                    all
                </button>
                {types.map((item) => (
                    <button 
                        key={item.id} 
                        className={`w-full p-2 py-1 group rounded-full shadow-sm flex hover:shadow-lg cursor-pointer hover:opacity-80 `} 
                        style={{backgroundColor: `${typeColor(item.name)}`}}
                        onClick={() => handleClick(item.name)}
                    >
                        <img 
                            className='w-5 h-5 group-hover:animate-spin'
                            src={item.image}
                            onClick={() => handleClick(item.name)}
                            alt={`${item.name} icon`}
                        />
                        <p className={`text-white xxs:ml-4 sm:ml-2 text-sm xxs:mr-14 lg:mr-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] 
                            ${show ? "xxs:hidden sm:flex": "flex"}`} >
                            {item.name}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PokemonTypesFilter;
