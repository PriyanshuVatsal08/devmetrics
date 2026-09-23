import {
  Users,
  UserPlus,
  BookOpen,
} from "lucide-react";

const ProfileStats = ({ user }) => {
  return (
    <div className="grid grid-cols-3 gap-4">

      {/* Followers */}

      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-center transition hover:border-pink-500/30">

        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10">
          <Users
            size={20}
            className="text-pink-400"
          />
        </div>

        <p className="text-xl font-bold text-white">
          {user.followers.toLocaleString()}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Followers
        </p>

      </div>

      {/* Following */}

      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-center transition hover:border-purple-500/30">

        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
          <UserPlus
            size={20}
            className="text-purple-400"
          />
        </div>

        <p className="text-xl font-bold text-white">
          {user.following.toLocaleString()}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Following
        </p>

      </div>

      {/* Repositories */}

      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-center transition hover:border-blue-500/30">

        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
          <BookOpen
            size={20}
            className="text-blue-400"
          />
        </div>

        <p className="text-xl font-bold text-white">
          {user.public_repos.toLocaleString()}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Repositories
        </p>

      </div>

    </div>
  );
};

export default ProfileStats;