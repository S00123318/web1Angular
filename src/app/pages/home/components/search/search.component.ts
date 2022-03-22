import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';


  
  
  constructor() {
    const movieSearchBox = (<HTMLInputElement>document.getElementById('movie-search-box'));
    const searchList = document.getElementById('search-list');
    const resultGrid = document.getElementById('result-grid');

    async function loadMovies(searchTerm: any) {
      const URL = `http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=93bca4d2`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data);
      if( data.Response == "True") displayMovieList(data.search)

    }
    loadMovies('batman');

    function findMovie(){
      let searchTerm = (movieSearchBox?.value).trim();
      if(searchTerm.length > 0){
        searchList?.classList.remove('hide-search-list');
      } else {
        searchList?.classList.add('hide-search-list')
      }
      console.log(searchTerm);
    }

   function displayMovieList(movies: any) {
    
  }
  
  }

   
  ngOnInit(): void {
  }

 
  searchMovie(): void{
    console.log('Search Term', this.searchTerm);
  }
  
 
}
