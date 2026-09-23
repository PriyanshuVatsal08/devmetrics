import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

const RepositoryFilters = ({
  searchTerm,
  setSearchTerm,
  language,
  setLanguage,
  sortBy,
  setSortBy,
  languages,
}) => {
  return (
    <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-4">
      
      <div className="mb-4 flex items-center gap-2">
        <SlidersHorizontal
          size={18}
          className="text-blue-400"
        />

        <h3 className="font-semibold text-white">
          Repository Filters
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search repository..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-950
              py-3
              pl-10
              pr-4
              text-sm
              text-white
              outline-none
              placeholder:text-slate-600
              focus:border-blue-500
            "
          />
        </div>

        {/* Language */}
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-sm
            text-white
            outline-none
            focus:border-blue-500
          "
        >
          <option value="All">
            All Languages
          </option>

          {languages.map((lang) => (
            <option
              key={lang}
              value={lang}
            >
              {lang}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-sm
            text-white
            outline-none
            focus:border-blue-500
          "
        >
          <option value="updated">
            Sort: Recently Updated
          </option>

          <option value="stars">
            Sort: Most Stars
          </option>

          <option value="forks">
            Sort: Most Forks
          </option>
        </select>

      </div>
    </div>
  );
};

export default RepositoryFilters;