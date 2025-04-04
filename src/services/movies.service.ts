import { DUMMY_MOVIES } from "../dummy-movies";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MoviesService {
  getMovies(title: string) {
    return DUMMY_MOVIES;
  }
}
