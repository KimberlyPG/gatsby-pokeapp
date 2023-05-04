
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useToggleTheme } from "../hooks/useToggleTheme";
  
const ThemeToggle = () => {
    const [colorTheme, setTheme] = useToggleTheme();
    const [darkTheme, setDarkTheme] = useState<boolean>(
        colorTheme === "light" ? true : false
    );
  
    const ChangeTheme = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkTheme(checked);
    };
  
    return (
        <DarkModeSwitch
            style={{ marginRight: "1rem", marginLeft: "5rem" }}
            checked={darkTheme}
            onChange={ChangeTheme}
            size={25}
        />
    );
}

export default ThemeToggle;
