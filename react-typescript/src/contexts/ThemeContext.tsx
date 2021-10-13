import { createContext, FC, useContext, useState } from "react";
import type { ThemeContextState } from "../types/types";

const contextDefaultValues: ThemeContextState = {
  theme: false,
  changeCurrentTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextState>(
  contextDefaultValues
);

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setCurrentTheme] = useState(contextDefaultValues.theme);

  const changeCurrentTheme = () => setCurrentTheme(!theme);

  return (
    <ThemeContext.Provider value={{ theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;
