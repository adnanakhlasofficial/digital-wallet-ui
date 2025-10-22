import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode:
    (localStorage.getItem("vite-ui-theme") as ThemeMode) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem("vite-ui-theme", action.payload);

      // Apply to <html>
      const root = document.documentElement;
      if (action.payload === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    },
    toggleTheme: (state) => {
      const newMode = state.mode === "dark" ? "light" : "dark";
      state.mode = newMode;
      localStorage.setItem("vite-ui-theme", newMode);

      const root = document.documentElement;
      if (newMode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
