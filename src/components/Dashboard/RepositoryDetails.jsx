import {
  X,
  Star,
  GitFork,
  Code2,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

const RepositoryDetails = ({
  repo,
  onClose,
}) => {
  if (!repo) return null;

  const createdDate = new Date(
    repo.created_at
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const updatedDate = new Date(
    repo.updated_at
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/70
        p-5
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-2xl
          overflow-y-auto
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          shadow-2xl
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            rounded-lg
            p-2
            text-slate-500
            transition
            hover:bg-slate-800
            hover:text-white
          "
        >
          <X size={20} />
        </button>

        {/* Repository Name */}
        <h2 className="pr-10 text-2xl font-bold text-white">
          {repo.name}
        </h2>

        <p className="mt-3 text-slate-400">
          {repo.description ||
            "No description available."}
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            <Star
              size={20}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-2 text-lg font-bold text-white">
              {repo.stargazers_count}
            </p>

            <p className="text-xs text-slate-500">
              Stars
            </p>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            <GitFork
              size={20}
              className="mx-auto text-purple-400"
            />

            <p className="mt-2 text-lg font-bold text-white">
              {repo.forks_count}
            </p>

            <p className="text-xs text-slate-500">
              Forks
            </p>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-center">
            <Code2
              size={20}
              className="mx-auto text-blue-400"
            />

            <p className="mt-2 text-lg font-bold text-white">
              {repo.language || "N/A"}
            </p>

            <p className="text-xs text-slate-500">
              Language
            </p>
          </div>

        </div>

        {/* Topics */}
        {repo.topics?.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Topics
            </h3>

            <div className="flex flex-wrap gap-2">
              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="
                    rounded-full
                    bg-blue-500/10
                    px-3
                    py-1
                    text-xs
                    text-blue-400
                  "
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dates */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl bg-slate-950 p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <CalendarDays size={16} />

              <span className="text-xs">
                Created
              </span>
            </div>

            <p className="mt-2 text-sm text-white">
              {createdDate}
            </p>
          </div>

          <div className="rounded-xl bg-slate-950 p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <CalendarDays size={16} />

              <span className="text-xs">
                Last Updated
              </span>
            </div>

            <p className="mt-2 text-sm text-white">
              {updatedDate}
            </p>
          </div>

        </div>

        {/* GitHub Button */}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-950
            transition
            hover:bg-slate-200
          "
        >
          View on GitHub
          <ExternalLink size={16} />
        </a>

      </div>
    </div>
  );
};

export default RepositoryDetails;