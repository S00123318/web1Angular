import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/movielist.service';

@Component({
  selector: 'app-mymovielist',
  templateUrl: './mymovielist.component.html',
  styleUrls: ['./mymovielist.component.css']
})
export class MymovielistComponent implements OnInit {

  movieList =[]
  constructor(private _movielistService: MovielistService) { }

  ngOnInit(): void {
    this._movielistService.getMovieList()
    .subscribe(
      res => this.movieList = res,
      err => console.log(err)
    )
  }

}
