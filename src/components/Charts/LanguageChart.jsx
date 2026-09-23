import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const LanguageChart = ({ repositories }) => {

  const languages = {};

  repositories.forEach((repo) => {

    if (repo.language) {
      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }

  });

  const languageNames =
    Object.keys(languages);

  const languageValues =
    Object.values(languages);

  const colors = [
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
    "#22C55E",
    "#F59E0B",
    "#06B6D4",
    "#EF4444",
    "#14B8A6",
    "#6366F1",
    "#F97316",
  ];

  const data = {
    labels: languageNames,

    datasets: [
      {
        data: languageValues,
        backgroundColor: colors,
        borderColor: "#0F172A",
        borderWidth: 4,
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6">

        <h2 className="text-lg font-bold text-white">
          Language Distribution
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Technologies used across repositories
        </p>

      </div>

      {languageNames.length > 0 ? (

        <div className="mx-auto max-w-sm">
          <Doughnut
            data={data}
            options={{
              responsive: true,

              plugins: {
                legend: {
                  position: "bottom",

                  labels: {
                    color: "#94A3B8",
                    padding: 16,
                    usePointStyle: true,
                    pointStyle: "circle",
                  },
                },
              },
            }}
          />
        </div>

      ) : (

        <div className="flex h-64 items-center justify-center text-slate-500">
          No language data available.
        </div>

      )}

    </div>
  );
};

export default LanguageChart;