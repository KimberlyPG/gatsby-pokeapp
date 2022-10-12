import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

import PokemonStats from "../components/Pokemon-stats";

import { typeColor } from "../utils/types-colors";
import axios from "axios";

const Pokemon = ({ location }) => {
    const { state = {} } = location
    const [data, setData] = useState('');
    const [pokemonDescription, setPokemonDescription] = useState('');

    const sprites_dreamWorld = data?.sprites?.other.dream_world.front_default;
    const sprites_home = data?.sprites?.other.home.front_default;
 
    useEffect(() => {
        const getPokemonData = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${state.data.name}`)
            .then(res => res.json())
            .then(data => setData(data))
          }
          getPokemonData(); 
    },[])

    useEffect(() => {
        const getPokemonDataDescription = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon-species/${state.data.name}`)
            .then(res => res.json())
            .then(response => setPokemonDescription(response))
          }
          getPokemonDataDescription(); 
    },[])
  
    console.log("pokemonDescription", pokemonDescription)

    return (
        <>
        <div className='grid bg-sky-900 h-10 items-center border-b place-items-end'>
            <button className="text-white mr-5" onClick={() => navigate('/')}>Home</button>
        </div>
        <h3 className="flex text-gray-600 text-2xl justify-center pt-5 font-semibold">{state.data.name}</h3>
        <div className="flex justify-center p-5">
            <div className="grid w-60 h-full border rounded place-content-center p-5 bg-gray-100">
                {sprites_dreamWorld !== null ? (
                    <img
                        className="border rounded w-92 h-92" 
                        src={sprites_dreamWorld} 
                        alt="pokemon image" 
                    />
                ):(
                    <img
                        className="border rounded w-92" 
                        src={sprites_home} 
                        alt="pokemon image" 
                    />
                )
                }
                <PokemonStats stats={state.data.stats} />
            </div>
            <div className="border w-96 p-3">
                <p className="text-sm">{pokemonDescription?.flavor_text_entries?.[0].flavor_text}</p>
                <h3 className="text-gray-600 text-sm mt-2 text-gray-500">Type</h3>
                {state.data.types.map((item) => (
                    <p className="rounded-lg text-white w-20 text-center m-2" style={{backgroundColor: `${typeColor(item)}`}}>{item}</p>
                ))}
            </div>
        </div>
        </>
    )
}

export default Pokemon;
