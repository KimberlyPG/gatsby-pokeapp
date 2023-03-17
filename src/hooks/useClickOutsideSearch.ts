import { useEffect, useState, MouseEvent, RefObject } from "react";

export const useClickOutsideSearch = (ref: RefObject<HTMLDivElement>) => {
    const [outsideClick, setOutsideClick] = useState(false);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent<HTMLElement>) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOutsideClick(true);
			} 
			else {
				setOutsideClick(false);
			} 
		}
		document.addEventListener("mousedown", () => handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", () => handleClickOutside);
		};

	}, [ref]);

	return outsideClick;
  }