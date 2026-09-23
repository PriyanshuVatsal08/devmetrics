import { useEffect, useState } from "react";

const useTheme = () => {
  const [darkMode, setDarkMode] =
    useState(() => {
      const savedTheme =
        localStorage.getItem("theme");

      return savedTheme !== "light";
    });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  };
};

export default useTheme;