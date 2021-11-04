import { SEARCH_URL } from './../../environments/environment';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IMovie } from '../models/movie.interface';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class MovieService {
  public films!: IMovie[];
  public filmsSub!: Observable<IMovie[]>;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.API_KEY}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getMovie(movieId: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(
      `${environment.BASE_URL}/movie/${movieId}`,
      this.httpOptions
    );
  }

  public searchMovies(query: string): Observable<IMovie[]> {
    this.filmsSub = this.httpClient.get<IMovie[]>(`${SEARCH_URL + query}`);
    return this.httpClient.get<IMovie[]>(`${SEARCH_URL + query}`);
  }

  public getMovies(): Observable<IMovie[]> {
    this.httpClient
      .get<IMovie[]>(`${environment.BASE_URL}/movie/popular`, this.httpOptions)
      .subscribe((movies: any) => {
        this.films = movies.results;
      });
    return this.httpClient.get<IMovie[]>(
      `${environment.BASE_URL}/movie/popular`,
      this.httpOptions
    );
  }
}
