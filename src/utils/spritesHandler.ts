import { GraphPokemonData } from "../types/types"

export const spritesHandler = (item: GraphPokemonData) => {
    return JSON.parse(item.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites)?.other[`official-artwork`].front_default?.
    replace("/media", "https://raw.githubusercontent.com/PokeAPI/sprites/master")
}