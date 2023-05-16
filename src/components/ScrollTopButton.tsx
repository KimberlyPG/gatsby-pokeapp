import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollTopButton = ({ divRef }) => {

    const scrollToTop = () => {
		divRef?.current?.scroll({
		  top: 0,
		  behavior: "smooth"
		});
	};

    return (
        <button 
            type="button" 
            className='fixed bottom-5 right-7 z-50 p-4 bg-blue-400 rounded-full text-white'
            onClick={scrollToTop}
        >
            <AiOutlineArrowUp />
        </button>
    );
}

export default ScrollTopButton;
