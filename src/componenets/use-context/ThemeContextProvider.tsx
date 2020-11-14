import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  //set Initial theme as dark
  const [themeName, setThemeName] = useState("theme-dark");

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
