import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState("Initial");
  const [customerId, setCustomerId] = useState("Initial");

  return (
    <ThemeContext.Provider
      value={{ userId, setUserId, customerId, setCustomerId }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
