import React, { createContext, useState, ReactNode } from "react";

export const ToggleMenuContext = createContext({
    show: false,
    setShow: (arg: boolean) => null
});

interface ToggleMenuProviderProps {
    children: ReactNode;
}

export const ToggleMenuProvider = ({ children }: ToggleMenuProviderProps) => {
    const [show, setShow] = useState<boolean>(false);
    const value = {show, setShow};

    return (
        <ToggleMenuContext.Provider value={value}>
            {children}
        </ToggleMenuContext.Provider>
    )
};
  