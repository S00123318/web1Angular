import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = environment.apiKey;
  
  constructor(private http: HttpClient) { 
   
    
  }

  
  
}
