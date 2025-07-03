// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\types\movie.ts
export interface MovieShort {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieState {
  movies: MovieShort[];
  loading: boolean;
  error: string | null;
  totalPages: number;
}