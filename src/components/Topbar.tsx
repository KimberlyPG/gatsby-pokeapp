import React, {FC, ChangeEvent, useContext} from 'react';

import SearchResults from './SearchResults';

import pokeball from '../assets/pokeball.png'
import { Node } from '../types/types';
import { HomeProps } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';

interface TopbarProps {
    query: HomeProps;
}

const Topbar: FC<TopbarProps> = () => {
    const { allPokemon } = useContext(PokemonContext);

    const [filteredData, setFilteredData] = React.useState<Node[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = event.target.value.toLowerCase();
        const filtered = allPokemon.nodes.filter((item: Node) => {
            if(pokeName !== '') return item.name.includes(pokeName);
        })
            setFilteredData(filtered);
    }

  return (
    <div className='flex h-17 items-center bg-cyan-700'>
        <div className='flex justify-center items-center space-x-3 ml-6'>
            <img 
                className='h-12'
                src={pokeball} 
                alt="pokeball image" 
            />
            <div className='flex text-white text-3xl font-bold'>Pokedex</div>
        </div>
        <div className='flex justify-center w-full'>
            <form className='flex flex-row justify-center p-5'>
                <input 
                    className="bg-gray-200 rounded lg:w-80 text-black pl-3 sm:w-60 xs:w-24 outline-0"
                    aria-label="Search"
                    onChange={handleChange} 
                    placeholder="search a pokemon"
                /> 
            </form> 
            {filteredData.length > 0 &&
                <ul className='bg-white border w-80 max-h-40 overflow-y-scroll scrollbar-hide rounded-lg absolute mt-11'>
                    {filteredData.map((item) => (
                        <SearchResults key={item.name} item={item} />
                    ))}
            </ul>  
            }         
        </div>
    </div>
  )
}

export default Topbar