import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

const TopBar = () => {
    return (
        <div className='flex h-14 items-center shadow-md w-full justify-between'>
            <Link to="/">
                <div className='flex items-center justify-start space-x-3 ml-6'>
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
