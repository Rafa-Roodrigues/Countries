import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  themeIsActive: boolean;
  changeTheme: () => void;
}

interface ProviderThemeProps {
  children:ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export function ProviderTheme({ children }: ProviderThemeProps) {
  const [themeIsActive, setThemeIsActive] = useState(() => {
    const theme = localStorage.getItem("@THEME");

    if(theme) return true;
  
    return false;
  });

  function changeTheme() {
    setThemeIsActive(!themeIsActive);
    localStorage.setItem("@THEME", JSON.stringify(themeIsActive));
  }

  return (
    <ThemeContext.Provider value={{themeIsActive, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}