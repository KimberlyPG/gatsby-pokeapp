import { PokemonDescriptionT } from "../types/types";

export const descriptionFormat = (pokemonDescription: PokemonDescriptionT) => {
    return JSON.stringify(pokemonDescription?.flavor_text_entries?.[7]?.flavor_text)?.
    toString().replaceAll("\\n", " ").replace("\\f", " ").replace("POKéMON", "pokémon");
}