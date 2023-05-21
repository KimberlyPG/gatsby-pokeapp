import React, { createContext, useState, ReactNode } from "react";

export const showSearchbarContext = createContext({
    showElement: false,
    setShowElement: (arg: boolean) => null
});

interface ShowSearchbarProviderProps {
    children: ReactNode;
}

export const ShowSearchbarProvider = ({ children }: ShowSearchbarProviderProps) => {
    const [showElement, setShowElement] = useState<boolean>(false);
    const value = {showElement, setShowElement};

    return (
        <showSearchbarContext.Provider value={value}>
            {children}
        </showSearchbarContext.Provider>
    )
};
  