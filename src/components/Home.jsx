import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { TbPokeball } from "react-icons/tb";

import pokeball from '../assets/pokeball.png'

const Home = () => {
  
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
    console.log("query", query)

    const [filteredData, setFilteredData] = React.useState([]);
    
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

      <form className='flex justify-center p-5'>
          <input 
              className="bg-gray-200 rounded lg:w-80 text-black pl-3 sm:w-60 xs:w-24"
              aria-label="Search"
              onChange={handleChange} 
              placeholder="search a pokemon"
          />          
          {/* <button type="submit">search</button> */}
      </form> 
      {/* <div className='h-20'>
      {filteredData.length > 0 ? filteredData.map((item) => (
        <div>
            <img
              className='flex justify-center'               
              src={item.image} 
              alt={`${item.name} image`} 
            />
            <h1 className='text-gray-500'>{item.name}</h1>
        </div>
        )): <h1>No results</h1>}  
      </div> */}
      <div className='grid grid-cols-9 mt-5'>
        {filteredData.length > 0 ? filteredData.map((item) => (
            <div>
              <div className='grid bg-gray-100 h-36 w-36 rounded-lg place-items-center cursor-pointer hover:bg-gray-200 mb-5'>
                <TbPokeball className='grid text-gray-400' />
                <img
                  className='flex justify-center'               
                  src={item.image} 
                  alt={`${item.name} image`} 
                />
                <h1 className='text-gray-500'>{item.name}</h1>
              </div>
            </div>
        )) :
        query.allPokemon.nodes.map((item) => (
          <div>
            <div className='grid bg-gray-100 h-36 w-36 rounded-lg place-items-center cursor-pointer hover:bg-gray-200 mb-5'>
              <TbPokeball className='grid text-gray-400' />
              <img
                className='flex justify-center'               
                src={item.image} 
                alt={`${item.name} image`} 
              />
              <h1 className='text-gray-500'>{item.name}</h1>
            </div>
          </div>
      ))         
      }
      </div>
      </>
    )
}


export default Home;