import React, { useEffect, useState, MouseEvent, RefObject } from 'react'

export const useScrollToTop = (divRef: RefObject<HTMLDivElement>) => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const showScrollToShow = (event: MouseEvent<HTMLButtonElement>) => {
			if(event.currentTarget.scrollTop > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		}

		divRef?.current?.addEventListener('scroll', showScrollToShow);

		return () => {
			divRef?.current?.removeEventListener('scroll', showScrollToShow)
		}
	}, [])

	const scrollToTop = () => {
		divRef?.current?.scroll({
		  top: 0,
		  behavior: "smooth"
		});
	};


  return showButton;
}
