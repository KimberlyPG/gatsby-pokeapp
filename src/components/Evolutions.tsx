import React, { FC } from 'react'
import { AiOutlineRight } from 'react-icons/ai';

import EvolutionCard from './EvolutionCard'

import { Evolution } from '../types/types';

interface EvolutionProps {
	evolutionChain: Evolution
}	

const Evolutions: FC<EvolutionProps> = ({ evolutionChain }) => {
	return (
		<div className="justify-center w-2/4 mt-4 mx-auto">
			<p className="flex justify-center text-gray-800 dark:text-gray-100 font-semibold w-32 p-1 text-2xl">Evolutions</p> 
			<div className="flex py-10 px-20 items-center bg-gray-200 bg-opacity-70 mb-5 rounded-tr-2xl rounded-bl-2xl">
				{evolutionChain.chain &&
					<EvolutionCard url={evolutionChain.chain.species.url} name={evolutionChain.chain.species.name} />              
				}
				<div className="flex flex-col">
					{evolutionChain?.chain?.evolves_to.length > 0 && evolutionChain?.chain?.evolves_to?.map((item) => (
						<div key={item.species.name} className="flex flex-row items-center">
							<AiOutlineRight className="text-4xl mx-5"/>
							<EvolutionCard url={item.species.url} name={item.species.name} />
							{item.evolves_to.length > 0 && item.evolves_to?.map((element) => (
								<div className='flex flex-row items-center' key={item.species.name}>
									<AiOutlineRight className="text-4xl mx-5"/>
									<EvolutionCard url={element.species.url} name={element.species.name} />
								</div>
							))} 
						</div>
					))} 
				</div>
			</div>
		</div>
	)
}

export default Evolutions;