import {
  BookOpen,
  Star,
  GitFork,
  Users,
} from "lucide-react";

import ProfileCard from "../components/Profile/ProfileCard";
import StatCard from "../components/Dashboard/StatCard";
import RepositoryList from "../components/Dashboard/RepositoryList";
import LanguageChart from "../components/Charts/LanguageChart";
import StarsChart from "../components/Charts/StarsChart";

import {
  calculateTotalStars,
  calculateTotalForks,
} from "../utils/githubUtils";

const Dashboard = ({
  user,
  repositories,
}) => {
  const totalStars =
    calculateTotalStars(repositories);

  const totalForks =
    calculateTotalForks(repositories);

  return (
    <div className="space-y-8">

      {/* Profile */}
      <ProfileCard user={user} />

      {/* Statistics */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">
            Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            GitHub profile statistics
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Repositories"
            value={user.public_repos}
            icon={BookOpen}
            gradient="from-blue-500 to-cyan-500"
            iconColor="text-blue-400"
          />

          <StatCard
            title="Total Stars"
            value={totalStars}
            icon={Star}
            gradient="from-yellow-500 to-orange-500"
            iconColor="text-yellow-400"
          />

          <StatCard
            title="Total Forks"
            value={totalForks}
            icon={GitFork}
            gradient="from-purple-500 to-pink-500"
            iconColor="text-purple-400"
          />

          <StatCard
            title="Followers"
            value={user.followers}
            icon={Users}
            gradient="from-green-500 to-emerald-500"
            iconColor="text-green-400"
          />

        </div>
      </section>

      {/* Charts */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">
            Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Visual representation of repository data
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <LanguageChart
            repositories={repositories}
          />

          <StarsChart
            repositories={repositories}
          />

        </div>
      </section>

      {/* Repositories */}
      <RepositoryList
        repositories={repositories}
      />

    </div>
  );
};

export default Dashboard;

