import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const StarsChart = ({ repositories }) => {

  const sortedRepos = [...repositories]
    .sort(
      (a, b) =>
        b.stargazers_count -
        a.stargazers_count
    )
    .slice(0, 8);

  const data = {
    labels: sortedRepos.map(
      (repo) =>
        repo.name.length > 15
          ? repo.name.substring(0, 15) + "..."
          : repo.name
    ),

    datasets: [
      {
        label: "Stars",

        data: sortedRepos.map(
          (repo) => repo.stargazers_count
        ),

        backgroundColor: [
          "#3B82F6",
          "#6366F1",
          "#8B5CF6",
          "#A855F7",
          "#D946EF",
          "#EC4899",
          "#F43F5E",
          "#F97316",
        ],

        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6">

        <h2 className="text-lg font-bold text-white">
          Repository Stars
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Most starred repositories
        </p>

      </div>

      {sortedRepos.length > 0 ? (

        <Bar
          data={data}
          options={{
            responsive: true,

            plugins: {
              legend: {
                display: false,
              },
            },

            scales: {
              x: {
                ticks: {
                  color: "#94A3B8",
                },

                grid: {
                  display: false,
                },
              },

              y: {
                beginAtZero: true,

                ticks: {
                  color: "#94A3B8",
                },

                grid: {
                  color: "#1E293B",
                },
              },
            },
          }}
        />

      ) : (

        <div className="flex h-64 items-center justify-center text-slate-500">
          No repository data available.
        </div>

      )}

    </div>
  );
};

export default StarsChart;