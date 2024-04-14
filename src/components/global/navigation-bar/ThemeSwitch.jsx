"use client";
import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      title={`${
        theme === "light" ? "Turn on dark mode" : "Turn on light mode"
      }`}
      onClick={() => toggleTheme()}
      className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-2 inline-block"
    >
      {theme === "light" ? (
        <FaSun className="text-orange-300 size-6" />
      ) : (
        <FaMoon className="size-6" />
      )}
    </button>
  );
};

export default ThemeSwitch;
