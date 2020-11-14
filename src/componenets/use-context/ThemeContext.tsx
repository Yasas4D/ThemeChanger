import { createContext } from "react";

type ThemeContextType = {
  themeName: string;
  setThemeName: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
