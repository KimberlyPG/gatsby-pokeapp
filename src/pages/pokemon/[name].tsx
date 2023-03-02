import React, { useEffect, useState, FC } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { navigate, PageProps } from "gatsby";

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

    const sprites_dreamWorld = data?.sprites?.other?.dream_world.front_default;
    const sprites_home = data?.sprites?.other?.home.front_default;
    const description_format = JSON.stringify(pokemonDescription?.flavor_text_entries?.[0].flavor_text)?.toString().replaceAll("\\n", " ").replace("\\f", " ").replace("POKéMON", "pokémon");

    useEffect(() => {
        getPokemonData(pokemonName, "pokemon", setData);
        getPokemonData(pokemonName, "pokemon-species", setPokemonDescription);
    },[pokemonName])
    console.log("data", data)

    return (
        <>
            <div className="flex bg-blue-500 ml-10 mt-10 w-24 text-white justify-center items-center p-2 rounded-xl space-x-2 cursor-pointer">
                <IoIosArrowDropleftCircle  className="text-xl"/>
                <button className="font-bold" onClick={() => navigate('/')}>Home</button>
            </div>
            <h3 className="flex text-gray-600 text-3xl justify-center pt-5 font-semibold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} N.°{data?.id}</h3>
            <div className="flex justify-center p-5"
                style={{
                    backgroundColor: `${pokemonColor(pokemonDescription?.color?.name)}`, 
                    backgroundImage:`linear-gradient(0deg, rgba(244, 244, 244,0.8), rgba(244, 244, 244,0.8)), 
                    url(https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-5.jpg)`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'contain', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
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
