import React, { createContext, useState, ReactNode } from "react";
import { AllPokemon, Node } from "../types/types";

interface ContextTypes {
    allPokemon: AllPokemon;
    setAllPokemon (arg0: AllPokemon): void;
}

export const PokemonContext = createContext<ContextTypes>({
    allPokemon: {
        nodes: []
    },
    setAllPokemon: () => {}
});

interface PokemonProviderProps {
    children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
    const [allPokemon, setAllPokemon] = useState<AllPokemon>({
        nodes: []
    });

    const value = {allPokemon, setAllPokemon};

    return (
        <PokemonContext.Provider 
            value={value}
        >
            {children}
        </PokemonContext.Provider>
    )
};
  