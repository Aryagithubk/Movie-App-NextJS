"use client";

import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchTerm } from "@/redux/movieSlice";
import { fetchMoviesBySearch } from "@/lib/api";

export default function SearchBar() {
  const [searchTerm, setSearchTermLocal] = useState("");
  const [suggestions, setSuggestions] = useState<
    { Title: string; imdbID: string }[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const debouncedSearch = useDebounce(searchTerm, 300);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  // Only load previous searches on client after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prev = localStorage.getItem("movie_prev_searches");
      if (prev) setPreviousSearches(JSON.parse(prev));
    }
  }, []);

  // Save previous searches to localStorage
  const saveSearch = (term: string) => {
    if (!term.trim()) return;
    let updated = [term, ...previousSearches.filter((t) => t !== term)];
    if (updated.length > 5) updated = updated.slice(0, 5);
    setPreviousSearches(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("movie_prev_searches", JSON.stringify(updated));
    }
  };

  // Fetch suggestions as user types
  useEffect(() => {
    let active = true;
    if (debouncedSearch.trim()) {
      fetchMoviesBySearch(debouncedSearch, 1).then((res) => {
        if (active) setSuggestions(res.movies?.slice(0, 5) || []);
      });
    } else {
      setSuggestions([]);
    }
    return () => {
      active = false;
    };
  }, [debouncedSearch]);

  // Only dispatch search when user hits Enter or clicks a suggestion
  const handleSelect = (term: string) => {
    setSearchTermLocal(term);
    dispatch(setSearchTerm(term));
    saveSearch(term);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative my-4 w-full max-w-md mx-auto">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTermLocal(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        className="w-full shadow-md rounded-lg px-4 py-2 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchTerm.trim()) {
            handleSelect(searchTerm.trim());
          }
        }}
      />
      {showSuggestions &&
        (suggestions.length > 0 || previousSearches.length > 0) && (
          <div className="absolute z-20 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg shadow-lg mt-1">
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((movie) => (
                  <li
                    key={movie.imdbID}
                    className="px-4 py-2 cursor-pointer hover:bg-primary/10 transition"
                    onMouseDown={() => handleSelect(movie.Title)}
                  >
                    {movie.Title}
                  </li>
                ))}
              </ul>
            )}
            {previousSearches.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs text-gray-500">
                Previous searches:
                <div className="flex flex-wrap gap-2 mt-1">
                  {previousSearches.map((term) => (
                    <span
                      key={term}
                      className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded cursor-pointer hover:bg-primary/10"
                      onMouseDown={() => handleSelect(term)}
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
    </div>
  );
}

// // components/SearchBar.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { useDebounce } from "@/hooks/useDebounce";
// import { useAppDispatch } from "@/redux/hooks";
// import { setSearchTerm } from "@/redux/movieSlice";

// export default function SearchBar() {
//   const [searchTerm, setSearchTermLocal] = useState("");
//   const debouncedSearch = useDebounce(searchTerm, 500);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(setSearchTerm(debouncedSearch));
//   }, [debouncedSearch, dispatch]);

//   return (
//     <div className="my-4">
//       <Input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={(e) => setSearchTermLocal(e.target.value)}
//         className="w-full max-w-md mx-auto"
//       />
//     </div>
//   );
// }
