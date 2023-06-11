import React, { FC } from 'react'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

import EvolutionCard from './EvolutionCard'

import { Evolution } from '../types/types';

interface EvolutionProps {
	evolutionChain: Evolution
}	

const Evolutions: FC<EvolutionProps> = ({ evolutionChain }) => {
	return (
		<div className="justify-center md:w-[90%] lg:w-2/4 mt-4 md:mx-auto">
			<p className="flex justify-center text-gray-800 dark:text-gray-100 font-semibold md:w-32 p-1 text-2xl">Evolutions</p> 
			<div className="xxs:grid xxs:grid-cols-1 lg:flex place-items-center py-10 xxs:px-5 xl:px-20 items-center justify-center bg-gray-200 dark:bg-[#272727] 
				bg-opacity-70 mb-5 rounded-tr-2xl rounded-bl-2xl">
				{evolutionChain.chain &&
					<EvolutionCard url={evolutionChain.chain.species.url} name={evolutionChain.chain.species.name} />              
				}
				<div className="xxs:grid xxs:grid-flow-col xxs:grid-rows-1 xxs:auto-cols-auto lg:flex lg:flex-col lg:place-items-center xxs:space-x-5 lg:space-x-0 w-fit">
					{evolutionChain?.chain?.evolves_to.length > 0 && evolutionChain?.chain?.evolves_to?.map((item) => (
						<div key={item.species.name} className="xxs:grid xxs:place-items-center lg:grid-flow-col">
							<AiOutlineRight className="text-4xl mx-5 dark:text-gray-300 lg:flex xxs:hidden"/>
							<AiOutlineDown className="text-4xl mx-5 dark:text-gray-300 lg:hidden xxs:flex"/>
							<EvolutionCard url={item.species.url} name={item.species.name} />
							<div className='xxs:grid xxs:grid-flow-col xxs:grid-rows-1 xxs:auto-cols-auto lg:flex lg:flex-col xxs:space-x-5 lg:space-x-0 w-fit'>
								{item.evolves_to.length > 0 && item.evolves_to?.map((element) => (
									<div className='flex flex-col lg:flex-row items-center' key={item.species.name}>
										<AiOutlineRight className="text-4xl mx-5 dark:text-gray-300 lg:flex xxs:hidden"/>
										<AiOutlineDown className="text-4xl mx-5 dark:text-gray-300 lg:hidden xxs:flex"/>
										<EvolutionCard url={element.species.url} name={element.species.name} />
									</div>
								))} 
							</div>
						</div>
					))} 
				</div>
			</div>
		</div>
	)
}

export default Evolutions;