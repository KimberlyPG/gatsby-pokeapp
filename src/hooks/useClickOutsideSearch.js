import { useEffect, useState } from "react";

export const useClickOutsideSearch = (ref) => {
    const [outsideClick, setOutsideClick] = useState(false);

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOutsideClick(true);
			} 
			else {
				setOutsideClick(false);
			} 
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};

	}, [ref]);

	return outsideClick;
  }