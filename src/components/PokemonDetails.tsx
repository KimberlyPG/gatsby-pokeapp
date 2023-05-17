import React, { FC } from 'react';

import { PokemonData } from '../types/types';

interface PokemonDetailsProps {
    data: PokemonData;
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ data }) => {
    return (
        <div className="bg-blue-400 rounded-lg mt-5 p-5">
            <div>
                <p className="text-blue-800 text-sm ">Weight</p>
                <p className="text-white text-sm ">{data.weight}</p>
            </div>
            <div>
                <p className="text-blue-800 text-sm">Height</p>
                <p className="text-white text-sm">{data.height}</p>
            </div>
        </div>
    );
}

export default PokemonDetails;