import React, { ChangeEvent, FormEvent, useContext, useState} from 'react';
import { Link, navigate } from 'gatsby';

import SearchResults from './SearchResults';

import pokeball from '../assets/pokeballTransparent.jpg'
import { Node } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';

const Topbar = () => {
    const { allPokemon } = useContext(PokemonContext);

    const [filteredData, setFilteredData] = React.useState<Node[]>([]);
    const [name, setName] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.target.value.toLowerCase());
        const pokeName = event.target.value.toLowerCase();
        const filtered = allPokemon.nodes.filter((item: Node) => {
            if(pokeName !== '') return item.name.includes(pokeName);
        })
            setFilteredData(filtered);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        navigate(`/search/${name}`, { state: [filteredData] })
    }

    return (
        <div className='flex h-14 items-center shadow-md'>
            <Link to="/">
                <div className='flex justify-center items-center space-x-3 ml-6'>
                    <img 
                        className='h-6'
                        src={pokeball} 
                        alt="pokeball image" 
                    />
                    <div className='flex text-gray-700 text-xl font-bold'>Pokedex</div>
                </div>
            </Link>
            <div className='flex justify-center w-full'>
                <form className='flex flex-row justify-center p-5' onSubmit={handleSubmit}>
                    <input 
                        className="shadow-sm bg-gray-200 rounded-lg lg:w-80 text-black pl-3 sm:w-60 xs:w-24 outline-0"
                        aria-label="Search"
                        onChange={handleChange} 
                        placeholder="Search a pokemon..."
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