import { useEffect, useState } from "react";

export function useClickOutsideSearchList (ref) {
    const [outsideClick, setOutsideClick] = useState(false);

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOutsideClick(true);
			} 
			else if (ref.current && ref.current.contains(event.target)) {
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