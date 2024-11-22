import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import { LoginComponent } from './auth/pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {tokenInterceptor} from './interceptors/token.interceptor';
import { BannerComponent } from './banner/banner/banner.component';
import { MovieViewListComponent } from './movies/pages/movie-view-list/movie-view-list.component';
import { MovieCreateComponent } from './movies/pages/movie-create/movie-create.component';
import { MovieUpdateComponent } from './movies/pages/movie-update/movie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerComponent,
    MovieViewListComponent,
    MovieCreateComponent,
    MovieUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(withFetch(), withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
