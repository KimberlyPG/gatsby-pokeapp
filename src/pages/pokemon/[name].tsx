import React, { useEffect, useState, FC } from "react";
import { PageProps } from "gatsby";

import PokemonContainer from "../../components/PokemonContainer";
import PokemonStats from "../../components/PokemonStats";
import Evolutions from "../../components/Evolutions";
import PokeballSpinner from '../../components/PokeballSpinner';

import { typeColor } from "../../utils/types-colors";
import { pokemonColor } from "../../utils/pokemon-colors";
import { getPokemonData } from "../../api/getPokemonData";
import { PokemonData, PokemonDescription, Evolution } from "../../types/types";
import { initialPokemonDataValues, initialPokemonDescriptionValues, initialEvolutionChainValues } from "../../initialDataValues/initialDataValues";
import { capitalizeName } from "../../utils/capitalizeName";

interface Name {
    name: string;
}

interface PokemonProps {
    params: Name;
}

const Pokemon = ({ params }: PageProps<PokemonProps>) => {
    const pokemonName = params?.name?.toLowerCase();
    const [data, setData] = useState<PokemonData>(initialPokemonDataValues);
    const [pokemonDescription, setPokemonDescription] = useState<PokemonDescription>(initialPokemonDescriptionValues);
    const [evolutionChain, setEvolutionChain] = useState<Evolution>(initialEvolutionChainValues);

    const sprites_dreamWorld = data?.sprites?.other?.dream_world.front_default;
    const sprites_home = data?.sprites?.other?.home.front_default;
    const description_format = JSON.stringify(pokemonDescription?.flavor_text_entries?.[0].flavor_text)?.toString().replaceAll("\\n", " ").replace("\\f", " ").replace("POKéMON", "pokémon");

    useEffect(() => {
        getPokemonData(pokemonName, "pokemon", setData);
        getPokemonData(pokemonName, "pokemon-species", setPokemonDescription);
    },[pokemonName])

    useEffect(() => {
        const getPokemonEvolutions = async() => {
            await fetch(pokemonDescription?.evolution_chain?.url as string)
            .then(res => res.json())
            .then(data => setEvolutionChain(data))
          }
          getPokemonEvolutions();      
    }, [pokemonDescription])

    if(!data || !pokemonDescription || !evolutionChain) return <PokeballSpinner />
    return (
        <>
            <h3 className="flex w-screen text-gray-600 dark:text-gray-100 text-3xl justify-center pt-5 font-semibold">
                {capitalizeName(pokemonName)} N.°{data?.id}
            </h3>
            <PokemonContainer pokemonDescription={pokemonDescription}>
                <div className="grid w-96 h-full border dark:border-0 rounded place-content-center p-5 bg-gray-100 dark:bg-[#1E2022]">
                    {sprites_dreamWorld !== null ? (
                        <img
                            style={{backgroundColor: `${pokemonColor(pokemonDescription?.color?.name)}`}}
                            className="border rounded mt-10" 
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
                    <PokemonStats stats={data.stats} id={data.id} />
                </div>
                <div className="border dark:border-0 w-96 p-3 bg-gray-100 bg-opacity-60 dark:bg-[#1E2022] dark:bg-opacity-60">
                    <p className="grid text-gray-600 dark:text-white text-lg justify-items-center mt-4">
                        {description_format && JSON.parse(description_format)}
                    </p>
                    <h3 className="text-gray-600 dark:text-gray-100 text-sm mt-5 text-gray-500">Type</h3>
                    <div className="flex">
                        {data?.types?.map((item) => (
                            <p 
                                key={item.type.name+item.slot}
                                className="rounded-lg text-white text-lg w-20 text-center mr-4 mt-3 px-3" 
                                style={{backgroundColor: `${typeColor(item.type.name)}`}}
                            >
                                {item.type.name}
                            </p>
                        ))}
                    </div>
                    <div className="bg-blue-400 rounded-lg mt-5 p-5">
                        <div>
                            <p className="text-blue-800 text-sm ">Weight</p>
                            <p className="text-white text-sm ">{data.weight}</p>
                        </div>
                        <div>
                            <p className="text-blue-800 text-sm">Height</p>
                            <p className="text-white text-sm">{data.height}</p>
                        </div>
                    </div>
                </div>
            </PokemonContainer>
            <Evolutions evolutionChain={evolutionChain} />
        </>
    )
}

export default Pokemon;
