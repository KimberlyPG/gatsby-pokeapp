import { useState, useEffect } from "react";

export function useToggleTheme () {
	const isBrowser = typeof window !== "undefined"
	const [theme, setTheme] = useState<string>(
		isBrowser ? window.localStorage.theme : "light"
	);
	const colorTheme = theme === "dark" ? "light" : "dark";

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

