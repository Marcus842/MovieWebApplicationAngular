import { Component} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../app/movies/movie-card/movie-card.component';
import { HeaderComponent } from '../app/header/header.component';
import { MoviesService } from '../services/movies.service';
import { Movie } from './movies/movie/movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieCardComponent, HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieWebApplicationAngular';
  movies!: Movie[];
  enteredTitle = '';
  constructor(private moviesService: MoviesService) {
  }
  onSubmit() {
      this.movies = this.moviesService.getMovies(this.enteredTitle);
  }
}
