// components/StarRating.tsx
"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  imdbID: string;
};

export default function StarRating({ imdbID }: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem(`rating-${imdbID}`);
    if (saved) {
      setRating(Number(saved));
    }
  }, [imdbID]);

  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem(`rating-${imdbID}`, value.toString());
  };

  return (
    <div className="flex gap-1 mt-2">
      {Array.from({ length: 5 }).map((_, idx) => {
        const starValue = idx + 1;
        return (
          <Star
            key={idx}
            className={`w-5 h-5 cursor-pointer transition-colors ${
              starValue <= rating
                ? "fill-yellow-500 text-yellow-500"
                : "text-muted-foreground"
            }`}
            onClick={() => handleRating(starValue)}
          />
        );
      })}
    </div>
  );
}
