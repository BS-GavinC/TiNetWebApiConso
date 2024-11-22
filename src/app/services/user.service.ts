import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLoginDTO} from '../models/user/DTO/UserLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService{

  constructor(private httpClient : HttpClient) {
    super("users");
  }

  public login(dto : UserLoginDTO) : Observable<string> {
    return this.httpClient.post(`${this.route}/login`, dto, { responseType: 'text' });
  }
}
