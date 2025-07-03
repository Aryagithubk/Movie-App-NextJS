"use client";
// components/MovieCard.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type MovieCardProps = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export default function MovieCard({
  imdbID,
  Title,
  Year,
  Poster,
}: MovieCardProps) {
  return (
    <Link href={`/movies/${imdbID}`} className="block focus:outline-none group">
      <Card className="relative cursor-pointer">
        <div className="relative w-full h-72 overflow-hidden">
          <Image
            src={Poster !== "N/A" ? Poster : "/placeholder.png"}
            alt={Title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 300px"
            priority={false}
          />
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold truncate group-hover:text-primary transition-colors duration-300">
            {Title}
          </h3>
          <p className="text-muted-foreground text-sm">{Year}</p>
        </CardContent>
        {/* Animated arrow on hover */}
        <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary text-xl">
          &rarr;
        </span>
      </Card>
    </Link>
  );
}
