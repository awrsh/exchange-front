import Reacr, { useState, createContext } from "react";

interface contextType {
    theme: string;
    setTheme: Reacr.Dispatch<Reacr.SetStateAction<string>>;
}

export const themeContext = createContext<any | contextType>({});
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("dark");

    return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export default ThemeContextProvider;