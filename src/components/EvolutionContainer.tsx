import React, { FC } from 'react'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

import EvolutionCard from './EvolutionCard';

import { Chain } from '../types/types';

interface EvolutionContainerProps {
    element: Chain;
}

const EvolutionContainer: FC<EvolutionContainerProps> = ({ element }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center'>
            <AiOutlineRight className="text-4xl mx-5 dark:text-gray-300 lg:flex xxs:hidden"/>
            <AiOutlineDown className="text-4xl mx-5 dark:text-gray-300 lg:hidden xxs:flex"/>
            <EvolutionCard url={element.species.url} name={element.species.name} />
        </div>
    )
}

export default EvolutionContainer;
