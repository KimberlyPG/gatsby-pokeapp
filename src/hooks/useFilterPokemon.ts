import { useEffect, useState } from "react";

import { GraphPokemonData } from "../types/types";

export const useFilterPokemon = (allPokemonList: GraphPokemonData[], typeSelected: string, gen: string) => {
    const [pokemonTypeFilter, setPokemonTypeFilter] = useState<GraphPokemonData[]>();
    
    useEffect(() => {
		const filtered = allPokemonList.filter((item: GraphPokemonData) => {
			return item.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.some((element) => 
				element.pokemon_v2_type?.name === typeSelected
			)
		})
		setPokemonTypeFilter(filtered);
	}, [typeSelected, gen])

    return pokemonTypeFilter;
}