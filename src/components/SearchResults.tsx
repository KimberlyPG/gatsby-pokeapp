import React, {FC} from 'react'
import { Link } from 'gatsby';
import { Node } from '../types/types';

type SearchResultsProps = {
    item: Node;
	deleteFilteredData: () => void;
}

const SearchResults: FC<SearchResultsProps> = ({ item, deleteFilteredData }) => {
  return (
    <Link to={`/pokemon/${item.name}`} state={{ data: item}}> 
        <li className='flex items-center cursor-pointer hover:bg-gray-100' onClick={deleteFilteredData}>
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
