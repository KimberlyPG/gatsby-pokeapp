export const initialPokemonValues = {
    id: 0,
    name: '',
    generation_id: 0,
    pokemon_v2_pokemons: []
}

export const initialPokemonDataValues = {
    id: 0,
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
}

export const initialPokemonDescriptionValues = {
    color: {
        name: "",
        url:  "",
    },
    flavor_text_entries: [
        { 
            flavor_text: "",
        }
    ],
}

export const initialEvolutionChainValues = {
    chain: {
        evolves_to: [],
        species: {
            name: "",
            url: ""
        }
    }
}