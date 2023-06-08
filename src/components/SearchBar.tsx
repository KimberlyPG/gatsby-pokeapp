import React, { useContext, useEffect, useState, useRef } from 'react';
import { navigate } from 'gatsby';

import SearchForm from './SearchForm';
import SearchAutocomplete from './SearchAutocomplete';

import { GraphPokemonData } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';
import { showSearchbarContext } from '../context/showSearchbar.context';
import { useClickOutsideSearch } from '../hooks/useClickOutsideSearch';

const SearchBar = () => {
    const { allPokemon } = useContext(PokemonContext);
    const { showElement } = useContext(showSearchbarContext);
    
    const ulRef = useRef<HTMLUListElement>(null);
    const searchBarRef = useRef<HTMLDivElement>(null);
    
    const [filteredData, setFilteredData] = useState<GraphPokemonData[]>([]);
    const [inputText, setinputText] = useState<string>("");
    const [selected, setSelected] = useState<string>("");
    const [searchInput, setSearchInput] = useState(false);

    useClickOutsideSearch(searchBarRef, searchInput, setSearchInput);

    const filterPokemonOptions = (pokeName: string) => {
        const filtered = allPokemon.filter((item: GraphPokemonData) => {
            if(pokeName !== '') return item.name.includes(pokeName.toLowerCase()) 
        })
        setFilteredData(filtered);
    }

    const deleteFilteredData = () => {
        setFilteredData([]);
    }

    const getSelectedPokemon = (name: string) => {
        setSelected(name)
    }

    const getInputText = (input: string) => {
        setinputText(input);
    }

    useEffect(() => {
        if(!searchInput || !showElement) {
            deleteFilteredData();
        } 
    }, [searchInput, showElement])

    const navigateOnSubmit = () => {
        if(filteredData.some(list => list.name === selected)) {
            navigate(`/pokemon/${selected}`);
        } 
        else {
            navigate(`/search/${selected}`, { state: [filteredData] });
        }
        deleteFilteredData();
    }

    return (
        <div className={`flex justify-center sm:w-fit z-auto ${showElement ? "xxs:w-full":"xxs:w-fit"}`} ref={searchBarRef} 
            onClick={() => setSearchInput(!searchInput)}
        >
            <SearchForm 
                navigateOnSubmit={navigateOnSubmit}
                selected={selected}
                filterPokemonOptions={filterPokemonOptions} 
                getSelectedPokemon={getSelectedPokemon} 
                getInputText={getInputText}
                ulRef={ulRef}
            />
            <SearchAutocomplete 
                filteredData={filteredData} 
                deleteFilteredData={deleteFilteredData} 
                getSelectedPokemon={getSelectedPokemon} 
                inputText={inputText} 
                ulRef={ulRef} 
            />
        </div>      
    )
}

export default SearchBar;