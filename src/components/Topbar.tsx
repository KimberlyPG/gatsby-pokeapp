import React, { ChangeEvent, FormEvent, useContext, useEffect, useState, useRef} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Link, navigate } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import SearchResults from './SearchResults';

import { Node } from '../types/types';
import { PokemonContext } from '../context/pokemon.context';
import { useKeyPress } from "../utils/useKeyPress";

const Topbar = () => {
    const { allPokemon } = useContext(PokemonContext);
    const selectRef = useRef<HTMLUListElement>(null);

    const [filteredData, setFilteredData] = React.useState<Node[]>([]);
    const [inputText, setinputText] = useState<string>("");
    const [selectedName, setSelectedName] = useState<string>("");
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const [cursor, setCursor] = useState(-1);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setinputText(event.target.value.toLowerCase());
        const pokeName = event.target.value.toLowerCase();
        const filtered = allPokemon.nodes.filter((item: Node) => {
            if(pokeName !== '') return item.name.includes(pokeName);
        })
            setFilteredData(filtered);
    }
    
    const deleteFilteredData = () => {
        setFilteredData([]);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if(cursor > -1) {
            navigate(`/pokemon/${selectedName}`);
            setCursor(-1);
            setinputText(selectedName);
        } else {
            navigate(`/search/${inputText}`, { state: [filteredData] });
        }
        deleteFilteredData();
    }

    useEffect(() => {
        if (filteredData.length && downPress) {
          setCursor(prevState => prevState < filteredData.length - 1 ? prevState + 1 : prevState);
        }
        setSelectedName(filteredData[cursor]?.name);
      }, [downPress]);

    useEffect(() => {
        if (filteredData.length && upPress) {
            setCursor(prevState => (prevState > -1 ? prevState - 1 : prevState));
        }
        setSelectedName(filteredData[cursor]?.name);
    }, [upPress]);

    const scroll = () => {
        setTimeout(() => {
            setChange();
          }, 100);
    };

    function setChange() {
        const selected = (selectRef?.current?.querySelector(".bg-blue-200"));
        selected?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    };

    return (
        <div className='flex h-14 items-center shadow-md'>
            <Link to="/">
                <div className='flex justify-center items-center space-x-3 ml-6'>
                    <StaticImage 
                        className='h-6 w-6'
                        src="../assets/pokeballTransparent.jpg" 
                        alt="pokeball image" 
                    />
                    <p className='flex text-gray-700 text-xl font-bold'>Pokedex</p>
                </div>
            </Link>
            <div className='flex justify-center w-full z-auto'>
                <form 
                    className='flex items-center shadow-sm border-2 bg-gray-100 border-gray-200 rounded-lg p-1 lg:w-80 sm:w-60 xs:w-24' 
                    onSubmit={handleSubmit}
                >
                    <AiOutlineSearch className='text-gray-500 text-xl'/>
                    <input 
                        className="bg-gray-100 text-black pl-3 outline-0"
                        aria-label="Search"
                        value={cursor > -1 ? selectedName : inputText}
                        onChange={handleChange} 
                        onKeyDown={scroll}
                        placeholder="Search a pokemon..."
                    /> 
                </form> 
                {filteredData.length > 0 &&
                    <ul 
                        className='bg-white border lg:w-80 sm:w-60 xs:w-24 max-h-40 overflow-y-scroll scrollbar-hide rounded-lg absolute mt-9 z-40'
                        ref={selectRef}
                    >
                        {filteredData.map((item, i) => (
                                <SearchResults 
                                    key={item.id} 
                                    item={item} 
                                    deleteFilteredData={deleteFilteredData} 
                                    active={i === cursor}
                                />
                        ))}
                    </ul>  
                }         
            </div>
            
        </div>
    )
}

export default Topbar;