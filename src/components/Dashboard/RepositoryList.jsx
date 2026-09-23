import { useMemo, useState } from "react";

import {
  GitBranch,
} from "lucide-react";

import RepositoryCard from "./RepositoryCard";
import RepositoryFilters from "./RepositoryFilters";
import RepositoryDetails from "./RepositoryDetails";

import {
  searchRepositories,
  filterByLanguage,
  sortRepositories,
} from "../../utils/githubUtils";

const RepositoryList = ({
  repositories,
}) => {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [language, setLanguage] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("updated");

  const [visibleCount, setVisibleCount] =
    useState(8);

  const [selectedRepo, setSelectedRepo] =
    useState(null);

  // Get available languages
  const languages = useMemo(() => {
    const languageSet = new Set();

    repositories.forEach((repo) => {
      if (repo.language) {
        languageSet.add(repo.language);
      }
    });

    return [...languageSet].sort();
  }, [repositories]);

  // Search
  const searchedRepositories = useMemo(() => {
    return searchRepositories(
      repositories,
      searchTerm
    );
  }, [repositories, searchTerm]);

  // Filter
  const filteredRepositories = useMemo(() => {
    return filterByLanguage(
      searchedRepositories,
      language
    );
  }, [
    searchedRepositories,
    language,
  ]);

  // Sort
  const sortedRepositories = useMemo(() => {
    return sortRepositories(
      filteredRepositories,
      sortBy
    );
  }, [
    filteredRepositories,
    sortBy,
  ]);

  // Pagination / Load More
  const visibleRepositories =
    sortedRepositories.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    sortedRepositories.length;

  return (
    <section>

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-white">
            <GitBranch
              size={21}
              className="text-blue-400"
            />

            Repositories
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Search, filter and explore repositories
          </p>
        </div>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
          {sortedRepositories.length} repos
        </span>

      </div>

      {/* Filters */}
      <RepositoryFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        language={language}
        setLanguage={setLanguage}
        sortBy={sortBy}
        setSortBy={setSortBy}
        languages={languages}
      />

      {/* Repository Cards */}
      {visibleRepositories.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">

          {visibleRepositories.map(
            (repo) => (
              <RepositoryCard
                key={repo.id}
                repo={repo}
                onViewDetails={
                  setSelectedRepo
                }
              />
            )
          )}

        </div>
      ) : (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 py-16 text-center">

          <p className="text-slate-400">
            No repositories found.
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Try changing your search or filters.
          </p>

        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-6 text-center">

          <button
            onClick={() =>
              setVisibleCount(
                (prev) => prev + 8
              )
            }
            className="
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-300
              transition
              hover:border-blue-500
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            Load More
          </button>

        </div>
      )}

      {/* Repository Details Modal */}
      <RepositoryDetails
        repo={selectedRepo}
        onClose={() =>
          setSelectedRepo(null)
        }
      />

    </section>
  );
};

export default RepositoryList;