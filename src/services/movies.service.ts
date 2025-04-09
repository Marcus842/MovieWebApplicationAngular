import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ResponseOmdb } from "./response.model";

@Injectable({ providedIn: 'root' })

export class MoviesService {
  private apiKey = environment.omdbApiKey;
  constructor(private http: HttpClient) { }

  getMovies(title: string, pageIndex: number): Observable<ResponseOmdb> {
    return this.http.get<ResponseOmdb>(`https://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}&page=${pageIndex}`).pipe(
      catchError(err => {
        console.error('API error:', err);
        return throwError(() => err);
      })
    );
  }
}
