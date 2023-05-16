import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface AppProvidersProps {
	children: ReactNode;
}
  
const theme = {
    button: {
		defaultProps: {
			color: "teal",
		},
    },
};
 
export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
    return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};