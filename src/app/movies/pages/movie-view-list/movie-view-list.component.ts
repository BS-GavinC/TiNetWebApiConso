import { Component } from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {MovieListView} from '../../../models/movies/movieListView';

@Component({
  selector: 'app-movie-view-list',
  standalone: false,

  templateUrl: './movie-view-list.component.html',
  styleUrl: './movie-view-list.component.css'
})
export class MovieViewListComponent {

  movieList : MovieListView[] = [];

  constructor(private movieService : MovieService) {
      this.movieService.getAll().subscribe({
        next : (movies) => {
          this.movieList = movies;
        }
      })
  }

}
