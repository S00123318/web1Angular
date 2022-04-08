import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  private _movieListUrl = "http://localhost:3000/api/mymovielist";
  constructor(private http: HttpClient) { }

  getMovieList(){
    return this.http.get<any>(this._movieListUrl)
  }
}
