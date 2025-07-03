// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\components\MovieCard.tsx
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
    <Link href={`/movies/${imdbID}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <Image
          src={Poster !== "N/A" ? Poster : "/placeholder.png"}
          alt={Title}
          width={300}
          height={450}
          className="rounded-t-md w-full h-72 object-cover"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold truncate">{Title}</h3>
          <p className="text-muted-foreground text-sm">{Year}</p>
        </CardContent>
      </Card>
    </Link>
  );
}