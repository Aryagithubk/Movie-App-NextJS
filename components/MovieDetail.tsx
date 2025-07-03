"use client";
// components/MovieDetail.tsx
import Image from "next/image";
import StarRating from "./StarRating";
import { MovieDetail as MovieDetailType } from "@/types/movie";
import { Card, CardContent } from "@/components/ui/card";

export default function MovieDetail({ movie }: { movie: MovieDetailType }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          width={300}
          height={450}
          className="object-cover w-full md:w-1/3 h-auto"
        />
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">
            {movie.Title} ({movie.Year})
          </h2>
          <p className="text-sm text-muted-foreground">{movie.Genre}</p>
          <p className="text-sm">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="text-sm">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-sm">{movie.Plot}</p>

          <div>
            <p className="text-sm mb-1 font-medium">Your Rating:</p>
            <StarRating imdbID={movie.imdbID} />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
