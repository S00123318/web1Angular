import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/movielist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mymovielist',
  templateUrl: './mymovielist.component.html',
  styleUrls: ['./mymovielist.component.css']
})
export class MymovielistComponent implements OnInit {

  movieList =[]
  constructor(private _movielistService: MovielistService,
    private _router: Router) { }

  ngOnInit(): void {
    this._movielistService.getMovieList()
    .subscribe(
      res => this.movieList = res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401){
            this._router.navigate(['/login'])

          }
        }
      }
    )
  }

}
