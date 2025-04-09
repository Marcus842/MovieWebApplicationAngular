import { Movie } from "../app/movies/movie/movie.model";

export interface ResponseOmdb {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
