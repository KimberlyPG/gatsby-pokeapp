import React, { ChangeEvent, FormEvent, useContext, useEffect, useState, useRef, MouseEvent, KeyboardEvent } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { navigate } from 'gatsby';

import SearchResults from './SearchResults';

import { Node } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';
import { useKeyPress } from '../hooks/useKeyPress';
import { useClickOutsideSearch } from '../hooks/useClickOutsideSearch';
import { initialNodeValues } from '../initialDataValues/initialDataValues';

const SearchBar = () => {
    const { allPokemon } = useContext(PokemonContext);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const searchBarRef = useRef<HTMLDivElement>(null);
    
    const [filteredData, setFilteredData] = useState<Node[]>([]);
    const [inputText, setinputText] = useState<string>("");
    const [selected, setSelected] = useState<string>("");
    const [cursor, setCursor] = useState<number>(-1);
    const [cursorHover, setCursorHover] = useState<Node>(initialNodeValues);

    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
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
    
    useEffect(() => {
        if (filteredData.length && downPress) {
            setCursor(prevState => prevState < filteredData.length - 1 ? prevState + 1 : prevState);
        }
    }, [downPress]);

    useEffect(() => {
        if (filteredData.length && upPress) {
            setCursor(prevState => (prevState > -1 ? prevState - 1 : prevState));
        }
    }, [upPress]);

    useEffect(() => {
        if (filteredData.length && cursorHover) {
          setCursor(filteredData.indexOf(cursorHover));
        }
      }, [cursorHover]);

      useEffect(() => {
        if(cursor > -1) {
            setSelected(filteredData[cursor]?.name);
        } else {
            setSelected(inputText)
        }
      }, [cursor]);
  
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
            {filteredData.length > 0 &&
                <ul 
                    className='bg-white border lg:w-80 sm:w-60 xs:w-24 max-h-52 overflow-y-scroll scrollbar-hide rounded-lg absolute mt-9 z-40'
                    ref={ulRef}
                >
                    {filteredData.map((item, i) => (
                        <SearchResults 
                            key={item.id} 
                            item={item} 
                            deleteFilteredData={deleteFilteredData} 
                            active={i === cursor}
                            setCursorHover={setCursorHover}
                        />
                    ))}
                </ul>  
            }         
        </div>      
    )
}

export default SearchBar;