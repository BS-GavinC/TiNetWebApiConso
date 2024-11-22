import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-create',
  standalone: false,

  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css'
})
export class MovieCreateComponent {

  form : FormGroup;
  errorMessage : string | undefined;

  constructor(
    private formBuilder : FormBuilder,
    private movieService : MovieService,
    private router : Router
  ) {
    this.form = formBuilder.group({
      title : ['', [Validators.required]],
      synopsis : ['', Validators.required],
      director : ['', [Validators.required]],
      release : ['', Validators.required],
    })
  }

  public create(){
    if (this.form.valid){
      this.errorMessage = undefined
      this.movieService.create(this.form.value).subscribe({
        next : () => {
          this.router.navigate(["movies"])
        }
      })
    }
    else{
      this.errorMessage = "Il faut remplir tout les champs."
    }

  }

}
