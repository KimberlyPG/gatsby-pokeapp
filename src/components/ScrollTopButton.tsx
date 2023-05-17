import React, { FC, RefObject } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

interface ScrollTopButtonProps {
    showButton: boolean;
    divRef: RefObject<HTMLDivElement>
}

const ScrollTopButton: FC<ScrollTopButtonProps> = ({ showButton, divRef }) => {

    const scrollToTop = () => {
		divRef?.current?.scroll({
		  top: 0,
		  behavior: "smooth"
		});
	};

    return (
        <>
            {showButton &&
                <button 
                type="button" 
                className='fixed bottom-5 right-7 z-50 p-4 bg-blue-400 rounded-full text-white animate-bounce'
                onClick={scrollToTop}
                >
                    <AiOutlineArrowUp />
                </button>
            }
        </>
    );
}

export default ScrollTopButton;
