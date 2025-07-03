// "use client";
// components/MovieList.tsx
import MovieCard from "./MovieCard";
import { MovieShort } from "@/types/movie";

type MovieListProps = {
  movies: MovieShort[];
};

export default function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return (
      <p className="text-center text-muted-foreground mt-8">No movies found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
