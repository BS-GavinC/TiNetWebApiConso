import { Component } from '@angular/core';
import {MovieService} from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private movieService : MovieService) {

  }

  public clicked(){
    this.movieService.getAll().subscribe({
      next : (data) => {
        console.log(data)
      },
    })
  }

}
