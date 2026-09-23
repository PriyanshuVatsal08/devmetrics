import {
  MapPin,
  Building2,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

import ProfileStats from "./ProfileStats";

const ProfileCard = ({ user }) => {

  const joinedDate = new Date(
    user.created_at
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

      {/* Background Gradient */}

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-pink-600/20" />

      <div className="relative p-6 pt-12 md:p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center">

          {/* Avatar */}

          <img
            src={user.avatar_url}
            alt={user.login}
            className="
              h-28
              w-28
              rounded-3xl
              border-4
              border-slate-800
              object-cover
              shadow-xl
            "
          />

          {/* User Information */}

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h2 className="text-3xl font-bold text-white">
                {user.name || user.login}
              </h2>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                @{user.login}
              </span>

            </div>

            <p className="mt-3 max-w-2xl text-slate-400">
              {user.bio ||
                "This GitHub user has not added a bio yet."}
            </p>

            {/* User Details */}

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">

              {user.location && (
                <span className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-pink-400"
                  />
                  {user.location}
                </span>
              )}

              {user.company && (
                <span className="flex items-center gap-2">
                  <Building2
                    size={16}
                    className="text-purple-400"
                  />
                  {user.company}
                </span>
              )}

              <span className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-green-400"
                />
                Joined {joinedDate}
              </span>

            </div>

          </div>

          {/* GitHub Button */}

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="
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
            GitHub
            <ExternalLink size={16} />
          </a>

        </div>

        {/* Profile Statistics */}

        <div className="mt-8 border-t border-slate-800 pt-6">

          <ProfileStats user={user} />

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;