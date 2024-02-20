import Reacr, { useState, createContext, useEffect } from "react";

interface contextType {
    theme: string;
    setTheme: Reacr.Dispatch<Reacr.SetStateAction<string>>;
}

export const themeContext = createContext<any | contextType>({});
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("");
    useEffect(()=>{
        const color = localStorage.getItem("theme")
        setTheme(color!)
    },[theme])

    return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export default ThemeContextProvider;