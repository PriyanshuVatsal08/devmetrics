import {
  Star,
  GitFork,
  Code2,
  ExternalLink,
} from "lucide-react";

const RepositoryCard = ({
  repo,
  onViewDetails,
}) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-5
        transition
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-xl
        hover:shadow-blue-950/20
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-white">
            {repo.name}
          </h3>

          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
            {repo.description ||
              "No description available."}
          </p>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="
            rounded-lg
            p-2
            text-slate-500
            transition
            hover:bg-slate-800
            hover:text-blue-400
          "
        >
          <ExternalLink size={18} />
        </a>

      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">

        <span className="flex items-center gap-1.5 text-yellow-400">
          <Star size={16} />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1.5 text-purple-400">
          <GitFork size={16} />
          {repo.forks_count}
        </span>

        {repo.language && (
          <span className="flex items-center gap-1.5 text-blue-400">
            <Code2 size={16} />
            {repo.language}
          </span>
        )}

      </div>

      <button
        onClick={() =>
          onViewDetails(repo)
        }
        className="
          mt-5
          w-full
          rounded-xl
          border
          border-slate-700
          py-2.5
          text-sm
          font-medium
          text-slate-300
          transition
          hover:border-blue-500
          hover:bg-blue-500/10
          hover:text-blue-400
        "
      >
        View Details
      </button>

    </div>
  );
};

export default RepositoryCard;