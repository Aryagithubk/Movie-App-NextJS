// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\components\MovieList.tsx
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
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}