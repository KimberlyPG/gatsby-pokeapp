export const initialNodeValues = {
    name: '',
    id: '',
    stats: {
        attack:          0,
        defense:         0,
        special_attack:  0,
        hp:              0,
        special_defense: 0,
        speed:           0,
    },
    types: [],
    image: '',
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