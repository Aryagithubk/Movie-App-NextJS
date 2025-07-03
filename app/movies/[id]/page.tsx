// "use client";
// app/movies/[id]/page.tsx
import { fetchMovieById } from "@/lib/api";
import MovieDetail from "@/components/MovieDetail";
import { notFound } from "next/navigation";

export default async function MovieDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  try {
    const movie = await fetchMovieById(id);

    if (!movie || movie.Response === "False") {
      notFound();
    }

    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <MovieDetail movie={movie} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}
