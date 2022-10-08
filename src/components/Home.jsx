import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { TbPokeball } from "react-icons/tb";

import pokeball from '../assets/pokeball.png'

const Home = () => {

    const [name, setName] = React.useState("");

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

    const handleSubmit = (event) => {
      event.preventDefault();
      const queryData = graphql`
      {
        pokemon(name: {eq: "pikachu"}) {
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
    `   
      console.log("pokedata", queryData.pokemon)
    }
          
    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    return (
      <>
      <div className='flex h-32 items-center justify-center space-x-3 bg-red-500'>
        <img 
          className='h-20'
          src={pokeball} 
          alt="pokeball image" 
        />
        <div className='flex text-yellow-500 text-3xl font-bold'>PokeList</div>
      </div>

      <form onSubmit={handleSubmit}>
          <input 
              className="bg-gray-300 rounded lg:w-80 text-black pl-3 sm:w-60 xs:w-24"
              type="search"
              onChange={handleChange} 
          />
          <button type="submit">search</button>
      </form> 

      <div className='grid grid-cols-9 mt-5'>
        {query.allPokemon.nodes.slice(0, 27).map((item) => (
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
        ))}
      </div>
      </>
    )
}


export default Home;