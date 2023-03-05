import React, { FC } from 'react'
import { Link } from 'gatsby'

interface EvolutionCardProps {
    url: string;
    name: string;
}

const EvolutionCard: FC<EvolutionCardProps> = ({ url, name }) => {
  return (
    <div>
        <Link to={`/pokemon/${name}`}>
            <div className="rounded-full p-4"
                style={{
                    backgroundImage:`
                    url(https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg)`,
                    backgroundSize: 'contain', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}  
            >                                   
                <img 
                    className="w-48"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.slice(42, -1)}.png`} 
                    alt="" 
                    />
            </div>
            <p className="flex text-gray-700 text-xl justify-center">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </p>
        </Link>
    </div>
  )
}

export default EvolutionCard;