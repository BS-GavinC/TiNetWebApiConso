import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieDetails} from '../../../models/movies/movieDetails';

@Component({
  selector: 'app-movie-update',
  standalone: false,

  templateUrl: './movie-update.component.html',
  styleUrl: './movie-update.component.css'
})
export class MovieUpdateComponent {

  form! : FormGroup

  movieId : number;

  errorMessage : string | undefined;

  constructor(
    private formBuilder : FormBuilder,
    private movieService : MovieService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ) {
    this.movieId = this.activatedRoute.snapshot.params["id"]

    this.movieService.getById(this.movieId).subscribe({
      next : (movie) =>{
        this.form = formBuilder.group({
          title : [movie.title, [Validators.required]],
          synopsis : [movie.synopsis, Validators.required],
          director : [movie.director, []],
          release : [movie.release, Validators.required],
        })
      }
    })


  }

  public Update(){
    if (this.form.valid){
      this.errorMessage = undefined
      this.movieService.update(this.movieId, this.form.value).subscribe({
        next : () => {
          this.router.navigate(["/movies"])
        },
        error : (err) => {
          let errors = err.error.errors
          this.errorMessage = ""
          for (let error of Object.entries(errors)){
            this.errorMessage += `${error[0]} : ${error[1]} \n`
          }

        }
      })
    }
    else{
      this.errorMessage = "Champs invalides"
    }
  }

}
