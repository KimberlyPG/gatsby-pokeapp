import React, {FC, ChangeEvent} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { graphql, useStaticQuery } from 'gatsby'

import SearchResults from './Search-results';

import PokemonCard from './Pokemon-card';
import pokeball from '../assets/pokeball.png'
import { HomeProps } from '../types';
import { Node } from '../types';

const Home: FC<HomeProps> = () => {
  const [filteredData, setFilteredData] = React.useState<Node[]>([]);

  const query =  useStaticQuery(graphql`
  query HomeQuery { 
    allPokemon {
      nodes {
        name
        stats {
          attack
          defense
          special_attack
          hp
          special_defense
          speed
            }
            types
            image
          }
        }
      }
    `);

    const options = [
      'I', 'II', 'III'
    ];
    const defaultOption = options[0];
   
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = event.target.value.toLowerCase();
        const filtered = query.allPokemon.nodes.filter((item: Node) => {
          if(pokeName !== '') return item.name.includes(pokeName);
        })
          setFilteredData(filtered);
    }
    
    return (
      <>
        <div className='flex h-24 items-center justify-center space-x-3 bg-cyan-700'>
          <img 
            className='h-12'
            src={pokeball} 
            alt="pokeball image" 
          />
          <div className='flex text-white text-3xl font-bold'>Pokedex</div>
        </div>

        <div className='flex flex-col items-center'>
          <form className='flex flex-row justify-center p-5'>
              <input 
                  className="bg-gray-200 rounded lg:w-80 text-black pl-3 sm:w-60 xs:w-24 outline-0"
                  aria-label="Search"
                  onChange={handleChange} 
                  placeholder="search a pokemon"
              /> 
          </form> 
          <ul className='bg-white border w-80 max-h-40 overflow-y-scroll scrollbar-hide rounded-lg absolute mt-11'>
              {filteredData.map((item) => (
                <SearchResults key={item.name} item={item} />
              ))}
          </ul>           
        </div>
      
        <div className='flex justify-end items-center pr-10 space-x-2'>
          <p className='text-gray-400 text-xl'>Generations</p>
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" className='w-32' />        
        </div>
        <div className='grid grid-cols-11 mt-5 place-items-center'>
          {query.allPokemon.nodes.map((item: Node) => (
            <PokemonCard key={item.name} item={item} /> 
          ))         
        }
        </div>
      </>
    )
}


export default Home;