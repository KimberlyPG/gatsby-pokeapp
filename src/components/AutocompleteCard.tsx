import React, {Dispatch, FC, SetStateAction} from 'react'
import { Link } from 'gatsby';

import { GraphPokemonData } from '../types/types';
import { spritesHandler } from '../utils/spritesHandler';

type SearchResultsProps = {
    item: GraphPokemonData;
	deleteFilteredData: () => void;
	active: boolean;
	setCursorHover: Dispatch<SetStateAction<GraphPokemonData>>;
}

const AutocompleteCard: FC<SearchResultsProps> = ({ item, deleteFilteredData, active, setCursorHover }) => {
	return (
		<Link to={`/pokemon/${item.name}`} state={{ data: item}}> 
			<li 
				className={`flex items-center cursor-pointer item ${active ? "bg-gray-100 dark:bg-[#131516]" : "bg-white dark:bg-[#181A1B]"}`} 
				onClick={() => deleteFilteredData()}
				onMouseMoveCapture={() => setCursorHover(item)}
			>
				<img
					className='flex justify-center w-14'               
					src={spritesHandler(item)} 
					alt={`${item.name} image`} 
				/>
				<h1 className='text-gray-500 dark:text-white'>{item.name}</h1>
			</li>
		</Link>
	)
}

export default AutocompleteCard;
