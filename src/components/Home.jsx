import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

    return (
      <>
      <div className='flex h-32 items-center justify-center space-x-3'>
        <img 
          className='h-20'
          src={pokeball} 
          alt="pokeball image" 
        />
        <div className='flex text-yellow-500 text-3xl'>PokeList</div>
      </div>
      <div className='grid grid-cols-9'>
        {query.allPokemon.nodes.map((item) => (
            <div>
                <h1>{item.name}</h1>
                <img src={item.image} alt={`${item.name} image`} />
            </div>
        ))}
      </div>
      </>
    )
}


export default Home;