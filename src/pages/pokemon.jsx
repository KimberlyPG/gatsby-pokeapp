import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

import PokemonStats from "../components/Pokemon-stats";

import { typeColor } from "../utils/types-colors";

import axios from "axios";
import { siteMetadata } from "../../gatsby-config";

const Pokemon = ({ location }) => {
    const { state = {} } = location
    const [data, setData] = useState();
    
    useEffect(() => {
        const getPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${state.data.name}`,
            ).then(console.log("res", response))
            
            setData(response)
            getPokemonData(); 
        }
    }, [])

    console.log("data", data)
    console.log("state", state.data.types)

    return (
        <>
        <div className='grid bg-sky-900 h-10 items-center border-b place-items-end'>
            <button className="text-white mr-5" onClick={() => navigate('/')}>Home</button>
        </div>
        <h3 className="flex text-gray-600 text-2xl justify-center pt-5 font-semibold">{state.data.name}</h3>
        <div className="flex justify-center p-5">
            <div className="grid w-60 h-full border rounded place-content-center p-5 bg-gray-100">
                <img
                    className="border rounded w-32" 
                    src={state.data.image} 
                    alt="pokemon image" 
                />
                <PokemonStats stats={state.data.stats} />
            </div>
            <div className="border w-96">
                <h3 className="text-gray-600 text-sm m-2">Type</h3>
                {state.data.types.map((item) => (
                    <p className="rounded-lg text-white w-20 text-center m-2" style={{backgroundColor: `${typeColor(item)}`}}>{item}</p>
                ))}
            </div>
        </div>
        </>
    )
}

export default Pokemon;
