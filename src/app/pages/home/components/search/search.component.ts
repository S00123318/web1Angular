import { isNull } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, pluck, switchMap } from 'rxjs';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchMovie') searchMovie: any ;
  search:any =''
  showContainer:boolean = false
  showMovie:boolean  = false
  movies:any = []
  selectedMovie: any;

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
    console.log('123123')
  }
  ngAfterViewInit() {
   
    fromEvent(this.searchMovie.nativeElement, 'keyup')
    .pipe(
      debounceTime(500),
      pluck('target', 'value'),
      distinctUntilChanged(),
      map((value) => value),
      switchMap( (value: any) => {
        this.showMovie = false
        this.showContainer = false
        return this.searchService.searchByTitle(value)

      }
      )
    )
    .subscribe((res: any) => {
      if(!res.Error){
        this.showContainer = true
        this.movies = res.Search
      }
      else{
        this.showContainer = false
      }
     
    });
}
  
selectMovie(movie:any){
  this.showContainer = false
  this.showMovie = true
  this.selectedMovie = movie
}
 

}
  
 

