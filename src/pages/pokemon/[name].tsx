import React, { useEffect, useState, FC } from "react";
import { PageProps } from "gatsby";

import PokemonContainer from "../../components/PokemonContainer";
import PokeballSpinner from '../../components/PokeballSpinner';
import PokemonStats from "../../components/PokemonStats";
import Evolutions from "../../components/Evolutions";
import PokemonDetails from "../../components/PokemonDetails";

import { typeColor } from "../../utils/types-colors";
import { pokemonColor } from "../../utils/pokemon-colors";
import { getPokemonData } from "../../api/getPokemonData";
import { PokemonData, PokemonDescriptionT, Evolution } from "../../types/types";
import { initialPokemonDataValues, initialPokemonDescriptionValues, initialEvolutionChainValues } from "../../initialDataValues/initialDataValues";
import { capitalizeName } from "../../utils/capitalizeName";
import { descriptionFormat } from "../../utils/descriptionFormat";

interface Name {
    name: string;
}

interface PokemonProps {
    params: Name;
}

const Pokemon = ({ params }: PageProps<PokemonProps>) => {
    const pokemonName = params?.name?.toLowerCase();
    const [data, setData] = useState<PokemonData>(initialPokemonDataValues);
    const [pokemonDescription, setPokemonDescription] = useState<PokemonDescriptionT>(initialPokemonDescriptionValues);
    const [evolutionChain, setEvolutionChain] = useState<Evolution>(initialEvolutionChainValues);

    const pokemonImage = data?.sprites?.other?.['official-artwork']?.front_default;
    const description_format = descriptionFormat(pokemonDescription);

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
                <div className="grid w-96 h-[100hv] border dark:border-0 rounded place-content-center p-5 bg-gray-100 dark:bg-[#1E2022]">
                    <img
                        style={{backgroundColor: `${pokemonColor(pokemonDescription?.color?.name)}`}}
                        className="border rounded mt-10" 
                        src={pokemonImage} 
                        alt="pokemon image" 
                    />
                    <PokemonStats stats={data.stats} id={data.id} />
                </div>
                <div className="h-[100hv] border dark:border-0 w-96 p-3 bg-gray-100 bg-opacity-60 dark:bg-[#1E2022] dark:bg-opacity-60">
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
                    <PokemonDetails data={data} />
                </div>
            </PokemonContainer>
            <Evolutions evolutionChain={evolutionChain} />
        </>
    )
}

export default Pokemon;
