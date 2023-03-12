import React, {Dispatch, FC, SetStateAction} from 'react'
import { Link } from 'gatsby';
import { Node } from '../types/types';

type SearchResultsProps = {
    item: Node;
	deleteFilteredData: () => void;
	active: boolean;
	setCursorHover: Dispatch<SetStateAction<Node>>;
}

const SearchResults: FC<SearchResultsProps> = ({ item, deleteFilteredData, active, setCursorHover }) => {
	return (
		<Link to={`/pokemon/${item.name}`} state={{ data: item}}> 
			<li 
				className={`flex items-center cursor-pointer item ${active ? "bg-gray-100" : "bg-white"}`} 
				onClick={() => deleteFilteredData()}
				onMouseMoveCapture={() => setCursorHover(item)}
			>
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
