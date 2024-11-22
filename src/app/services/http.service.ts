import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export abstract class HttpService {

  constructor(route : string) {
    this.route = 'https://localhost:7070/api/' + route;
  }

  protected route: string;
}
