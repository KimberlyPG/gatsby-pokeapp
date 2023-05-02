import { useEffect, RefObject } from "react";

export const useClickOutsideSearch = (ref: RefObject<HTMLDivElement>, searchInput, setSearchInput) => {

    useEffect(() => {
        if (!searchInput) return;
        function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setSearchInput(false);
        }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [searchInput]);

}