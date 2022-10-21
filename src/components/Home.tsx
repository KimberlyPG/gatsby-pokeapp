import React, {FC, ChangeEvent} from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './Pokemon-card';
import pokeball from '../assets/pokeball.png'
import { TbPokeball } from "react-icons/tb";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export interface HomeProps {
  allPokemon: AllPokemon;
}

export interface AllPokemon {
  nodes: Node[];
  key: string;
  item: Node[];
}

export interface Node {
  name:  string;
  stats: Stats;
  types: PokemonTypes[];
  image: string;
}

export interface Stats {
  attack:          number;
  defense:         number;
  special_attack:  number;
  hp:              number;
  special_defense: number;
  speed:           number;
}

export interface PokemonTypes {
  Bug: string;
  Dark: string;
  Dragon: string;
  Electric: string;
  Fairy: string;
  Fighting: string;
  Fire: string;
  Flying: string;
  Ghost: string;
  Grass: string;
  Ground: string;
  Ice: string;
  Normal: string;
  Poison: string;
  Psychic: string;
  Rock: string;
  Steel: string;
  Water: string;
}


const Home: FC<HomeProps> = () => {
  const [filteredData, setFilteredData] = React.useState<Node[]>([]);
  console.log("filtered", filteredData);
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
        const pokeName = event.target.value;
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
                <li className='flex items-center'>
                      <img
                        className='flex justify-center w-12'               
                        src={item.image} 
                        alt={`${item.name} image`} 
                    />
                    <h1 className='text-gray-500'>{item.name}</h1>
                </li>
              ))}
          </ul>           
        </div>
      
        <div className='flex justify-end items-center pr-10 space-x-2'>
          <p className='text-gray-400 text-xl'>Generations</p>
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" className='w-32'
           />        
        </div>
        <div className='grid grid-cols-9 mt-5 place-items-center'>
          {query.allPokemon.nodes.map((item: Node) => (
            <PokemonCard key={item.name} item={item}/> 
          ))         
        }
        </div>
      </>
    )
}


export default Home;