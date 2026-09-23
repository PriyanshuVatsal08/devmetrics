import { useState } from "react";
// import ThemeToggle from "../Theme/ThemeToggle";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import Dashboard from "./Dashboard";

import useDebounce from "../hooks/useDebounce";
import useGithub from "../hooks/useGithub";
import useTheme from "../hooks/useTheme";

const Home = () => {
  const [username, setUsername] =useState("");

  const debouncedUsername = useDebounce(username, 700);

  const {
    user,
    repositories,
    loading,
    error,
  } = useGithub(debouncedUsername);

  const {darkMode,setDarkMode} = useTheme();

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-white"
          : "min-h-screen bg-slate-100 text-slate-950"
      }
    >

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

        <section className="mb-12 text-center">

          <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">

            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-400" />

            <span className="text-xs font-medium text-blue-400">
              Developer Analytics
            </span>

          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

            <span className="text-white">
              Understand Your
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              GitHub Activity
            </span>

          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Explore GitHub profiles, repository
            statistics, programming languages,
            stars, forks and more.
          </p>

        </section>

        <SearchBar
          value={username}
          onChange={setUsername}
        />

        <ErrorMessage message={error} />

        {loading && <Loading />}

        {!loading && user && (
          <div className="mt-12">
            <Dashboard
              user={user}
              repositories={repositories}
            />
          </div>
        )}

        {!loading &&
          !user &&
          !error && (
            <div className="py-24 text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <span className="text-2xl">
                  📊
                </span>
              </div>

              <h2 className="text-xl font-semibold text-slate-300">
                Start exploring
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Enter a GitHub username above
                to generate analytics.
              </p>

            </div>
          )}

      </main>

      <footer className="border-t border-slate-900 py-8 text-center">
        <p className="text-sm text-slate-600">
          DevMetrics • Built with React &
          Tailwind CSS
        </p>
      </footer>

    </div>
  );
};

export default Home;