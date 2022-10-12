import { navigate } from 'gatsby';
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import PokemonCard from './Pokemon-card';
import pokeball from '../assets/pokeball.png'

const Home = () => {
  const [filteredData, setFilteredData] = React.useState([]);
  
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
   
    const handleChange = (event) => {
        event.preventDefault();
        const pokeName = event.target.value;
        const filtered = query.allPokemon.nodes.filter(item => {
          return item.name.includes(pokeName);
        })
          setFilteredData(filtered);
    }
    
    return (
      <>
        <div className='flex h-32 items-center justify-center space-x-3 bg-red-500'>
          <img 
            className='h-20'
            src={pokeball} 
            alt="pokeball image" 
          />
          <div className='flex text-yellow-300 text-3xl font-bold'>PokeList</div>
        </div>
        <div className='flex h-10 items-center justify-end space-x-6 mr-5'>
          <button className='text-yellow-400'>Gen1</button>
          <button className='text-yellow-400'>Gen2</button>
          <button className='text-yellow-400'>Gen3</button>
        </div>

        <form className='flex justify-center p-5'>
            <input 
                className="bg-gray-200 rounded lg:w-80 text-black pl-3 sm:w-60 xs:w-24"
                aria-label="Search"
                onChange={handleChange} 
                placeholder="search a pokemon"
            />          
            {/* <button type="submit">search</button> */}
        </form> 
        
        <div className='grid grid-cols-9 mt-5 place-items-center'>
          {filteredData.length > 0 ? filteredData.map((item) => (
            <PokemonCard key={item.name} item={item}/>        
          )) :
          query.allPokemon.nodes.map((item) => (
            <PokemonCard key={item.name} item={item}/> 
          ))         
        }
        </div>
      </>
    )
}


export default Home;