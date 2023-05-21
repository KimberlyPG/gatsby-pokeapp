
import React, { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useToggleTheme } from "../hooks/useToggleTheme";

import { showSearchbarContext } from "../context/showSearchbar.context";
  
const ThemeToggle = () => {
    const [colorTheme, setTheme] = useToggleTheme();
    const [darkTheme, setDarkTheme] = useState<boolean>(
        colorTheme === "light" ? true : false
    );
    const { showElement } = useContext(showSearchbarContext);
  
    const ChangeTheme = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkTheme(checked);
    };
  
    return (
        <DarkModeSwitch
            className={`${showElement && "xxs:hidden sm:flex"}`}
            style={{ marginLeft: "5rem" }}
            checked={darkTheme}
            onChange={ChangeTheme}
            size={25}
        />
    );
}

export default ThemeToggle;
