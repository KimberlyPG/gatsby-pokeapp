import React, { FC, ChangeEvent, FormEvent, useRef, MouseEvent, KeyboardEvent, RefObject } from 'react';
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

type SearchFormProps = {
    navigateOnSubmit: () => void;
    selected: string;
    filterPokemonOptions: (arg0: string) => void;
    getSelectedPokemon: (arg0: string) => void;
    getInputText: (arg0: string) => void;
    ulRef: RefObject<HTMLUListElement>
}

const SearchForm: FC<SearchFormProps> = ({ 
        navigateOnSubmit, 
        selected, 
        filterPokemonOptions, 
        getSelectedPokemon, 
        getInputText, 
        ulRef, 
    }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        navigateOnSubmit();
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = (event.target as HTMLInputElement).value.toLowerCase();
        getInputText(pokeName);
        filterPokemonOptions(pokeName);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = event.target.value.toLowerCase();
        getInputText(pokeName);
        getSelectedPokemon(pokeName);
        filterPokemonOptions(pokeName);
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

    const handleCloseClick = () => {
        getInputText("");
        getSelectedPokemon("");
        filterPokemonOptions("");
    }

    return (
        <form 
            className='flex items-center shadow-sm border-2 bg-gray-100 border-gray-200 rounded-lg p-1 lg:w-80 sm:w-60 xs:w-24 hover:border-blue-200' 
            onSubmit={handleSubmit}       
        >
            <AiOutlineSearch className='text-gray-500 text-xl'/>
            <input 
                className="bg-gray-100 text-black pl-3 outline-0 w-full"
                aria-label="Search"
                value={selected || ""}
                onClick={handleClick}
                onChange={handleChange} 
                onKeyDown={scrollWithKey}
                placeholder="Search a pokemon..."
                ref={inputRef}
            /> 
            {selected.length > 0 &&
            <AiOutlineClose 
                className='text-gray-500 text-xl hover:bg-gray-200 rounded-full m-1 cursor-pointer' 
                onClick={handleCloseClick} 
            />
            }
        </form> 
    )
}

export default SearchForm;