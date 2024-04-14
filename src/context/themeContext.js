"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

const storedTheme =
  typeof localStorage !== "undefined" ? localStorage.getItem("theme") : "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
