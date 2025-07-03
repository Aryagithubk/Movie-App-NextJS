import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com";

const omdb = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: "d1eeb45b",
  },
  timeout: 5000,
});

export const fetchMoviesBySearch = async (query: string, page: number = 1) => {
  try {
    const res = await omdb.get("/", {
      params: {
        s: query,
        type: "movie",
        page,
      },
    });

    if (res.data.Response === "True") {
      return {
        movies: res.data.Search,
        totalResults: parseInt(res.data.totalResults, 10),
      };
    } else {
      return {
        movies: [],
        totalResults: 0,
      };
    }
  } catch (err) {
    console.error("Failed to fetch movies:", err);
    return {
      movies: [],
      totalResults: 0,
    };
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    const res = await omdb.get("/", {
      params: {
        i: id,
        plot: "full",
      },
    });

    if (res.data.Response === "True") {
      return res.data;
    } else {
      throw new Error("Movie not found");
    }
  } catch (err) {
    console.error("Failed to fetch movie by ID:", err);
    throw err;
  }
};
