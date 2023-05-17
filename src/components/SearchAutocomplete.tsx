
import React, { FC, RefObject, useEffect, useState } from "react";

import AutocompleteCard from "./AutocompleteCard";

import { GraphPokemonData } from "../types/types";
import { initialPokemonValues } from "../initialDataValues/initialDataValues";
import { useKeyPress } from "../hooks/useKeyPress";

type AutocompleteSearchProps = {
	filteredData: GraphPokemonData[];
	deleteFilteredData: () => void;
	getSelectedPokemon: (arg0: string) => void;
	inputText: string;
	ulRef: RefObject<HTMLUListElement>
}

const AutocompleteSearch: FC<AutocompleteSearchProps> = ({ filteredData, deleteFilteredData, getSelectedPokemon, inputText, ulRef }) => {
	const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
	
	const [cursor, setCursor] = useState<number>(-1);
    const [cursorHover, setCursorHover] = useState<GraphPokemonData>(initialPokemonValues);

	useEffect(() => {
        if (filteredData.length && downPress) {
            setCursor(prevState => 
			prevState < filteredData.length - 1 ? prevState + 1 : prevState);
        }
    }, [downPress]);

    useEffect(() => {
        if (filteredData.length && upPress) {
            setCursor(prevState =>
			prevState > -1 ? prevState - 1 : prevState);
        }
    }, [upPress]);

    useEffect(() => {
        if (filteredData.length && cursorHover) {
          setCursor(filteredData.indexOf(cursorHover));
        }
    }, [cursorHover]);

    useEffect(() => {
        if(cursor > -1) {
            getSelectedPokemon(filteredData[cursor]?.name);
        } else {
            getSelectedPokemon(inputText)
        }
    }, [cursor]);

    return (
        <>
            {filteredData.length > 0 &&
                <ul 
                    className='bg-white border dark:border-gray-600 lg:w-80 sm:w-60 xs:w-24 max-h-52 overflow-y-scroll scrollbar-hide rounded-lg absolute mt-9 z-40'
                    ref={ulRef}
                >
                    {filteredData.map((item, i) => (
                        <AutocompleteCard 
                            key={item.id} 
                            item={item} 
                            deleteFilteredData={deleteFilteredData} 
                            active={i === cursor}
                            setCursorHover={setCursorHover}
                        />
                    ))}
                </ul>  
            }   
        </>
    )
}

export default AutocompleteSearch;