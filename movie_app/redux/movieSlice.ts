// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\redux\movieSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMoviesBySearch } from '@/lib/api';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async ({ page }: { page: number }) => {
    const response = await fetchMoviesBySearch('trending', page);
    return response;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    loading: false,
    error: null,
    totalPages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.movies;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;