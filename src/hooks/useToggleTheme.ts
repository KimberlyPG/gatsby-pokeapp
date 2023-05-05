import { useState, useEffect } from "react";

export function useToggleTheme () {
	const [theme, setTheme] = useState<string>(localStorage.theme);
	const colorTheme = theme === "dark" ? "light" : "dark";

	const isBrowser = typeof window !== "undefined"

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		if (isBrowser) {
			window.localStorage.setItem('theme', theme);
		}
	}, [theme, colorTheme]);

	return [colorTheme, setTheme]
}

