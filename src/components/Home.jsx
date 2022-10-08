import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
            imageUrl 
          }
        }
      }
    `);

    console.log('data', query);
    return (
      <div>
        {query.allPokemon.nodes.map((item) => (
            <div>
                <h1>{item.name}</h1>
                {/* <img src={item.sprites.back_default} alt="" /> */}
            </div>
        ))}
      </div>
    )
}


export default Home;