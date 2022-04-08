import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Movie1 } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieServices {
  movies = [
    {
      name: 'Batman',
      director: 'John wayne',
    }
    
  ];

  constructor() {}

  fetchMovies(): Observable<Movie1[]> {
    return of(this.movies).pipe(delay(1000));
  }
 

  addMovie(newMovie: Movie1): Observable<Movie1> {
    this.movies.unshift(newMovie);
    return of(newMovie).pipe(delay(1000));
  }

  deleteMovie(movie: Movie1): Observable<any> {
    const index = this.movies.findIndex((m) => m.name === movie.name);
    this.movies.splice(index, 1);
    return of({ success: true }).pipe(delay(1000));
  }

  
}
