import React from 'react'
import { TbPokeball } from "react-icons/tb";
import { Link } from "gatsby"

const PokemonCard = ({ item }) => {

    return (
        <div>
            <Link to='/pokemon' state={{ data: item}}> 
                <div className='grid bg-gray-100 h-36 w-36 rounded-lg place-items-center cursor-pointer hover:bg-gray-200 mb-5'>
                    <TbPokeball className='text-gray-400' />
                    <img
                        className='flex justify-center'               
                        src={item.image} 
                        alt={`${item.name} image`} 
                    />
                    <h1 className='text-gray-500'>{item.name}</h1>
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;