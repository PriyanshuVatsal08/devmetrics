import {
  EthernetPort   ,
  Activity,
} from "lucide-react";

import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 shadow-lg shadow-blue-500/20">
            <EthernetPort    size={25} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              DevMetrics
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              GitHub Analytics
            </p>
          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 sm:flex">

            <Activity
              size={14}
              className="text-emerald-400"
            />

            <span className="text-xs font-medium text-emerald-400">
              API Online
            </span>

          </div>

          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;