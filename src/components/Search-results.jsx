import React from 'react'
import { Link } from 'gatsby';

const SearchResults = ({ item }) => {
  return (
    <Link to='/pokemon' state={{ data: item}}> 
        <li className='flex items-center cursor-pointer hover:bg-gray-100'>
                <img
                className='flex justify-center w-12'               
                src={item.image} 
                alt={`${item.name} image`} 
            />
            <h1 className='text-gray-500'>{item.name}</h1>
        </li>
    </Link>
  )
}

export default SearchResults;
