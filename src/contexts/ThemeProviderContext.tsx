import type { ThemeProviderState } from "@/providers/ThemeProvider";
import { createContext } from "react";

export const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
