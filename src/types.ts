export interface HomeProps {
    allPokemon: AllPokemon;
}

export interface AllPokemon {
nodes: Node[];
key: string;
item: {}
}

export interface Node {
name:  string;
stats: Stats;
types: PokemonTypes[];
image: string;
}

export interface Stats {
attack:          number;
defense:         number;
special_attack:  number;
hp:              number;
special_defense: number;
speed:           number;
}

export interface PokemonTypes {
Bug: string;
Dark: string;
Dragon: string;
Electric: string;
Fairy: string;
Fighting: string;
Fire: string;
Flying: string;
Ghost: string;
Grass: string;
Ground: string;
Ice: string;
Normal: string;
Poison: string;
Psychic: string;
Rock: string;
Steel: string;
Water: string;
}