export const calculateTotalStars = (repositories) => {
  return repositories.reduce(
    (total, repo) =>
      total + repo.stargazers_count,
    0
  );
};

export const calculateTotalForks = (repositories) => {
  return repositories.reduce(
    (total, repo) =>
      total + repo.forks_count,
    0
  );
};

export const getLanguageStats = (repositories) => {
  const languages = {};

  repositories.forEach((repo) => {
    if (repo.language) {
      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }
  });

  return languages;
};

export const getTopRepositories = (
  repositories,
  limit = 8
) => {
  return [...repositories]
    .sort(
      (a, b) =>
        b.stargazers_count -
        a.stargazers_count
    )
    .slice(0, limit);
};

export const getRecentRepositories = (
  repositories,
  limit = 8
) => {
  return [...repositories]
    .sort(
      (a, b) =>
        new Date(b.updated_at) -
        new Date(a.updated_at)
    )
    .slice(0, limit);
};

// Search repositories
export const searchRepositories = (
  repositories,
  searchTerm
) => {
  if (!searchTerm.trim()) {
    return repositories;
  }

  return repositories.filter((repo) =>
    repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
};

// Filter repositories by language
export const filterByLanguage = (
  repositories,
  language
) => {
  if (language === "All") {
    return repositories;
  }

  return repositories.filter(
    (repo) => repo.language === language
  );
};

// Sort repositories
export const sortRepositories = (
  repositories,
  sortBy
) => {
  const sorted = [...repositories];

  switch (sortBy) {
    case "stars":
      return sorted.sort(
        (a, b) =>
          b.stargazers_count -
          a.stargazers_count
      );

    case "forks":
      return sorted.sort(
        (a, b) =>
          b.forks_count -
          a.forks_count
      );

    case "updated":
      return sorted.sort(
        (a, b) =>
          new Date(b.updated_at) -
          new Date(a.updated_at)
      );

    default:
      return sorted;
  }
};