import React, {FC, ReactNode} from 'react'

import { pokemonColor } from '../utils/pokemon-colors'
import { PokemonDescription } from '../types/types';

interface PokemonContainerProps {
    children: ReactNode;
    pokemonDescription: PokemonDescription;
}

const PokemonContainer: FC<PokemonContainerProps> = ({ children, pokemonDescription }) => {
  return (
    <div className="flex justify-center p-5"
        style={{
            backgroundColor: `${pokemonColor(pokemonDescription?.color?.name)}`, 
            backgroundImage:`linear-gradient(0deg, rgba(244, 244, 244,0.8), rgba(244, 244, 244,0.8)), 
            url(https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-5.jpg)`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        {children}
    </div>
  )
}

export default PokemonContainer