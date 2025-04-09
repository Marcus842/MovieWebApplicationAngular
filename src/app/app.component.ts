import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../app/movies/movie-card/movie-card.component';
import { HeaderComponent } from '../app/header/header.component';
import { MoviesService } from '../services/movies.service';
import { Movie } from './movies/movie/movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieCardComponent, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieWebApplicationAngular';
  movies!: Movie[];
  enteredTitle = '';
  pageIndex = 1;
  totalNumberOSearchResults!: string;
  totalNumberOfPages = 1;

  constructor(private moviesService: MoviesService) {
  }
  onSubmit() {
    this.pageIndex = 1;
    this.FetchMovies();
  };


  onNextPage() {
    this.pageIndex = this.pageIndex + 1;
    this.FetchMovies();
  }

  onPreviousPage() {
    this.pageIndex = this.pageIndex - 1;
    this.FetchMovies();
  }

  FetchMovies() {
    this.moviesService.getMovies(this.enteredTitle, this.pageIndex).subscribe(res => {
      this.movies = res.Search;
      this.totalNumberOSearchResults = res.totalResults;
      this.totalNumberOfPages = Math.ceil(parseInt(res.totalResults) / 10);
    });
  }
}
