import { useEffect, useState } from "react";
import {
  getUser,
  getRepositories,
} from "../services/githubApi";

const useGithub = (username) => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) {
      setUser(null);
      setRepositories([]);
      return;
    }

    const fetchGithubData = async () => {
      try {
        setLoading(true);
        setError("");

        const [userData, repoData] = await Promise.all([
          getUser(username),
          getRepositories(username),
        ]);

        setUser(userData);
        setRepositories(repoData);
      } catch (error) {
        setUser(null);
        setRepositories([]);

        if (error.response?.status === 404) {
          setError("GitHub user not found.");
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  return {
    user,
    repositories,
    loading,
    error,
  };
};

export default useGithub;