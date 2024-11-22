import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form : FormGroup;
  errorMessage: string | undefined;
  successMessage : string | undefined;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
  ) {
    this.form = this.formBuilder.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", [Validators.required]]
    })
  }

  public login(){
    if (this.form.valid){
      this.errorMessage = undefined;
      this.userService.login(this.form.value).subscribe({
        next : (jwt : string) => {
          this.successMessage = "Connection réussie/établie/success/trobien !"
          localStorage.setItem("tinet_token", jwt);
        },
        error : (err) => {
          console.error(err)
          this.errorMessage = "Oups mauvaise mémoire/connection"
        }
      })
    }
    else{
      this.errorMessage = "Bah, faut remplir heiiiiin !"
    }

  }

}
