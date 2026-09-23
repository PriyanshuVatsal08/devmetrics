import {
  Search,
  EthernetPort ,
} from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mx-auto max-w-2xl">

      <div className="relative">

        <EthernetPort 
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Enter GitHub username..."
          className="
            w-full
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/80
            py-4
            pl-12
            pr-14
            text-white
            shadow-2xl
            shadow-blue-950/20
            outline-none
            transition
            duration-300
            placeholder:text-slate-600
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/10
          "
        />

        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Search
            size={20}
            className="text-blue-400"
          />
        </div>

      </div>

      <p className="mt-3 text-center text-xs text-slate-600">
        Search any public GitHub profile
      </p>

    </div>
  );
};

export default SearchBar;