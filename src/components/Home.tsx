import React, {FC, ChangeEvent} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { graphql, useStaticQuery } from 'gatsby'

import SearchResults from './SearchResults';

import PokemonCard from './PokemonCard';
import pokeball from '../assets/pokeball.png'
import { HomeProps } from '../types/types';
import { Node } from '../types/types';

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = event.target.value.toLowerCase();
        const filtered = query.allPokemon.nodes.filter((item: Node) => {
          if(pokeName !== '') return item.name.includes(pokeName);
        })
          setFilteredData(filtered);
    }
	console.log("filtered", filteredData)
    
    return (
      <>
        <div className='flex h-20 items-center bg-cyan-700'>
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

        <div className='grid xl:grid-cols-9 lg:grid-cols-7 sm:grid-cols-5 xs:grid-cols-3 mt-5 place-items-center ml-32 mr-32'>
			{query.allPokemon.nodes.map((item: Node) => (
				<PokemonCard key={item.name} item={item} /> 
			))}
        </div>
      </>
    )
}


export default Home;