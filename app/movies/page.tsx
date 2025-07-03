"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import { Spinner } from "@/components/ui/spinner";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import { fetchMovies } from "@/redux/movieSlice";

const DEFAULT_QUERY = "Avengers"; // Trending movies

export default function MoviesPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { movies, loading, error, totalResults, searchTerm } = useAppSelector(
    (state) => state.movie
  );
  const [page, setPage] = useState(1);

  // Fetch trending movies on mount or when searchTerm/page changes
  useEffect(() => {
    const query = searchTerm?.trim() || DEFAULT_QUERY;
    dispatch(fetchMovies({ query, page }));
  }, [dispatch, searchTerm, page]);

  // Calculate total pages (OMDB returns up to 10 results per page)
  const totalPages = Math.ceil((totalResults || 0) / 10);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 max-w-6xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary drop-shadow">
            🎬 Movie Explorer
          </h1>
          <ThemeToggle />
        </div>

        {/* Back and Home Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            className="px-4 py-2 rounded bg-muted text-primary hover:bg-primary/10 border border-primary transition"
            onClick={() => router.push("/movies")}
          >
            🏠 Home
          </button>
        </div>

        <SearchBar />

        {loading ? (
          <div className="flex justify-center mt-10">
            <Spinner className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : error ? (
          <p className="text-red-500 text-center mt-6">{error}</p>
        ) : (
          <>
            <MovieList movies={movies} />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
