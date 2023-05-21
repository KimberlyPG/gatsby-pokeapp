import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";

import PokemonContainer from "../../components/PokemonContainer";
import PokeballSpinner from '../../components/PokeballSpinner';
import PokemonStats from "../../components/PokemonStats";
import Evolutions from "../../components/Evolutions";
import PokemonDetails from "../../components/PokemonDetails";

import { typeColor } from "../../utils/types-colors";
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
        <div className="pb-10">
            <h3 className="flex w-screen text-gray-600 dark:text-gray-100 text-3xl justify-center pt-5 font-semibold">
                {capitalizeName(pokemonName)} N.°{data?.id}
            </h3>
            <PokemonContainer pokemonDescription={pokemonDescription}>
                <div className="grid md:w-1/2 lg:w-96 h-[100hv] md:border dark:border-0 rounded place-content-center 
                lg:p-5 md:bg-gray-100 md:dark:bg-[#1E2022] md:shadow-2xl md:p-5">
                    <img
                        className="mt-10 xxs:bg-transparent md:bg-gray-200 md:dark:bg-[#1E2022]" 
                        src={pokemonImage} 
                        alt="pokemon image" 
                    />
                    <PokemonStats stats={data.stats} id={data.id} />
                </div>
                <div className="h-[100hv] md:w-1/2 lg:w-96 md:border dark:border-0 p-3 bg-gray-100 md:bg-opacity-60 xxs:bg-opacity-75 
                dark:bg-[#1E2022] md:dark:bg-opacity-60 md:shadow-2xl xxs:rounded-3xl md:rounded-none">
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
        </div>
    );
}

export default Pokemon;
