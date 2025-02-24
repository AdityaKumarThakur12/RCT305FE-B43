import { createContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
 const [theme, setTheme] = usestate("light");

 const toogleTheme = ()=>{
    setTheme((prev)=> (prev=="light"? "dark": "light"))
 }

 return(
    <ThemeContext.Provider value={{theme, toogleTheme}}>
        {children}
    </ThemeContext.Provider>
 )
}