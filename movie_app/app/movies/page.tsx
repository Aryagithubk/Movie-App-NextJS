"use client";

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import Pagination from "@/components/Pagination";
import { Spinner } from "@/components/ui/spinner";
import { fetchMovies } from "@/redux/movieSlice";

export default function MoviesPage() {
  const dispatch = useAppDispatch();
  const { movies, loading, error, totalPages } = useAppSelector((state) => state.movie);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage }));
  }, [currentPage, dispatch]);

  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Trending Movies</h1>
        <ThemeToggle />
      </div>

      <SearchBar />

      {loading ? (
        <div className="flex justify-center mt-10">
          <Spinner className="w-6 h-6 text-muted-foreground animate-spin" />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <>
          <MovieList movies={movies} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </main>
  );
}