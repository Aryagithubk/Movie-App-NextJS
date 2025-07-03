// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\components\SearchBar.tsx
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppDispatch } from "@/redux/hooks";
import { fetchMovies } from "@/redux/movieSlice";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (debouncedSearch.trim()) {
      dispatch(fetchMovies({ query: debouncedSearch, page: 1 })); // Reset to page 1 on new search
    }
  }, [debouncedSearch, dispatch]);

  return (
    <div className="my-4">
      <Input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mx-auto border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
      />
    </div>
  );
}