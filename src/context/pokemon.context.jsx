import React, { createContext, useState } from "react";

export const PokemonContext = createContext ({
    allPokemon: [],
    setAllPokemon: () => [] 
});

export const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState([]);
    console.log("allPokemon", allPokemon)

    const value = {allPokemon, setAllPokemon};

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
};
  