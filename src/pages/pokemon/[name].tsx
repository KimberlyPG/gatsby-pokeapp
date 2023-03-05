import React, { useEffect, useState, FC } from "react";
import { PageProps } from "gatsby";

import PokemonContainer from "../../components/PokemonContainer";
import PokemonStats from "../../components/PokemonStats";

import { typeColor } from "../../utils/types-colors";
import { pokemonColor } from "../../utils/pokemon-colors";
import { getPokemonData } from "../../api/getPokemonData";
import { PokemonData, PokemonDescription } from "../../types/types";

interface Name {
    name: string;
}

interface PokemonProps {
    params: Name;
}

const Pokemon = ({ params }: PageProps<PokemonProps>) => {
    const pokemonName = params.name;
    const [data, setData] = useState<PokemonData>({
        sprites: {
            other: {
                dream_world: {
                    front_default: "",
                },
                home: {
                    front_default: "",
                },
            }
        },
        stats: [],
        types: [],
    });
    const [pokemonDescription, setPokemonDescription] = useState<PokemonDescription>({
        color: {
            name: "",
            url:  "",
        },
        flavor_text_entries: [
            { 
                flavor_text: "",
            }
        ],
    });
    const [evolution, setEvolution] = useState([]);

    const sprites_dreamWorld = data?.sprites?.other?.dream_world.front_default;
    const sprites_home = data?.sprites?.other?.home.front_default;
    const description_format = JSON.stringify(pokemonDescription?.flavor_text_entries?.[0].flavor_text)?.toString().replaceAll("\\n", " ").replace("\\f", " ").replace("POKéMON", "pokémon");

    useEffect(() => {
        getPokemonData(pokemonName, "pokemon", setData);
        getPokemonData(pokemonName, "pokemon-species", setPokemonDescription);
    },[pokemonName])

    useEffect(() => {
        const getPokemonEvolutions = async() => {
            await fetch(pokemonDescription?.evolution_chain?.url)
            .then(res => res.json())
            .then(data => setEvolution(data))
          }
          getPokemonEvolutions();      
    }, [pokemonDescription])

    console.log("des", pokemonDescription)
    console.log("evo", evolution)
    console.log("data", data.sprites)

    return (
        <>
            <h3 className="flex text-gray-600 text-3xl justify-center pt-5 font-semibold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} N.°{data?.id}</h3>
            <PokemonContainer pokemonDescription={pokemonDescription}>
                <div className="grid w-96 h-full border rounded place-content-center p-5 bg-gray-100">
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
                    <PokemonStats stats={data.stats} />
                </div>
                <div className="border w-96 p-3 bg-gray-100 bg-gray-100 bg-opacity-60">
                    <p className="grid text-gray-600 text-lg justify-items-center mt-4">{description_format && JSON.parse(description_format)}</p>
                    <h3 className="text-gray-600 text-sm mt-5 text-gray-500">Type</h3>
                    <div className="flex">
                        {data?.types?.map((item) => (
                            <p 
                                className="rounded-lg text-white text-lg  w-20 text-center mr-4 mt-3 px-3" 
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

            <div className="justify-center w-2/4 mt-4 mx-auto">
            <p className="flex justify-center text-gray-800 font-semibold w-32 p-1 text-lg">Evolutions</p> 
                <div className="flex space-x-16 py-10 px-20 items-center bg-gray-200 bg-opacity-70 mb-5 rounded-tr-2xl rounded-bl-2xl">
                    {evolution.chain &&
                        <div>
                            <div className="rounded-full p-4"
                                style={{
                                    backgroundImage:`
                                    url(https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg)`,
                                    backgroundSize: 'contain', 
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                }}  
                            >
                                <img 
                                    className="w-48"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.chain.species.url.slice(42, -1)}.png`} 
                                    alt="" 
                                />
                            </div>
                            <p className="flex text-gray-700 text-xl justify-center">
                                {evolution.chain.species.name.charAt(0).toUpperCase() + evolution.chain.species.name.slice(1)}
                            </p>
                        </div>
                    }
                    <div className="flex flex-col">
                        {evolution?.chain?.evolves_to?.map((item) => (
                            <div className="flex flex-row space-x-16">
                                <div>
                                    <div className="rounded-lg p-4"
                                        style={{
                                            backgroundImage:`
                                            url(https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg)`,
                                            backgroundSize: 'contain', 
                                            backgroundPosition: 'center center',
                                            backgroundRepeat: 'no-repeat',
                                        }}                             
                                    >
                                        <img 
                                            className="w-48"
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.species.url.slice(42, -1)}.png`} 
                                            alt="" 
                                        />
                                    </div>
                                    <p className="flex text-gray-700 text-xl justify-center">
                                        {item.species.name.charAt(0).toUpperCase() + item.species.name.slice(1)}
                                    </p>
                                </div>
                                {item.evolves_to?.map((element) => (
                                    <div>
                                        <div className="rounded-full p-4"
                                            style={{
                                                backgroundImage:`
                                                url(https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg)`,
                                                backgroundSize: 'contain', 
                                                backgroundPosition: 'center center',
                                                backgroundRepeat: 'no-repeat',
                                            }}  
                                        >                                   
                                            <img 
                                                className="w-48"
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.species.url.slice(42, -1)}.png`} 
                                                alt="" 
                                                />
                                        </div>
                                        <p className="flex text-gray-700 text-xl justify-center">
                                            {item.species.name.charAt(0).toUpperCase() + item.species.name.slice(1)}
                                        </p>
                                    </div>
                                ))} 
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon;
