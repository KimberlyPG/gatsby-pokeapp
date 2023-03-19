import React, { useContext, useEffect, useState, useRef } from 'react';
import { navigate } from 'gatsby';

import SearchForm from './SearchForm';
import SearchAutocomplete from './SearchAutocomplete';

import { Node } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';
import { useClickOutsideSearch } from '../hooks/useClickOutsideSearch';

const SearchBar = () => {
    const { allPokemon } = useContext(PokemonContext);
    
    const ulRef = useRef<HTMLUListElement>(null);
    const searchBarRef = useRef<HTMLDivElement>(null);
    
    const [filteredData, setFilteredData] = useState<Node[]>([]);
    const [inputText, setinputText] = useState<string>("");
    const [selected, setSelected] = useState<string>("");

    const clickOutside = useClickOutsideSearch(searchBarRef);
    
    const filterPokemonOptions = (pokeName: string) => {
        const filtered = allPokemon.nodes.filter((item: Node) => {
            if(pokeName !== '') return item.name.includes(pokeName);
        })
        setFilteredData(filtered.slice(0,10));
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
        if(clickOutside) {
            deleteFilteredData();
        }
    }, [clickOutside])

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
        <div className='flex justify-center w-full z-auto' ref={searchBarRef}>
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