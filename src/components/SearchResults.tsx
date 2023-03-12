import React, {FC} from 'react'
import { Link } from 'gatsby';
import { Node } from '../types/types';

type SearchResultsProps = {
    item: Node;
	deleteFilteredData: () => void;
	active: boolean;
}

const SearchResults: FC<SearchResultsProps> = ({ item, deleteFilteredData, active }) => {
	return (
		<Link to={`/pokemon/${item.name}`} state={{ data: item}}> 
			<li 
				className={`flex items-center cursor-pointer hover:bg-gray-100 item ${active ? "bg-blue-200" : "bg-white"}`} 
				onClick={() => deleteFilteredData()}
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
