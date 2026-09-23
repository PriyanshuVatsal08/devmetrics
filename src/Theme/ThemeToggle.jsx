import {
  Sun,
  Moon,
} from "lucide-react";

const ThemeToggle = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <button
      onClick={() =>
        setDarkMode((prev) => !prev)
      }
      className="
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        p-2.5
        text-slate-400
        transition
        hover:border-slate-600
        hover:text-white
      "
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun size={19} />
      ) : (
        <Moon size={19} />
      )}
    </button>
  );
};

export default ThemeToggle;