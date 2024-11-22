import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieListView} from '../models/movies/movieListView';
import {MovieDetails} from '../models/movies/movieDetails';
import {MovieCreateFormDTO} from '../models/movies/DTO/MovieCreateFormDTO';
import {MovieUpdateFormDTO} from '../models/movies/DTO/MovieUpdateFormDTO';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends HttpService{

  constructor(private httpClient: HttpClient) {
    super('movies');
  }

  public getAll(limit : number | null = null, offset : number | null = null) : Observable<MovieListView[]>{
      return this.httpClient.get<MovieListView[]>(`${this.route}?limit=${limit ?? 20}&offset=${offset ?? 0}`);
  }

  public getById(id : number) : Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`${this.route}/${id}`);
  }

  public create(dto : MovieCreateFormDTO) : Observable<MovieDetails>{
    return this.httpClient.post<MovieDetails>(`${this.route}`, dto)
  }

  public update(id: number, dto : MovieUpdateFormDTO) : Observable<MovieDetails>{
    return this.httpClient.put<MovieDetails>(`${this.route}/${id}`, dto)
  }

}
