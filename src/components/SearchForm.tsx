import React, { FC, ChangeEvent, FormEvent, useRef, MouseEvent, KeyboardEvent, RefObject, useContext } from 'react';
import { AiOutlineSearch, AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { showSearchbarContext } from '../context/showSearchbar.context';

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
    const {showElement, setShowElement} = useContext(showSearchbarContext);
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        navigateOnSubmit();
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = (event.target as HTMLInputElement).value;
        getInputText(pokeName);
        filterPokemonOptions(pokeName);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pokeName = event.target.value;
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

    const showSearchBar = () => {
        setShowElement(true);
    }

    const hideSearchBar = () => {
        setShowElement(false);
    }

    return (
        <div className={`flex justify-end items-center rounded-full lg:w-80 xxs:full ${showElement && "xxs:w-full"}`}>
            <AiOutlineArrowLeft 
                className={`text-2xl mr-3 text-black dark:text-white sm:hidden ${showElement ? "flex":"hidden"}`} 
                onClick={hideSearchBar} 
            />
            <form 
                className={`flex items-center sm:border sm:bg-gray-100 sm:dark:bg-[#1E2022] sm:border-gray-200 sm:dark:border-[#736b5e] xxs:rounded-lg 
                    p-1 lg:w-80 sm:w-60 xxs:w-full sm:hover:border-blue-200 sm:dark:hover:border-yellow-600 
                    ${showElement ? "xxs:border xxs:shadow-sm xxs:shadow-sm xxs:bg-gray-100 xxs:dark:bg-[#1E2022] xxs:hover:border-blue-200 dark:xxs:hover:border-yellow-600":
                    "xxs:shadow-none xxs:border-0 xxs:bg-transparent xxs:shadow-none"}`} 
                onSubmit={handleSubmit}       
            >
                <AiOutlineSearch 
                    className={`sm:text-xl sm:disabled ${!showElement ? "xxs:text-2xl xxs:text-black xxs:dark:text-white":
                        "xxs:text-gray-500 xxs:dark:text-gray-200"}`} 
                    onClick={showSearchBar}
                />
                <input 
                    className={`bg-gray-100 dark:bg-[#1E2022] text-black dark:text-white pl-3 outline-0 w-full ${!showElement && "xxs:hidden sm:flex xxs:bg-transparent"}`}
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
                        className={`w-5 h-5 text-gray-500 dark:text-white text-xl hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full m-1 cursor-pointer
                        ${!showElement && "xxs:hidden sm:flex"}`} 
                        onClick={handleCloseClick} 
                    />
                }
            </form> 
        </div>
    )
}

export default SearchForm;