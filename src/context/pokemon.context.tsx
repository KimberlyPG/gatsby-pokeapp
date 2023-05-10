import React, { createContext, useState, ReactNode } from "react";
import { GraphPokemonData } from "../types/types";
import { initialPokemonValues } from "../initialDataValues/initialDataValues";

interface ContextTypes {
    allPokemon: GraphPokemonData;
    setAllPokemon (arg0: GraphPokemonData): void;
}

export const PokemonContext = createContext<ContextTypes>({
    allPokemon: initialPokemonValues,
    setAllPokemon: () => {}
});

interface PokemonProviderProps {
    children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
    const [allPokemon, setAllPokemon] = useState<GraphPokemonData>(initialPokemonValues);

    const value = {allPokemon, setAllPokemon};

    return (
        <PokemonContext.Provider 
            value={value}
        >
            {children}
        </PokemonContext.Provider>
    )
};
  