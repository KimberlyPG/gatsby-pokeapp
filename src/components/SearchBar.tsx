import React, { ChangeEvent, FormEvent, useContext, useEffect, useState, useRef, MouseEvent, KeyboardEvent } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { navigate } from 'gatsby';

import AutocompleteSearch from './AutocompleteSearch';

import { Node } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';
import { useClickOutsideSearch } from '../hooks/useClickOutsideSearch';

const SearchBar = () => {
    const { allPokemon } = useContext(PokemonContext);
    
    const inputRef = useRef<HTMLInputElement>(null);
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

    useEffect(() => {
        if(clickOutside) {
            setFilteredData([]);
        }
    }, [clickOutside])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setinputText(event.target.value);
        setSelected(event.target.value);
        const pokeName = event.target.value.toLowerCase();
        filterPokemonOptions(pokeName);
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        setinputText((event.target as HTMLInputElement).value.toLowerCase());
        const pokeName = (event.target as HTMLInputElement).value.toLowerCase();
        filterPokemonOptions(pokeName);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if(filteredData.some(list => list.name === selected)) {
            navigate(`/pokemon/${selected}`, { state: [filteredData] });
        } 
        else {
            navigate(`/search/${selected}`, { state: [filteredData] });
        }
        deleteFilteredData();
    }
    
    const scrollWithKey = (event: KeyboardEvent<HTMLInputElement>) => {
        const selected = (ulRef?.current?.querySelector(".bg-gray-100"));
        if(event.code === "ArrowUp") {
            event.preventDefault();
            const input = inputRef.current as HTMLInputElement;
            input.setSelectionRange(input.value.length, input.value.length);
        }
        setTimeout(() => {
            selected?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }, 100);
    };

    return (
        <div className='flex justify-center w-full z-auto' ref={searchBarRef}>
            <form 
                className='flex items-center shadow-sm border-2 bg-gray-100 border-gray-200 rounded-lg p-1 lg:w-80 sm:w-60 xs:w-24' 
                onSubmit={handleSubmit}       
            >
                <AiOutlineSearch className='text-gray-500 text-xl'/>
                <input 
                    className="bg-gray-100 text-black pl-3 outline-0"
                    aria-label="Search"
                    value={selected || ""}
                    onClick={handleClick}
                    onChange={handleChange} 
                    onKeyDown={scrollWithKey}
                    placeholder="Search a pokemon..."
                    ref={inputRef}
                /> 
            </form> 
            <AutocompleteSearch 
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