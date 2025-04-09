import { Movie } from "./movie.model";

export interface ResponseOmdb {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
