// redux/movieSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMoviesBySearch } from "@/lib/api";
import { MovieShort } from "@/types/movie";

interface MovieState {
  movies: MovieShort[];
  loading: boolean;
  error: string | null;
  totalResults: number;
  searchTerm: string;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
  totalResults: 0,
  searchTerm: "",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (
    { query, page }: { query: string; page: number },
    { rejectWithValue }
  ) => {
    const res = await fetchMoviesBySearch(query, page);
    if (res.movies) {
      return { ...res, query };
    } else {
      return rejectWithValue("No movies found");
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
        state.loading = false;
        state.searchTerm = action.payload.query;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch movies";
        state.movies = [];
        state.totalResults = 0;
      });
  },
});

export const { setSearchTerm } = movieSlice.actions;
export default movieSlice.reducer;
