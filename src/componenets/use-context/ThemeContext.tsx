import { createContext } from "react";

type ThemeContextType = {
  userId: string;
  customerId: string;
  setUserId: (value: string) => void;
  setCustomerId: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
