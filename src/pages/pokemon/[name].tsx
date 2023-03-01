import React, { useEffect, useState, FC } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { navigate } from "gatsby";
import { PageProps } from "gatsby";

import PokemonStats from "../../components/PokemonStats";

import { typeColor } from "../../utils/types-colors";
import { pokemonColor } from "../../utils/pokemon-colors";
import { PokemonData, PokemonDescription } from "../../types";

interface Name {
    name: string;
}

interface PokemonProps {
    params: Name;
}

const Pokemon = ({ params }: PageProps<PokemonProps>) => {
    const pokemonName = params.name;
    const [data, setData] = useState<PokemonData>({});
    const [pokemonDescription, setPokemonDescription] = useState<PokemonDescription>({});

    const sprites_dreamWorld = data?.sprites?.other?.dream_world.front_default;
    const sprites_home = data?.sprites?.other?.home.front_default;
    const description_format = JSON.stringify(pokemonDescription?.flavor_text_entries?.[0].flavor_text)?.toString().replaceAll("\\n", " ").replace("\\f", " ").replace("POKéMON", "pokémon");

    useEffect(() => {
        const getPokemonData = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(data => setData(data))
          }
          getPokemonData(); 
    },[])

    useEffect(() => {
        const getPokemonDataDescription = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
            .then(res => res.json())
            .then(response => setPokemonDescription(response))
          }
          getPokemonDataDescription(); 
    },[])

    return (
        <>
            <div className="flex bg-blue-500 ml-10 mt-10 w-24 text-white justify-center items-center p-2 rounded-xl space-x-2 cursor-pointer">
                <IoIosArrowDropleftCircle  className="text-xl"/>
                <button className="font-bold" onClick={() => navigate('/')}>Home</button>
            </div>
            <h3 className="flex text-gray-600 text-3xl justify-center pt-5 font-semibold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} N.°{data?.id}</h3>
            <div className="flex justify-center p-5">
                <div className="grid w-96 h-full border rounded place-content-center p-5 bg-gray-100">
                    {sprites_dreamWorld !== null ? (
                        <img
                            style={{backgroundColor: `${pokemonColor(pokemonDescription?.color?.name)}`}}
                            className="border rounded bg-gray-200" 
                            src={sprites_dreamWorld} 
                            alt="pokemon image" 
                        />
                    ):(
                        <img
                            className="border rounded" 
                            src={sprites_home} 
                            alt="pokemon image" 
                        />
                    )
                    }
                    <PokemonStats stats={data.stats} />
                </div>
                <div className="border w-96 p-3">
                    <p className="grid text-gray-600 justify-items-center">{description_format && JSON.parse(description_format)}</p>
                    <h3 className="text-gray-600 text-sm mt-5 text-gray-500">Type</h3>
                    <div className="flex">
                        {data?.types?.map((item) => (
                            <p className="rounded-lg text-white w-20 text-center m-2" style={{backgroundColor: `${typeColor(item.type.name)}`}}>
                                {item.type.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon;
