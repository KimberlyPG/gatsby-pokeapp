import React, { FC, ReactNode } from 'react'

import { pokemonColor } from '../utils/pokemon-colors'
import { PokemonDescriptionT } from '../types/types';

interface PokemonContainerProps {
    children: ReactNode;
    pokemonDescription: PokemonDescriptionT;
}

const PokemonContainer: FC<PokemonContainerProps> = ({ children, pokemonDescription }) => {
	console.log(pokemonDescription?.color?.name)
	return (
		<div className={`sm:flex xs:flex-grow justify-center p-5 dark:bg-[#1E3022] bg-white
		bg-[linear-gradient(to_right_bottom,rgba(240,240,240,0.7),rgba(240,240,240,0.7)),url('../assets/pokeballBg.svg')]
		dark:bg-[linear-gradient(to_right_bottom,rgba(10,10,10,0.9),rgba(10,10,10,0.9)),url('../assets/pokeballBgDark.svg')]`}	
			style={{
				backgroundColor: `${pokemonColor(pokemonDescription?.color?.name)}`,
				backgroundAttachment: 'fixed',
				backgroundSize: 'contain', 
				backgroundPosition: 'right',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{children}
		</div>
	)
}

export default PokemonContainer;