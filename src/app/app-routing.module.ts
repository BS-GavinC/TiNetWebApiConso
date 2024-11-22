import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/pages/login/login.component';
import {MovieViewListComponent} from './movies/pages/movie-view-list/movie-view-list.component';
import {MovieCreateComponent} from './movies/pages/movie-create/movie-create.component';
import {MovieUpdateComponent} from './movies/pages/movie-update/movie-update.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "movies", component : MovieViewListComponent},
  {path : "movies/create", component : MovieCreateComponent},
  {path : "movies/update/:id", component : MovieUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
