import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useTheme = () => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useLocalStorage("theme", systemTheme);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return toggleTheme;
};

export { useTheme };
