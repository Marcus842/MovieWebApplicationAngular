import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ResponseOmdb } from "../models/response.model";

@Injectable({ providedIn: 'root' })

export class MoviesService {
  private apiKey = environment.omdbApiKey;
  private apiBaseUrl = 'https://www.omdbapi.com';
  constructor(private http: HttpClient) { }

  getMovies(title: string, pageIndex: number): Observable<ResponseOmdb> {
    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('s', title)
      .set('page', pageIndex);
    return this.http.get<ResponseOmdb>(this.apiBaseUrl, {params}).pipe(
      catchError(err => {
        console.error('API error:', err);
        return throwError(() => err);
      })
    );
  }
}
