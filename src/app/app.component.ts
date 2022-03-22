import { Component } from '@angular/core';
import { } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieProject';

  thingsToDo = [
    'Learn JavaScript'
  ]
}
