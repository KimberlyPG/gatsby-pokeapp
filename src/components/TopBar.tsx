import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

import { showSearchbarContext } from '../context/showSearchbar.context';

const TopBar = () => {
    const { showElement } = useContext(showSearchbarContext);
    return (
        <div className='flex h-14 items-center shadow-md w-full justify-between xxs:px-5 sm:px-10'>
            <Link to="/" className={`${showElement && "xxs:hidden sm:flex"}`}>
                <div className='flex items-center justify-start xxs:space-x-1 sm:space-x-3'>
                    <StaticImage 
                        className='h-6 w-6'
                        src="../assets/pokeballTransparent.jpg" 
                        alt="pokeball image" 
                    />
                    <p className='flex text-gray-700 text-xl font-bold dark:text-gray-100 hover:text-gray-600'>Pokedex</p>
                </div>
            </Link>
            <SearchBar />     
            <ThemeToggle />
        </div>
    )
}

export default TopBar;
